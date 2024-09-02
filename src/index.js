import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cookies from 'js-cookie';

import "./index.css";
import Header from "./components/header.js";
import Notice from "./components/notice.js";
import Footer from "./components/footer.js";

import MainPage from "./pages/mainpage.js";
import DialogBox from "./components/dialogBox.js";

const App = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const handleGetStarted = () => {
    const shouldSkipDialog = Cookies.get('skip-dialog');
    if (shouldSkipDialog === 'true') {
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

  return (
    <>
      <Header onGetStarted={handleGetStarted} />
      <Notice />
      <Routes>
        <Route
          path="/"
          element={<MainPage onGetStarted={handleGetStarted} />}
        />
      </Routes>
      <Footer onGetStarted={handleGetStarted} />
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