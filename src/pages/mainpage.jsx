import { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import MetaTags from "../components/metaTags.jsx";
import styles from "./mainpage.module.css";
import taglines from "../assets/taglines.json";
import image2015 from "../assets/images/server_settings.png";
import image2016 from "../assets/images/november_2016.png";
import image2017 from "../assets/images/hummus.png";
import image2018 from "../assets/images/atsomeone.png";
import selector from "../assets/images/selector.png";
import simple from "../assets/images/user_profile.png";
import atsomeone from "../assets/images/i_need_atsomeone.png";
import OpenSource from "../assets/opensource.svg?react";
import { useOutletContext } from "react-router-dom";
import Marquee from "../components/Marquee.jsx";

import Hurple from "../assets/hurple.svg?react";

const width = 200;
const height = 150;

const Image = styled.img`
  max-width: ${width}px;
  max-height: ${height}px;
  min-width: ${width}px;
  min-height: ${height}px;
  position: relative;
  display: block;

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
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent;
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

const MainPage = () => {
  const [onGetStarted] = useOutletContext();
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

  const handleImageClick = (e, releaseDateCode) => {
    e.preventDefault();
    const redirectUrl = `https://staging.oldcordapp.com/launch?release_date=${releaseDateCode}`;
    if (Cookies.get("legal_agreed") === "true") {
      window.location.href = redirectUrl;
    } else {
      onGetStarted(redirectUrl);
    }
  };

  return (
    <div>
      <MetaTags
        title="Oldcord — Late 2010s instant messaging service revival"
        description="Instant messaging service that is all fun and nostalgia. Rewind back to 2015-2018 now!"
      />
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>{randomTagline.title}</div>
          <div className={`${styles["tagline-subtitle"]} text-dark-gray`}>
            {randomTagline.subtitle}
          </div>
        </div>
        <div className={styles["button-container"]}>
          <a
            href="https://staging.oldcordapp.com/selector"
            className={`button button-hurple button-pushLeft ${styles.button}`}
            onClick={(e) => {
              e.preventDefault();
              onGetStarted("https://staging.oldcordapp.com/selector");
            }}
            style={{ display: "none" }}
          >
            Get Started
          </a>
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
          <Marquee speed={60} pauseOnHover={true} gap="10px">
            {images.map((img, index) => (
              <div
                key={index}
                onMouseEnter={(e) =>
                  handleMouseEnter(e, img.info, img.releaseDateCode)
                }
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  onClick={(e) => handleImageClick(e, img.releaseDateCode)}
                >
                  <Image src={img.src} alt={`Oldcord version from ${getFormattedDate(img.releaseDateCode)}`} />
                </a>
              </div>
            ))}
          </Marquee>
        </div>
        
      </div>
      <div className={styles.upsell}>
        <div className={styles["upsell-section-white"]}>
          <div className={styles["upsell-section-content"]}>
            <img src={selector} />
            <div>
              <span className={styles["upsell-title"]}>So many options!!!</span>
              <span className={styles["upsell-text"]}>
                Are you an old school kid or are you the mature<i>-ish</i> 2018
                kinda guy? We gotchu! There's never too many options in the
                Oldcord Selector. Not to your liking? We got a client mod
                built-in! Embrace, extend, and what you think is extinguish
                would actually be EXCITEMENT!
              </span>
            </div>
          </div>
        </div>
        <div className={styles["upsell-section-dark"]}>
          <div className={styles["upsell-section-content"]}>
            <div>
              <span className={styles["upsell-title"]}>
                No more flashbang profiles!!!
              </span>
              <span className={styles["upsell-text"]}>
                Seriously, remember that time where you open up a profile and
                did not flashbang you with profile decorations that screams too
                much for an instant messaging app? You got so annoyed when you
                checked Settings {">"} Accessibility only to find that you can
                only sync the colors back to your closen theme which should have
                been the default in the first place anyway but still couldn't
                get rid of those bajillion animations? Luckily 2018 and before
                doesn't have those and so you are safe! No more headaches!
              </span>
            </div>
            <img src={simple} />
          </div>
        </div>
        <div className={styles["upsell-section-logo-wrapper"]}>
          <div className={styles["upsell-section-dark"]} style={{height: "20px"}}/>
          <div
            className={`${styles["upsell-section-hurple"]} ${styles["upsell-section-logo-marquee-wrapper"]}`}
          >
            <div className={styles["upsell-section-logo-marquee"]}>
              <Marquee duration={60} gap="20px">
                <Hurple style={{ height: "30px" }} />
                <span
                  style={{ fontSize: "40px" }}
                  className={styles["upsell-text"]}
                >
                  Experience Nostalgia
                </span>
                <Hurple style={{ height: "30px" }} />
                <span
                  style={{ fontSize: "40px" }}
                  className={styles["upsell-text"]}
                >
                  Relive
                </span>
                <Hurple style={{ height: "30px" }} />
                <span
                  style={{ fontSize: "40px" }}
                  className={styles["upsell-text"]}
                >
                  Rediscover
                </span>
                <Hurple style={{ height: "30px" }} />
                <span
                  style={{ fontSize: "40px" }}
                  className={styles["upsell-text"]}
                >
                  Rewind
                </span>
              </Marquee>
            </div>
          </div>
          <div className={styles["upsell-section-white"]} style={{height: "20px"}}/>
        </div>
        <div className={styles["upsell-section-white"]}>
          <div className={styles["upsell-section-content"]}>
            <img src={atsomeone} />
            <div>
              <span className={styles["upsell-title"]}>
                BRAIN BRAIN BRAIN BRAIN BRAIN @someone is back!!!
              </span>
              <span
                className={styles["upsell-text"]}
                style={{ marginBottom: "5px" }}
              >
                Welcome to the marketing page! Remember back in 2018 they said
                "[Instant messaging service] now has @someone!" Only to be
                disappointed that it was an April Fools joke? Fe-e-ar not, my
                friend! Oldcord brought the feature back, and you can try out
                the effects of @someone as much as you like!
              </span>
              <small
                className={styles["upsell-small-print"]}
                style={{ marginBottom: "5px" }}
              >
                <i>Someone help me! I can't get up I need @someone!</i>
              </small>
            </div>
          </div>
        </div>
        <div className={styles["upsell-section-dark"]}>
          <div className={styles["upsell-section-content"]}>
            <div>
              <span className={styles["upsell-title"]}>
                Best of all, it's all open source!!!
              </span>
              <span className={styles["upsell-text"]}>
                If you're wondering, "isn't this a keylogger"? First of all, how
                can we log your keys within a sandboxed window of a browser? For
                real though, every code to run Oldcord is open source! You can
                help create new plugins, fix issues, submit bug report, and help
                make Oldcord better!
              </span>
              <span className={styles["upsell-small-print"]}>
                Here's the legal footnote: The code from the instant messaging
                service is not included in the code as they are closed source.
                To the lawyers from the service, we do not distribute modified
                propritetary code based of your service nor include your
                propritetary code in our repository in any shape or form and we
                strictly use publicly available information, please check the
                about page for more information.
              </span>
            </div>
            <OpenSource style={{ color: "#06152a" }} />
          </div>
        </div>
        <div className={styles["upsell-section-white"]}>
          <div className={styles["upsell-section-use-now"]}>
            <span className={styles["upsell-title"]}>
              Use Oldcord now puhhhlease!
            </span>
            <span className={styles["upsell-text"]}>
              Experience non-bloat messaging nostalgia!
            </span>
            <a
              href="https://staging.oldcordapp.com/selector"
              className={`button button-hurple ${styles.button} ${styles["upsell-button"]}`}
              onClick={(e) => {
                e.preventDefault();
                onGetStarted("https://staging.oldcordapp.com/selector");
              }}
              style={{ display: "none" }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;