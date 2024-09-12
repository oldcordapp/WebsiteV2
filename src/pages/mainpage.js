import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import MetaTags from "../components/metaTags.js";
import styles from "./mainpage.module.css";
import taglines from "../assets/taglines.json";
import image2015 from "../assets/images/server_settings.png";
import image2016 from "../assets/images/november_2016.png";
import image2017 from "../assets/images/hummus.png";
import image2018 from "../assets/images/atsomeone.png";
import selector from "../assets/images/selector.png";
import simple from "../assets/images/user_profile.png";
import atsomeone from "../assets/images/i_need_atsomeone.png";
import { ReactComponent as OpenSource } from "../assets/opensource.svg";

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

const MarqueeContent = styled.div.withConfig({
  shouldForwardProp: (prop) => !["totalWidth"].includes(prop),
})`
  display: flex;
  animation: ${({ totalWidth }) => marqueeAnimation(totalWidth)} 15s linear
    infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const Image = styled.img`
  margin-right: ${marginRight}px;
  max-width: ${width}px;
  max-height: ${height}px;
  min-width: ${width}px;
  min-height: ${height}px;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background: white;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
  max-width: 300px;
  transform: translate(-50%, -100%);
  font-size: 14px;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    top: 100%; /* Move the triangle to the bottom */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent; /* Triangle pointing down */
  }
`;

const getFormattedDate = (releaseDateCode) => {
  const dateMapping = {
    june_12_2015: "June 12, 2015",
    november_3_2016: "November 3, 2016",
    march_30_2017: "March 30, 2017",
    april_1_2018: "April 1, 2018",
  };
  return dateMapping[releaseDateCode] || "Unknown Date";
};

const MainPage = ({ onGetStarted }) => {
  const [randomTagline, setRandomTagline] = useState({
    title: "",
    subtitle: "",
  });
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
    releaseDateCode: "",
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * taglines.length);
    setRandomTagline(taglines[randomIndex]);
  }, []);

  const images = [
    {
      src: image2015,
      releaseDateCode: "june_12_2015",
      info: "The first instant messaging service build that's archived! It looks so different than later versions.",
    },
    {
      src: image2016,
      releaseDateCode: "november_3_2016",
      info: "Your favourite instant messaging service now has reactions! (Very Epic Science Experiment)",
    },
    {
      src: image2017,
      releaseDateCode: "march_30_2017",
      info: "The Hummus experience! Last build before it got it's UI changed to what it is now.",
    },
    {
      src: image2018,
      releaseDateCode: "april_1_2018",
      info: "Help I've fallen and I cannot get up I need @someone!",
    },
  ];

  let totalWidth = images.length * (width + marginRight);

  const handleMouseEnter = (e, info, releaseDateCode) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const tooltipY = rect.top - 10;
    const tooltipX = rect.left + rect.width / 2;
    const formattedDate = getFormattedDate(releaseDateCode);

    setTooltip({
      visible: true,
      x: tooltipX,
      y: tooltipY,
      text: ` ${formattedDate}\n${info}`,
      releaseDateCode,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div>
      <MetaTags
        title="Oldcord — Late 2010s instant messaging service revival"
        description="Oldcord revives late 2010s instant messaging. Relive nostalgia while connecting with friends and building your own community in a familiar setting."
      />
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
          <a
            href="https://github.com/oldcordapp/OldCordV3"
            className="button-link"
          >
            <span className={`button button-white ${styles.button}`}>
              Host your own Oldcord instance
            </span>
          </a>
        </div>
        {tooltip.visible && tooltip.x && tooltip.y && (
          <Tooltip
            className="text-black"
            style={{
              top: tooltip.y,
              left: tooltip.x,
            }}
          >
            {tooltip.text.split("\n").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </Tooltip>
        )}
        <div className={styles.marquee}>
          <MarqueeContent totalWidth={totalWidth}>
            {images
              .concat(images)
              .concat(images)
              .map((img, index) => (
                <div
                  key={index}
                  style={{ position: "relative" }}
                  onMouseEnter={(e) =>
                    handleMouseEnter(e, img.info, img.releaseDateCode)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={`https://staging.oldcordapp.com/launch?release_date=${img.releaseDateCode}`}
                  >
                    <Image src={img.src} alt={`Image ${index}`} />
                  </a>
                </div>
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
                Curious about what it's like to manage an instant messaging
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
            <OpenSource style={{ color: "#06152a" }} />
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
