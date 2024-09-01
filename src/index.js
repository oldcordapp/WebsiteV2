import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import Header from "./components/header.js";
import Notice from "./components/notice.js";
import Footer from "./components/footer.js";

import MainPage from "./pages/mainpage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Notice />
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);
