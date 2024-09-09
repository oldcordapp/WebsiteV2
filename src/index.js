import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Cookies from "js-cookie";

import "./index.css";
import Header from "./components/header.js";
import Notice from "./components/notice.js";
import Footer from "./components/footer.js";
import DialogBox from "./components/dialogBox.js";

import MainPage from "./pages/mainpage.js";
import Download from "./pages/download.js";
import Terms from "./pages/terms.js";
import Privacy from "./pages/privacy.js";
import Guidelines from "./pages/guidelines.js";
import About from "./pages/about.js";
import Thanks from "./pages/thanks.js";

import FourOhFour from "./pages/404.js";

const App = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [textColorClass, setTextColorClass] = useState("");

  const handleGetStarted = () => {
    const shouldSkipDialog = Cookies.get("skip-dialog");
    if (shouldSkipDialog === "true") {
      window.location.href = "https://staging.oldcordapp.com/selector";
    } else {
      setDialogOpen(true);
    }
  };

  const handleCheckboxChange = (checked) => {
    setChecked(checked);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setChecked(false);
  };

  const handleOpenSelector = () => {
    window.location.href = "https://staging.oldcordapp.com/selector";
  };

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    document.body.className = "";
    setTextColorClass(""); // Reset text color class

    switch (path) {
      case "/":
        document.body.classList.add("bg-dark");
        setTextColorClass("text-dark-gray");
        break;
      case "/download":
      case "/terms":
      case "/privacy":
      case "/guidelines":
      case "/about":
      case "/thanks":
        document.body.classList.add("bg-hurple");
        setTextColorClass("text-light-gray");
        break;
      default:
        document.body.classList.add("bg-white");
        setTextColorClass("text-black");
    }
  }, [location.pathname]);

  return (
    <>
      <Header onGetStarted={handleGetStarted} textColorClass={textColorClass} />
      <Notice />
      <Routes>
        <Route
          path="/"
          element={<MainPage onGetStarted={handleGetStarted} />}
        />
        <Route path="/download" element={<Download />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route
          path="/about"
          element={<About onGetStarted={handleGetStarted} />}
        />
        <Route
          path="/thanks"
          element={<Thanks />}
        />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
      <Footer onGetStarted={handleGetStarted} textColorClass={textColorClass} />
      <DialogBox
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onCheckboxChange={handleCheckboxChange}
        isChecked={isChecked}
        onOpenSelector={handleOpenSelector}
      />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
