import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import styles from "./404.module.css";

import Hurple from "../assets/hurple.svg?react";
import MetaTags from "../components/metaTags.jsx";

const FourOhFour = () => {
  const [onGetStarted] = useOutletContext();

  return (
    <div>
      <MetaTags title="Oldcord — Not Found" description="" />
      <div className={styles.section}>
        <div className={styles["section-content"]}>
          <span className={styles.title}>
            <span style={{ fontStyle: "italic" }}>WHOOPS</span> – A WILD 404
            APPEARED!
          </span>
          <span className={styles.subtitle}>
            <span style={{ fontStyle: "italic" }}>tips fedora</span> m'error
            page
          </span>
          <span className={styles.text}>
            Looks like you've wandered into the wrong neighborhood, friend!
            Don't worry though, Hurple (our totally-not-Henry vacuum friend
            who's rocking that sweet hurple color) is here to help clean up this
            mess faster than you can say "wumpus"!
          </span>
          <span className={styles.subtitle}>OwO what's this?</span>
          <span className={styles.text}>
            You've somehow managed to find a page that's as empty as your
            friend's voice channel at 3 AM. But hey, while Hurple is busy
            sucking up these pesky 404 particles, why not check out these
            actually existing places?
          </span>
          <span className={styles.subtitle}>Places to be a cool kid™:</span>
          <ul>
            <li className={styles.text}>
              <Link to="/" className={styles.bold}>
                Home{" "}
              </Link>
              — Back to the homepage, where all the cool kids hang out
            </li>
            <li className={styles.text}>
              <a
                href="https://staging.oldcordapp.com"
                className={styles.bold}
                onClick={(e) => {
                  e.preventDefault();
                  onGetStarted("https://staging.oldcordapp.com");
                }}
              >
                Go Back to Oldcord{" "}
              </a>
              — Return to your comfy server where people are probably still
              spamming @everyone
            </li>
            <li className={styles.text}>
              <Link to="about" className={styles.bold}>
                About Us{" "}
              </Link>
              — Learn about how we're bringing back the glory days of Discord
              (circa 2015-2018), one vacuum-sealed package at a time!
            </li>
          </ul>
          <span className={styles.subtitle}>Fun Facts About Hurple:</span>
          <ul>
            <li className={styles.text}>
              He's like Henry the Hoover's long-lost cousin who fell into a vat
              of hurple dye (that's hue shifted blurple for you newcomers)
            </li>
            <li className={styles.text}>
              He's so powerful, he once accidentally vacuumed up three #general
              channels and a moderator
            </li>
            <li className={styles.text}>
              Some say he's been cleaning up 404 errors since before Discord had
              dark theme (spooky!)
            </li>
            <li className={styles.text}>
              He's totally not associated with that{" "}
              <span style={{ fontStyle: "italic" }}>other</span> chat platform -
              he's an Oldcord original!
            </li>
          </ul>
          <span className={styles.subtitle}>While You're Here...</span>
          <span className={styles.text}>
            Why not help Hurple tidy up? Legend has it that if you press
            Alt+F4... just kidding! We may be old school, but we're not{" "}
            <span style={{ fontStyle: "italic" }}>that</span> mean. 😉
          </span>
          <span className={styles.text}>
            Remember: Every 404 error is just an opportunity for Hurple to show
            off his mad vacuum skills! Unlike some{" "}
            <span style={{ fontStyle: "italic" }}>other</span> cleaning
            appliances, he never takes a break (looking at you, Roomba).
          </span>
          <span className={styles.text}>
            Tips: If you see any dust bunnies hiding in the client files, don't
            worry - Hurple's got your back! He's basically like a vacuum-powered
            antivirus, but for nostalgia.
          </span>
          <hr
            style={{
              border: "1px solid #06152a",
              width: "100%",
              margin: "1rem 0",
            }}
          />
          <span className={styles.text}>
            Brought to you by Oldcord - Where "old" doesn't mean obsolete, it
            means awesome! Warning: Hurple may occasionally make vacuum-related
            dad jokes. We are not responsible for any groaning that may occur.
          </span>
        </div>
        <Hurple className={styles.logo} />
      </div>
    </div>
  );
};

export default FourOhFour;
