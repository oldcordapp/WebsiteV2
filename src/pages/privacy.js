import styles from "./legal.module.css";

import MetaTags from "../components/metaTags.js";

const Privacy = () => {
  return (
    <div>
      <MetaTags title="Oldcord - Privacy Policy" />
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>Privacy Policy</div>
          <div className={`${styles["tagline-subtitle"]} text-light-gray`}>
            Last Updated: September 9th, 2024 | Effective: (Not yet decided)
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles["section-content"]}>
          <span className={styles.title}>Introduction</span>
          <span className={styles.text}>
            Welcome to our Privacy Policy! This document outlines how we
            collect, use, and protect your personal information while using our
            services. Your privacy is important to us, and we are committed to
            safeguarding it.
          </span>
          <span className={styles.text}>
            This only applies to our instance. We do not collect information
            from third-party instances.
          </span>
          <span className={styles.title}>Information We Collect</span>
          <span className={styles.text}>
            We only collect basic user information necessary for account
            creation and management:
          </span>
          <ul>
            <li className={styles.text}>
              <span className={styles.bold}>Email Address: </span>Used for
              account verification and communication.
            </li>
            <li className={styles.text}>
              <span className={styles.bold}>Username: </span>Your chosen
              identifier on our instance.
            </li>
            <li className={styles.text}>
              <span className={styles.bold}>Password: </span>Stored in a hashed
              and salted format for security.
            </li>
            <li className={styles.text}>
              <span className={styles.bold}>User ID: </span>A randomly generated
              identifier unique to your account.
            </li>
            <li className={styles.text}>
              <span className={styles.bold}>IP Address: </span>Recorded upon
              account registration and each time you log in. This information is
              used solely for moderation purposes to combat abuse and spam.
            </li>
          </ul>
          <span className={styles.subtitle}>Cookies</span>
          <span className={styles.text}>
            We use essential cookies to improve your experience. These cookies
            help us remember if you have skipped the dialog box or made a build
            selection. We do not use cookies for advertising purposes.
          </span>
          <span className={styles.subtitle}>Captcha</span>
          <span className={styles.text}>
            We implement a captcha during the registration process to enhance
            security and prevent automated abuse.
          </span>
          <span className={styles.title}>Information We Do Not Collect</span>
          <span className={styles.text}>We do not collect or store:</span>
          <ul>
            <li className={styles.text}>Phone numbers</li>
            <li className={styles.text}>Any sensitive personal data</li>
            <li className={styles.text}>
              Data from users under the age of 13 or below the legal age of use
              (16 in the EU)
            </li>
          </ul>
          <span className={styles.title}>How We Use Your Information</span>
          <span className={styles.text}>
            We use your information solely for the following purposes:
          </span>
          <ul>
            <li className={styles.text}>To create and manage your account</li>
            <li className={styles.text}>
              To communicate important updates regarding your account
            </li>
            <li className={styles.text}>
              To ensure the security and integrity of our services
            </li>
            <li className={styles.text}>
              To monitor and prevent abuse and spam on our platform
            </li>
          </ul>
          <span className={styles.title}>Data Retention and Deletion</span>
          <span className={styles.text}>
            We retain your personal information only as long as necessary for
            the purposes outlined above. You can request the removal of your
            data by contacting us at:
          </span>
          <ul>
            <li className={styles.text}>
              <span className={styles.bold}>Email: </span>contact@noia.site
            </li>
            <li className={styles.text}>
              <span className={styles.bold}>Direct Message: </span>You can also
              reach us via direct messaging on our instance or Discord.
            </li>
          </ul>
          <span className={styles.text}>
            Once we implement account deletion features, you will be able to
            delete your account directly.
          </span>
          <span className={styles.title}>Your Rights</span>
          <span className={styles.text}>
            You have the right to request the deletion of your personal data at
            any time. We will act promptly on such requests.
          </span>
          <span className={styles.title}>Changes to This Privacy Policy</span>
          <span className={styles.text}>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page with an updated effective date.
          </span>
          <span className={styles.title}>Contact Us</span>
          <span className={styles.text}>
            If you have any questions or concerns about this Privacy Policy,
            please reach out to us at:
          </span>
          <ul>
            <li className={styles.text}>
              <span className={styles.bold}>Email: </span>contact@noia.site
            </li>
            <li className={styles.text}>
              <span className={styles.bold}>Direct Message: </span>You can also
              reach us via direct messaging on our instance or Discord.
            </li>
          </ul>
          <span className={styles.text}>
            Thank you for using our services! Your trust is important to us, and
            we are committed to protecting your privacy.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
