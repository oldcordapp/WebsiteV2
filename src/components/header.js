import styles from "./header.module.css";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Clyde } from "../assets/clyde.svg";
import { ReactComponent as Chirp } from "../assets/chirp.svg";
import { ReactComponent as GitHub } from "../assets/github.svg";

const Header = ({ onGetStarted }) => {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <Logo className={styles.logo} />
        <ul className={styles.navigation}>
          <li
            className={`${styles["list-item"]} ${styles["list-item-push-left"]}`}
          >
            Download
          </li>
          <li
            className={`${styles["list-item"]} ${styles["list-item-push-left"]}`}
          >
            Bot Portal
          </li>
        </ul>
        <ul className={styles["navigation-right"]}>
          <li
            className={`${styles["list-item"]} ${styles["list-item-push-right"]}`}
          >
            <Chirp className={styles["list-item-socials"]} />
          </li>
          <li
            className={`${styles["list-item"]} ${styles["list-item-push-right"]}`}
          >
            <Clyde className={styles["list-item-socials"]} />
          </li>
          <li
            className={`${styles["list-item"]} ${styles["list-item-push-right"]}`}
          >
            <GitHub className={styles["list-item-socials"]} />
          </li>
          <li
            className={`${styles["list-item"]} ${styles["open-button"]}`}
            onClick={onGetStarted}
          >
            Open Selector
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
