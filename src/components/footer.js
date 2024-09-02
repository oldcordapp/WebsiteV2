import styles from "./footer.module.css";
import { ReactComponent as Hurple } from "../assets/hurple.svg";

const Footer = ({ onGetStarted }) => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.navigation}>
          <div>
            <Hurple className={styles.logo} />
          </div>
          <div className={styles["navigation-section"]}>
            <span className={styles["navigation-header"]}>Oldcord-related</span>
            <span className={styles["navigation-link"]}>Download</span>
            <span className={styles["navigation-link"]}>
              Branding Guidelines
            </span>
          </div>
          <div className={styles["navigation-section"]}>
            <span className={styles["navigation-header"]}>Advanced users</span>
            <span className={styles["navigation-link"]}>Bot Portal</span>
            <span className={styles["navigation-link"]}>API Documentation</span>
          </div>
          <div className={styles["navigation-section"]}>
            <span className={styles["navigation-header"]}>
              Instance-related
            </span>
            <span className={styles["navigation-link"]}>Terms</span>
            <span className={styles["navigation-link"]}>Privacy Policy</span>
            <span className={styles["navigation-link"]}>Guidelines</span>
            <span className={styles["navigation-link"]}>Status</span>
          </div>
          <div className={styles["navigation-section"]}>
            <span className={styles["navigation-header"]}>More</span>
            <span className={styles["navigation-link"]}>
              Reimplementaion progress
            </span>
          </div>
        </div>
        <hr className={styles.separator} />
        <div className={styles.upsell}>
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
            onClick={onGetStarted}
          >
            Get Started
          </span>
        </div>
        <span className={styles.notice}>
          Oldcord is an old Discord revival project and is not affiliated or
          endorsed by Discord, Inc. Do not login with your Discord account. This
          website is made from scratch and does not use any code from Discord in
          any way.
        </span>
      </div>
    </div>
  );
};

export default Footer;
