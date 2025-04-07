import React, { useState, useEffect, createContext, useCallback } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Cookies from "js-cookie";

import "./index.css";
import Header from "./components/header.jsx";
import Notice from "./components/notice.jsx";
import Footer from "./components/footer.jsx";
import DialogBox from "./components/dialogBox.jsx";

import MainPage from "./pages/mainpage.jsx";
import Download from "./pages/download.jsx";
import Terms from "./pages/terms.jsx";
import Privacy from "./pages/privacy.jsx";
import Guidelines from "./pages/guidelines.jsx";
import About from "./pages/about.jsx";
import Thanks from "./pages/thanks.jsx";
import CookiePolicy from "./pages/cookies.jsx";

import FourOhFour from "./pages/404.jsx";

const GetStartedContext = createContext();

const Layout = () => {
  const location = useLocation();
  const [dialog, setDialog] = useState({ isOpen: false, redirectUrl: "" });
  const [textClass, setTextClass] = useState(""); 
  
  useEffect(() => {
    const bgClass = location.pathname === "/" ? "bg-dark" : 
                   location.pathname === "/404" ? "bg-white" : "bg-hurple";
    const newTextClass = location.pathname === "/" ? "text-dark-gray" : 
                        location.pathname === "/404" ? "text-black" : "text-light-gray";
                     
    document.body.className = bgClass;
    setTextClass(newTextClass);
    return () => document.body.className = "";
  }, [location]);

  const handleGetStarted = useCallback((redirectUrl) => {
    if (Cookies.get("legal_agreed") === "true") {
      window.location.href = redirectUrl;
    } else {
      setDialog({ isOpen: true, redirectUrl });
    }
  }, []);

  return (
    <GetStartedContext.Provider value={handleGetStarted}>
      <Header onGetStarted={handleGetStarted} textColorClass={textClass} />
      <Notice />
      <Outlet context={[handleGetStarted]} />
      <Footer onGetStarted={handleGetStarted} textColorClass={textClass} />
      <DialogBox 
        {...dialog} 
        onClose={() => setDialog(prev => ({ ...prev, isOpen: false }))} 
      />
    </GetStartedContext.Provider>
  );
};

// Export context for use in other components
export { GetStartedContext };

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/download" element={<Download />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/guidelines" element={<Guidelines />} />
      <Route path="/cookies" element={<CookiePolicy />} />
      <Route path="/about" element={<About />} />
      <Route path="/thanks" element={<Thanks />} />
      <Route path="*" element={<FourOhFour />} />
    </Route>
  </Routes>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
