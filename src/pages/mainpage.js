import { useEffect, useRef } from 'react';

import taglines from "../assets/taglines.json";

import image2015 from "../assets/images/server_settings.png";
import image2016 from "../assets/images/november_2016.png";
import image2017 from "../assets/images/hummus.png";
import image2018 from "../assets/images/atsomeone.png";

const MainPage = () => {
  const randomIndex = Math.floor(Math.random() * taglines.length);
  const randomTagline = taglines[randomIndex];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeContent = marqueeRef.current;
    if (marqueeContent) {
      const totalWidth = marqueeContent.scrollWidth;
      marqueeContent.style.animationDuration = `${totalWidth / 100}s`;
    }
  }, []);


  const images = [image2015, image2016, image2017, image2018];

  return (
    <div>
      <div className="mainPageHeader">
        <div className="taglineContainer">
          <div className="taglineTitle">{randomTagline.title}</div>
          <div className="taglineSubitle">{randomTagline.subtitle}</div>
        </div>
        <div className="buttonContainer">
          <span className="button button-hurple button-pushLeft">
            Get Started
          </span>
          <span className="button button-white">
            Host your own Oldcord instance
          </span>
        </div>
        <div className="marquee">
          <div className="marquee-content" ref={marqueeRef}>
            {images.concat(images).concat(images).map((img, index) => (
              <img key={index} src={img} alt={`Image ${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="mainPageUpsell">YEAH BOIIIII!</div>
    </div>
  );
};

export default MainPage;