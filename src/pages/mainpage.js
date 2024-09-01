import React from "react";
import taglines from "../assets/taglines.json";

const MainPage = () => {
  const randomIndex = Math.floor(Math.random() * taglines.length);
  const randomTagline = taglines[randomIndex];

  return (
    <div>
      <div className="mainPageHeader">
        <div className="taglineContainer">
          <div className="taglineTitle">{randomTagline.title}</div>
          <div className="taglineSubitle">{randomTagline.subtitle}</div>
        </div>
        <div className="buttonContainer">
          <span className="button button-hurple button-pushLeft">Get Started</span>
          <span className="button button-white">Host your own Oldcord instance</span>
        </div>
      </div>
      <div className="mainPageUpsell">
        Test
      </div>
    </div>
  );
};

export default MainPage;
