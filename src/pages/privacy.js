import styles from "./legal.module.css";
import sectionStyles from "./sections.module.css";

import MetaTags from "../components/metaTags.js";

const Privacy = () => {
  return (
    <div>
      <MetaTags title="Oldcord — Privacy Policy" />
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>Privacy Policy</div>
          <div className={`${styles["tagline-subtitle"]} text-light-gray`}>
            Last Updated: September 13th, 2024 | Effective: (Not Decided Yet)
          </div>
        </div>
      </div>
      <div className={sectionStyles.section}>
        <div className={sectionStyles["section-content"]}>
          <span className={sectionStyles.title}>Introduction</span>
          <span className={sectionStyles.text}>
            Welcome! This Privacy Policy explains how we collect, use, store,
            protect, and share your personal information through our services.
            Your privacy is important to us, and we are committed to
            safeguarding it.
          </span>
          <span className={sectionStyles.text}>
            This policy applies only to our Instance, and we do not collect
            information from third-party instances.
          </span>
          <span className={sectionStyles.title}>Information We Collect</span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            We collect basic user information necessary for account creation and
            management:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Email Address: </span>Used
              for account verification and communication.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Username: </span>Your chosen
              identifier on our Instance.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Password: </span>Stored in a
              hashed and salted format for security.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>User ID: </span>A randomly
              generated identifier unique to your account.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>IP Address: </span>Recorded
              upon account registration and each time you log in.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>
                Operating System Information:{" "}
              </span>
              Collected to assist in identifying users not based on User ID.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Browser Information: </span>
              Collected to assist in identifying users not based on User ID.
            </li>
          </ul>
          <span className={sectionStyles.title}>
            Information We Do Not Collect
          </span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            We do not collect or store:
          </span>
          <ul>
            <li className={sectionStyles.text}>Phone numbers</li>
            <li className={sectionStyles.text}>Any sensitive personal data</li>
            <li className={sectionStyles.text}>
              Data from users under the age of 13 or below the legal age of use
              (16 in the EU)
            </li>
          </ul>
          <span className={sectionStyles.title}>
            How We Use Your Information
          </span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            We use your information solely for the following purposes:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              To create and manage your account
            </li>
            <li className={sectionStyles.text}>
              To communicate important updates regarding your account
            </li>
            <li className={sectionStyles.text}>
              To ensure the security and integrity of our services
            </li>
            <li className={sectionStyles.text}>
              To monitor and prevent abuse and spam on our platform
            </li>
          </ul>
          <span className={sectionStyles.text}>
            The collection of your IP address and browser fingerprint data
            (Operating System Information and Browser Information) is only for
            the purposes outlined above, plus moderation (to address abuse of
            our Terms and Conditions or Instance Guidelines) and law enforcement
            purposes (such as posting illegal content or in response to law
            enforcement warrants). We do not sell your data.
          </span>
          <span className={sectionStyles.title}>
            Use of Third Party Services
          </span>
          <span className={sectionStyles.text}>
            We implement Google reCAPTCHA to enhance security and prevent
            automated abuse. You can review Google's reCAPTCHA Privacy Policy{" "}
            <a href="https://policies.google.com/privacy">here</a>.
          </span>
          <span className={sectionStyles.text}>
            We also use Cloudflare for additional security measures. You can
            review Cloudflare's Privacy Policy{" "}
            <a href="https://www.cloudflare.com/privacypolicy">here</a>.
          </span>
          <span className={sectionStyles.title}>
            Data Retention and Deletion
          </span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            We retain your personal information only as long as necessary for
            the purposes outlined above. You can request the removal of your
            data by contacting us at:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Email: </span>
              contact@noia.site
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Direct Message: </span>You
              can also reach us via direct messaging on our Instance or Discord.
            </li>
          </ul>
          <span className={sectionStyles.text}>
            Once we implement account deletion features, you will be able to
            delete your account directly.
          </span>
          <span className={sectionStyles.title}>Your Rights</span>
          <span className={sectionStyles.text}>
            You have the right to request the deletion of your personal data at
            any time. We will act promptly on such requests.
          </span>
          <span className={sectionStyles.title}>
            Changes to This Privacy Policy
          </span>
          <span className={sectionStyles.text}>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page with an updated effective date.
          </span>
          <span className={sectionStyles.title}>Contact Us</span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            If you have any questions or concerns about this Privacy Policy,
            please reach out to us at:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Email: </span>
              contact@noia.site
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Direct Message: </span>You
              can also reach us via direct messaging on our Instance or Discord.
            </li>
          </ul>
          <span className={sectionStyles.text}>
            Thank you for using our services! Your trust is important to us, and
            we are committed to protecting your privacy.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
