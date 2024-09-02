import styled, { keyframes } from 'styled-components';

import "./background-dark.css";
import styles from "./mainpage.module.css";
import taglines from "../assets/taglines.json";
import image2015 from "../assets/images/server_settings.png";
import image2016 from "../assets/images/november_2016.png";
import image2017 from "../assets/images/hummus.png";
import image2018 from "../assets/images/atsomeone.png";

const marqueeAnimation = (width) => keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-${width}px);
  }
`;

const MarqueeContent = styled.div`
  display: flex;
  animation: ${({totalWidth}) => marqueeAnimation(totalWidth)} 10s linear infinite;
`;

const Image = styled.img`
  margin-right: 10px;
  max-width: 200px;
  max-height: 150px;
  min-width: 200px;
  min-height: 150px;
`;

const MainPage = () => {
  const randomIndex = Math.floor(Math.random() * taglines.length);
  const randomTagline = taglines[randomIndex];

  const images = [image2015, image2016, image2017, image2018];

  let totalWidth = 0;

  for (let i = 1; i <= images.length; i++) {
    totalWidth = totalWidth + 200 + 10
  }

  return (
    <div>
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>{randomTagline.title}</div>
          <div className={styles["tagline-subtitle"]}>{randomTagline.subtitle}</div>
        </div>
        <div className={styles["button-container"]}>
          <span className={`button button-hurple button-pushLeft ${styles.button}`}>Get Started</span>
          <span className={`button button-white ${styles.button}`}>Host your own Oldcord instance</span>
        </div>
        <div className={styles.marquee}>
          <MarqueeContent totalWidth={totalWidth}>
            {images.concat(images).concat(images).map((img, index) => (
              <Image key={index} src={img} alt={`Image ${index}`} />
            ))}
          </MarqueeContent>
        </div>
      </div>
      <div className={styles.upsell}>
        <div className={styles["upsell-content"]}>
          Oldcord is better
        </div>
      </div>
    </div>
  );
};

export default MainPage;