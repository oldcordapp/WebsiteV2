import styles from "./footer.module.css";
import { ReactComponent as Hurple } from "../assets/hurple.svg";
import { Link } from "react-router-dom";

const Footer = ({ onGetStarted, textColorClass }) => {
  return (
    <div
      className={`${styles.section} ${textColorClass} ${styles[textColorClass]}`}
    >
      <div className={styles.content}>
        <div className={`${styles.navigation}`}>
          <div>
            <Link to="/">
              <Hurple className={styles.logo} />
            </Link>
          </div>
          <div className={styles["navigation-section"]}>
            <span className={styles["navigation-header"]}>Oldcord-related</span>
            <span className={styles["navigation-link"]}>
              <Link to="about">About Oldcord</Link>
            </span>
            <span className={styles["navigation-link"]}>
              <Link to="download">Download</Link>
            </span>
            <span className={styles["navigation-link"]}>
              <Link to="thanks">Special Thanks</Link>
            </span>
          </div>
          <div className={styles["navigation-section"]}>
            <span className={styles["navigation-header"]}>Advanced users</span>
            <span className={styles["navigation-link"]}>
              <a href="https://staging.oldcordapp.com/developers">Bot Portal</a>
            </span>
            <span className={styles["navigation-link"]}>
              <a href="https://staging.oldcordapp.com/developers/docs/intro">
                API Documentation
              </a>
            </span>
          </div>
          <div className={styles["navigation-section"]}>
            <span className={styles["navigation-header"]}>
              Instance-related
            </span>
            <span className={styles["navigation-link"]}>
              <Link to="terms">Terms and Conditions</Link>
            </span>
            <span className={styles["navigation-link"]}>
              <Link to="privacy">Privacy Policy</Link>
            </span>
            <span className={styles["navigation-link"]}>
              <Link to="cookies">Cookie Policy</Link>
            </span>
            <span className={styles["navigation-link"]}>
              <Link to="guidelines">Instance Guidelines</Link>
            </span>
            <span className={styles["navigation-link"]}>Status</span>
          </div>
          <div className={styles["navigation-section"]}>
            <span className={styles["navigation-header"]}>More</span>
            <span className={styles["navigation-link"]}>
              <a href="https://github.com/oldcordapp/OldCordV3?tab=readme-ov-file#project-support-outline">
                Reimplementaion progress
              </a>
            </span>
          </div>
        </div>
        <hr className={styles.separator} />
        <div
          className={`${styles.upsell} ${textColorClass} ${styles[textColorClass]}`}
        >
          <div className={styles["upsell-text"]}>
            <span className={styles["upsell-text-title"]}>
              What are you waiting for?
            </span>
            <span className={styles["upsell-text-subtitle"]}>
              Use Oldcord now!
            </span>
          </div>
          <span
            className={`button button-hurple ${styles.button}`}
            onClick={() =>
              onGetStarted("https://staging.oldcordapp.com/selector")
            }
          >
            Get Started
          </span>
        </div>
        <span
          className={`${styles.notice} ${textColorClass} ${styles[textColorClass]}`}
          style={{ marginTop: "40px" }}
        >
          Oldcord is an old Discord historical preservation/revival project and
          is not affiliated with or endorsed by Discord, Inc. This website and
          related projects have been built from the ground up and does not
          incorporate any code from Discord.
        </span>
        <span
          className={`${styles.notice} ${textColorClass} ${styles[textColorClass]}`}
        >
          Some registered trademarks may appear on Oldcord, and those rights
          (along with others) belong to their respective owners. In short, they
          are not ours.
        </span>
      </div>
    </div>
  );
};

export default Footer;
