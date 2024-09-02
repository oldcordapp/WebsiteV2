import { Link } from "react-router-dom";

import styles from "./header.module.css";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Clyde } from "../assets/clyde.svg";
import { ReactComponent as Chirp } from "../assets/chirp.svg";
import { ReactComponent as GitHub } from "../assets/github.svg";

const Header = ({ onGetStarted, textColorClass }) => {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <Link to="/"><Logo className={styles.logo} /></Link>
        <ul className={`${styles.navigation} ${textColorClass} ${styles[textColorClass]}`}>
          <li className={`${styles["list-item"]} ${styles["list-item-push-left"]}`}>
            <Link to="download">Download</Link>
          </li>
          <li className={`${styles["list-item"]} ${styles["list-item-push-left"]}`}>
            <a href="https://staging.oldcordapp.com/developers">Bot Portal</a>
          </li>
        </ul>
        <ul className={`${styles["navigation-right"]} ${textColorClass} ${styles[textColorClass]}`}>
          <li className={`${styles["list-item"]} ${styles["list-item-push-right"]}`}>
            <a href="https://x.com/oldcord"><Chirp className={styles["list-item-socials"]}/></a>
          </li>
          <li className={`${styles["list-item"]} ${styles["list-item-push-right"]}`}>
            <a href="https://discord.gg/VdxA4Dh8rq"><Clyde className={styles["list-item-socials"]} /></a>
          </li>
          <li className={`${styles["list-item"]} ${styles["list-item-push-right"]}`}>
            <a href="https://github.com/oldcordapp"><GitHub className={styles["list-item-socials"]} /></a>
          </li>
          <li className={`${styles["list-item"]} ${styles["open-button"]}`} onClick={onGetStarted}>
            Open Selector
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;