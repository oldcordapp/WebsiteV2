import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
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
import { ReactComponent as OpenSource } from "../assets/opensource.svg";
import { useOutletContext } from "react-router-dom";

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
          <a
            href="https://staging.oldcordapp.com/selector"
            className={`button button-hurple button-pushLeft ${styles.button}`}
            onClick={(e) => {
              e.preventDefault();
              onGetStarted("https://staging.oldcordapp.com/selector");
            }}
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
                    href="#"
                    onClick={(e) => handleImageClick(e, img.releaseDateCode)}
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
                Woah, a time machine???
              </span>
              <span className={styles["upsell-text"]}>
                Want to relive the glory days of chatting? We gotchu fam! Jump
                back to any version you want - from the OG 2015 vibes to that
                wild moment when @someone came to party (and definitely didn't
                cause any chaos... totally... 100%... maybe). Each version comes
                with its own aesthetic and quirks. It's basically time travel,
                but for your chat!
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
                Remember the simple life? When checking profiles didn't feel
                like staring directly into the sun? WELL GUESS WHAT - we brought
                back that sweet, sweet simplicity! No more rainbow lightning
                storm profile themes or spinning galaxy backgrounds. Just pure,
                clean, beautiful interfaces that won't make your retinas cry.
                Your eyes can thank us later (⌐■_■)
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
                BRAIN BRAIN BRAIN BRAIN @someone IS HERE!
              </span>
              <span
                className={styles["upsell-text"]}
                style={{ marginBottom: "5px", fontStyle: "italic" }}
              >
                glitch intensifies
              </span>
              <span
                className={styles["upsell-text"]}
                style={{ marginBottom: "5px" }}
              >
                INTRODUCING: The most RANDOM feature you never knew you needed!
                Just type @someone and BOOM! Random chaos! Random pings! Random
                EVERYTHING!
              </span>
              <span
                className={styles["upsell-text"]}
                style={{ marginBottom: "5px" }}
              >
                HELP! I've fallen into randomness and I need @someone!
                EEEEEEEEEEEEEEEEEEEEEEEE-{" "}
                <span style={{ fontStyle: "italic" }}>glitch noises</span>
              </span>
              <span
                className={styles["upsell-text"]}
                style={{ marginBottom: "5px" }}
              >
                Will it ping your local meme master? That person who's been AFK
                since forever? WHO KNOWS! That's the beauty of @someone!
              </span>
              <span
                className={styles["upsell-text"]}
                style={{ marginBottom: "5px" }}
              >
                DO IT DO IT DO IT DO IT (Warning: May cause excessive randomness
                and spontaneous ping parties)
              </span>
            </div>
          </div>
        </div>
        <div className={styles["upsell-section-dark"]}>
          <div className={styles["upsell-section-content"]}>
            <div>
              <span className={styles["upsell-title"]}>
                Run your own server (for real tho)
              </span>
              <span className={styles["upsell-text"]}>
                Want to host your own slice of chat history? NOW YOU CAN! Our
                open-source* server implementation lets you set up faster than
                you can say "wumpus". It's powerful, it's FREE, and it's
                probably not haunted!
              </span>
              <span className={styles["upsell-small-print"]}>
                *Legal Shenanigans (but like, the good kind): Client-side magic
                happens right in your browser - our bootloader fetches files,
                patches them on the fly, and runs everything locally!
                Server-side? 100% our own reverse-engineered code built from
                public archaeology - no yoinking their code! We're just
                time-traveling researchers exploring your chat app's rad past!
                While this is still in that gray area like other mods, we keep
                it squeaky clean by running everything locally and focusing
                purely on historical exploration. Think of us as your friendly
                neighborhood chat app museum! *polishes archaeology badge* 🏺
                Check out our about page for the full scoop!
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
            <a
              href="https://staging.oldcordapp.com/selector"
              className={`button button-hurple ${styles.button} ${styles["upsell-button"]}`}
              onClick={(e) => {
                e.preventDefault();
                onGetStarted("https://staging.oldcordapp.com/selector");
              }}
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
