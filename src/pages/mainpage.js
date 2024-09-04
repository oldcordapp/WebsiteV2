import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import PageTitle from '../components/pageTitle.js';

import styles from "./mainpage.module.css";
import taglines from "../assets/taglines.json";
import image2015 from "../assets/images/server_settings.png";
import image2016 from "../assets/images/november_2016.png";
import image2017 from "../assets/images/hummus.png";
import image2018 from "../assets/images/atsomeone.png";
import selector from "../assets/images/selector.png";
import simple from "../assets/images/user_profile.png";
import atsomeone from "../assets/images/i_need_atsomeone.png";
import opensource from "../assets/opensource.svg";

const width = 200;
const height = 150;
const marginRight = 10;

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
  animation: ${({ totalWidth }) => marqueeAnimation(totalWidth)} 15s linear
    infinite;
`;

const Image = styled.img`
  margin-right: ${marginRight}px;
  max-width: ${width}px;
  max-height: ${height}px;
  min-width: ${width}px;
  min-height: ${height}px;
`;

const MainPage = ({ onGetStarted }) => {
  const [randomTagline, setRandomTagline] = useState({
    title: "",
    subtitle: "",
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * taglines.length);
    setRandomTagline(taglines[randomIndex]);
  }, []);

  const images = [image2015, image2016, image2017, image2018];

  let totalWidth = 0;

  for (let i = 1; i <= images.length; i++) {
    totalWidth = totalWidth + width + marginRight;
  }

  return (
    <div>
      <PageTitle title="Oldcord - late 2010s instant messaging service revival"/>
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>{randomTagline.title}</div>
          <div className={`${styles["tagline-subtitle"]} text-dark-gray`}>
            {randomTagline.subtitle}
          </div>
        </div>
        <div className={styles["button-container"]}>
          <span
            className={`button button-hurple button-pushLeft ${styles.button}`}
            onClick={onGetStarted}
          >
            Get Started
          </span>
          <span className={`button button-white ${styles.button}`}>
            <a href="https://github.com/oldcordapp/OldCordV3">Host your own Oldcord instance</a>
          </span>
        </div>
        <div className={styles.marquee}>
          <MarqueeContent totalWidth={totalWidth}>
            {images
              .concat(images)
              .concat(images)
              .map((img, index) => (
                <Image key={index} src={img} alt={`Image ${index}`} />
              ))}
          </MarqueeContent>
        </div>
      </div>
      <div className={styles.upsell}>
        <div className={styles["upsell-section-white"]}>
          <div className={styles["upsell-section-content"]}>
            <img src={selector} />
            <div>
              <span className={styles["upsell-title"]}>
                Select your own build version
              </span>
              <span className={styles["upsell-text"]}>
                Looking to take a trip back to 2015? Eager to explore April
                Fools' features like @someone? The selector lets you rewind time
                and experience how the instant messaging service you love has
                evolved over the years.
              </span>
            </div>
          </div>
        </div>
        <div className={styles["upsell-section-dark"]}>
          <div className={styles["upsell-section-content"]}>
            <div>
              <span className={styles["upsell-title"]}>Simplier is better</span>
              <span className={styles["upsell-text"]}>
                Are you fed up with clicking on user profiles that make your
                eyes go blind? Or perhaps those flashy profile picture
                decorations make you want to gag? With Oldcord, you can finally
                enjoy a clutter-free experience without all that eye candy!
              </span>
            </div>
            <img src={simple} />
          </div>
        </div>
        <div className={styles["upsell-section-white"]}>
          <div className={styles["upsell-section-content"]}>
            <img src={atsomeone} />
            <div>
              <span className={styles["upsell-title"]}>
                Welcome to the marketing page
              </span>
              <span className={styles["upsell-text"]}>
                Help I've fallen and I cannot get up I need @someone!
              </span>
            </div>
          </div>
        </div>
        <div className={styles["upsell-section-dark"]}>
          <div className={styles["upsell-section-content"]}>
            <div>
              <span className={styles["upsell-title"]}>Take back control</span>
              <span className={styles["upsell-text"]}>
                Curious about what it’s like to manage an instant messaging
                service? Oldcord is free and open source*, allowing you to set
                up your own Oldcord instance in no time!
              </span>
              <span className={styles["upsell-small-print"]}>
                *Clients coming from a certain instant messaging service are not
                open source. Instead they are downloaded and launched in the
                browser by the bootstrapper, with QoL features and bug fixes. We
                reverse-engineered the API and websocket responses using
                publicly available sources, and the server code does not include
                any code from that service.
              </span>
            </div>
            <img src={opensource} style={{ width: "200px" }} />
          </div>
        </div>
        <div className={styles["upsell-section-dark"]}>
          <div className={styles["upsell-section-use-now"]}>
            <span className={styles["upsell-title"]}>
              Use Oldcord now puhhhlease!
            </span>
            <span className={styles["upsell-text"]}>
              Experience non-bloat messaging nostalgia!
            </span>
            <span
              className={`button button-hurple ${styles.button} ${styles["upsell-button"]}`}
              onClick={onGetStarted}
            >
              Get Started
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
