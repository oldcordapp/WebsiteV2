import styles from "./legal.module.css";
import sectionStyles from "./sections.module.css";

import MetaTags from "../components/metaTags.js";

const Cookies = () => {
  return (
    <div>
      <MetaTags title="Oldcord — Cookie Policy" />
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>Cookie Policy</div>
          <div className={`${styles["tagline-subtitle"]} text-light-gray`}>
            Last Updated: September 13th, 2024 | Effective: (Not Decided Yet)
          </div>
        </div>
      </div>
      <div className={sectionStyles.section}>
        <div className={sectionStyles["section-content"]}>
          <span className={sectionStyles.title}>Introduction</span>
          <span className={sectionStyles.text}>
            At Oldcord, we prioritize your privacy and the security of your
            information. This Cookie Policy explains how we use cookies and
            similar technologies on our Instance.
          </span>
          <span className={sectionStyles.title}>What are Cookies?</span>
          <span className={sectionStyles.text}>
            Cookies are small text files placed on your computer or device that
            help us provide and improve our Instance.
          </span>
          <span className={sectionStyles.title}>Types of Cookies We Use</span>
          <span className={sectionStyles.subtitle}>
            Strictly Necessary Cookies
          </span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            We use strictly necessary cookies to ensure our Instance functions
            properly. Additionally, these cookies serve the following purposes:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>User Dialog Box: </span>To
              determine if a user has seen the dialog box that checks if they
              have read our Terms and Conditions, Privacy Policy, Cookie Policy,
              Instance Guidelines, and the "Oldcord is in development" notice.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Build Selection: </span>To
              remember which build a user has been selected for.
            </li>
          </ul>
          <span className={sectionStyles.text}>
            We do not use functional cookies or any other types of cookies.
          </span>
          <span className={sectionStyles.title}>Managing Cookies</span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            You can manage how cookies are used on our Instance through your
            browser settings. Instructions for managing cookies can be found in
            the help sections of popular browsers such as:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              <a href="https://support.google.com/chrome/answer/95647">
                Chrome
              </a>
            </li>
            <li className={sectionStyles.text}>
              <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">
                Firefox
              </a>
            </li>
            <li className={sectionStyles.text}>
              Safari (<a href="https://support.apple.com/en-us/HT201265">iOS</a>{" "}
              &{" "}
              <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">
                Mac
              </a>
              )
            </li>
            <li className={sectionStyles.text}>
              <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
                Internet Explorer
              </a>
            </li>
            <li className={sectionStyles.text}>
              <a href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera">
                Opera
              </a>
            </li>
          </ul>
          <span className={sectionStyles.text}>
            If you disable or remove cookies, some parts of our Instance may not
            work properly.
          </span>
          <span className={sectionStyles.title}>Questions or Concerns</span>
          <span className={sectionStyles.text}>
            If you have any questions or concerns regarding our Cookie Policy,
            please feel free to contact us at
            <span className={sectionStyles.bold}> contact@noia.site</span>.
          </span>
          <span className={sectionStyles.text}>
            Thank you for using Oldcord!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
