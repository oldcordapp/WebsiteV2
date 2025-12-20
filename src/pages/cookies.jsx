import styles from "./legal.module.css";
import sectionStyles from "./sections.module.css";

import MetaTags from "../components/metaTags.jsx";

const Cookies = () => {
  return (
    <div>
      <MetaTags title="Oldcord — Cookie Policy" />
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>Cookie Policy</div>
          <div className={`${styles["tagline-subtitle"]} text-light-gray`}>
            Last Updated: November 15th, 2024 | Effective: December 6th, 2025
          </div>
        </div>
      </div>
      <div className={sectionStyles.section}>
        <div className={sectionStyles["section-content"]}>
          <span className={sectionStyles.title}>Introduction</span>
          <span className={sectionStyles.text}>
            We may receive information from cookies (small text files placed on
            your computer or device) that help us provide and improve our
            Instance. First-party cookies are placed by us and allow you to use
            the Instance. You can control cookies through your browser settings
            as described in the "Managing Cookies" section below.
          </span>
          <span className={sectionStyles.title}>Types of Cookies We Use</span>
          <span className={sectionStyles.subtitle}>
            Strictly Necessary Cookies
          </span>
          <span className={sectionStyles.text}>
            These cookies are required for our Instance to function properly. If
            you try to use tools to disable these cookies, parts of the Instance
            may not work properly. Our strictly necessary cookies serve the
            following purposes:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Core Functionality: </span>
              To enable essential Instance features and operations, including
              build selection, without storing any user data
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>User Dialog Box: </span>
              To determine if a user has seen the dialog box that checks if they
              have read our Terms and Conditions, Privacy Policy, Cookie Policy,
              Instance Guidelines, and the "Oldcord is in development" notice
            </li>
          </ul>
          <span className={sectionStyles.text}>
            Please note that we do not use functional cookies, performance
            cookies, or any other types of cookies.
          </span>
          <span className={sectionStyles.title}>Managing Cookies</span>
          <span className={sectionStyles.text}>
            To control how information is collected and used from cookies on the
            Instance, you can manage your cookie preferences through your
            browser settings. You will need to manage your settings for each
            browser you use. Instructions for managing cookies can be found in
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
            <span className={sectionStyles.bold}> contactnoia@protonmail.com</span>.
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
