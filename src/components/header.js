import { Link } from "react-router-dom";

import styles from "./header.module.css";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Clyde } from "../assets/clyde.svg";
import { ReactComponent as Chirp } from "../assets/chirp.svg";
import { ReactComponent as GitHub } from "../assets/github.svg";

const NAV_ITEMS = [
  { to: "download", label: "Download" },
  { href: "https://staging.oldcordapp.com/developers", label: "Bot Portal" },
];

const SOCIAL_LINKS = [
  { href: "https://x.com/oldcord", Icon: Chirp },
  // { href: "https://discord.gg/VdxA4Dh8rq", Icon: Clyde },
  { href: "https://github.com/oldcordapp", Icon: GitHub },
];

const Header = ({ onGetStarted, textColorClass }) => (
  <div className={styles.section}>
    <div className={styles.inner}>
      <Link
        to="/"
        className={`${styles["logo-link"]} ${styles[textColorClass]}`}
      >
        <Logo className={styles.logo} />
      </Link>

      <ul
        className={`${styles.navigation} ${textColorClass} ${styles[textColorClass]}`}
      >
        {NAV_ITEMS.map(({ to, href, label }) => (
          <li
            key={label}
            className={`${styles["list-item"]} ${styles["list-item-push-left"]}`}
          >
            {to ? <Link to={to}>{label}</Link> : <a href={href}>{label}</a>}
          </li>
        ))}
      </ul>

      <ul
        className={`${styles["navigation-right"]} ${textColorClass} ${styles[textColorClass]}`}
      >
        {SOCIAL_LINKS.map(({ href, Icon }) => (
          <li
            key={href}
            className={`${styles["list-item"]} ${styles["list-item-push-right"]}`}
          >
            <a href={href}>
              <Icon className={styles["list-item-socials"]} />
            </a>
          </li>
        ))}

        <a
          href="https://staging.oldcordapp.com/selector"
          onClick={(e) => {
            e.preventDefault();
            onGetStarted("https://staging.oldcordapp.com/selector");
          }}
        >
          <li className={`${styles["list-item"]} ${styles["open-button"]}`}>
            Open Selector
          </li>
        </a>
      </ul>
    </div>
  </div>
);

export default Header;
