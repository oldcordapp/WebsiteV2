import styles from "./legal.module.css";
import sectionStyles from "./sections.module.css";
import MetaTags from "../components/metaTags.jsx";

const Privacy = () => {
  return (
    <div>
      <MetaTags title="Oldcord — Privacy Policy" />
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>Privacy Policy</div>
          <div className={`${styles["tagline-subtitle"]} text-light-gray`}>
            Last Updated: December 16th, 2025 | Effective: December 16th, 2025
          </div>
        </div>
      </div>
      <div className={sectionStyles.section}>
        <div className={sectionStyles["section-content"]}>
          <span className={sectionStyles.title}>Introduction</span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            Welcome! This Privacy Policy explains how we collect, use, store,
            protect, and share your personal information through our services.
            If you're using our Instance, we want you to understand how we
            handle your data. Here's what you should know to get started:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              We care deeply about privacy and are committed to protecting yours
            </li>
            <li className={sectionStyles.text}>
              We don't sell your personal information to third parties
            </li>
            <li className={sectionStyles.text}>
              We only collect information that's necessary to provide and
              maintain our services
            </li>
            <li className={sectionStyles.text}>
              We take security seriously and implement strong measures to
              protect your data
            </li>
            <li className={sectionStyles.text}>
              We give you control over your privacy settings and data
            </li>
          </ul>
          <span className={sectionStyles.title}>
            The information we collect
          </span>
          <span className={sectionStyles.text}>
            We collect certain information when you use our Instance. This
            includes information you provide to us and information we collect
            automatically.
          </span>
          <span className={sectionStyles.subtitle}>
            Information you provide to us
          </span>
          <ul>
            <li className={`${sectionStyles.text} ${sectionStyles.bold}`}>
              Account information
            </li>
            <ul>
              <li className={sectionStyles.text}>
                Email address (for account verification and communication)
              </li>
              <li className={sectionStyles.text}>
                Username (your chosen identifier)
              </li>
              <li className={sectionStyles.text}>
                Password (stored securely using hashing and salting)
              </li>
              <li className={sectionStyles.text}>
                User ID (randomly generated)
              </li>
              <li className={sectionStyles.text}>
                IP address (recorded at registration and login)
              </li>
            </ul>
          </ul>
          <span className={sectionStyles.subtitle}>
            Information we do NOT collect
          </span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            We are committed to minimizing data collection. We do not collect:
          </span>
          <ul>
            <li className={sectionStyles.text}>Operating system information</li>
            <li className={sectionStyles.text}>Browser information</li>
            <li className={sectionStyles.text}>Phone numbers</li>
            <li className={sectionStyles.text}>Any sensitive personal data</li>
            <li className={sectionStyles.text}>
              Data from users under 13 years old or below the legal age of use
              (16 in the EU)
            </li>
          </ul>
          <span className={sectionStyles.subtitle}>
            Information we collect automatically
          </span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            When you use our services, we automatically collect:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              Device information (IP address)
            </li>
            <li className={sectionStyles.text}>
              Device fingerprint (generated via our own internal solution for
              security and abuse prevention)
            </li>
          </ul>
          <span className={sectionStyles.title}>
            How we use your information
          </span>
          <span className={sectionStyles.subtitle}>
            To fulfill our contract with you
          </span>
          <ul>
            <li className={sectionStyles.text}>
              To create and manage your account
            </li>
            <li className={sectionStyles.text}>
              To provide and maintain our services
            </li>
            <li className={sectionStyles.text}>
              To communicate important updates about your account
            </li>
            <li className={sectionStyles.text}>To provide customer support</li>
            <li className={sectionStyles.text}>
              To handle user reports (when submitted, we will only review the
              specific messages or server content included in the report)
            </li>
          </ul>
          <span className={sectionStyles.subtitle}>
            To protect our community
          </span>
          <ul>
            <li className={sectionStyles.text}>
              To protect our services from abuse and spam
            </li>
            <li className={sectionStyles.text}>To ensure platform security</li>
            <li className={sectionStyles.text}>
              To monitor and prevent violations of our Terms and Conditions
            </li>
          </ul>

          <span className={sectionStyles.subtitle}>
            To comply with legal obligations
          </span>
          <ul>
            <li className={sectionStyles.text}>
              To respond to legal requests when required by law
            </li>
            <li className={sectionStyles.text}>
              To maintain records as required by law
            </li>
            <li className={sectionStyles.text}>
              To verify users in accordance with regulatory obligations
            </li>
          </ul>
          <span className={sectionStyles.title}>
            How we protect your information
          </span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            Security is a top priority. We implement multiple layers of
            protection:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              Passwords are hashed and salted
            </li>
            <li className={sectionStyles.text}>
              We use secure protocols for all data transmission
            </li>
            <li className={sectionStyles.text}>
              Access to user data is strictly limited and monitored
            </li>
            <li className={sectionStyles.text}>
              During user reports, we only review the specific content included
              in the report
            </li>
            <li className={sectionStyles.text}>
              Regular security audits and updates are performed
            </li>
          </ul>
          <span className={sectionStyles.title}>Third-party services</span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            We use a limited number of third-party services to help provide our
            platform:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              Google reCAPTCHA (for security and abuse prevention)
            </li>
            <li className={sectionStyles.text}>
              Cloudflare (for additional security measures)
            </li>
          </ul>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            You can review their respective privacy policies:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google reCAPTCHA Privacy Policy
              </a>
            </li>
            <li className={sectionStyles.text}>
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare Privacy Policy
              </a>
            </li>
          </ul>
          <span className={sectionStyles.title}>Your rights and controls</span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            You have several rights regarding your personal information:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              Request access to your personal data
            </li>
            <li className={sectionStyles.text}>
              Request correction of inaccurate data
            </li>
            <li className={sectionStyles.text}>
              Request deletion of your data
            </li>
            <li className={sectionStyles.text}>
              Control your privacy settings
            </li>
            <li className={sectionStyles.text}>
              Opt-out of non-essential data collection
            </li>
          </ul>
          <span className={sectionStyles.subtitle}>
            How to exercise your rights
          </span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            You can request data deletion or exercise your privacy rights by:
          </span>
          <ul>
            <li className={sectionStyles.text}>Email: contact@noia.site</li>
            <li className={sectionStyles.text}>
              Direct Message: Through our Instance or Discord
            </li>
          </ul>
          <span className={sectionStyles.title}>Data retention</span>
          <span className={sectionStyles.text}>
            We retain your personal information only as long as necessary to
            provide our services and fulfill the purposes outlined in this
            policy. When you delete your account, we will completely delete your
            information unless we are legally required to retain it.
          </span>
          <span className={sectionStyles.title}>Changes to this policy</span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              Posting the new policy on this page
            </li>
            <li className={sectionStyles.text}>
              Updating the "last modified" date
            </li>
            <li className={sectionStyles.text}>
              Providing in-service notifications for material changes
            </li>
          </ul>
          <span className={sectionStyles.title}>Contact us</span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            If you have questions about this Privacy Policy or our privacy
            practices, please contact us:
          </span>
          <ul>
            <li className={sectionStyles.text}>Email: contact@noia.site</li>
            <li className={sectionStyles.text}>
              Direct Message: Through our Instance or Discord
            </li>
          </ul>
          <span className={sectionStyles.text}>
            Thank you for trusting us with your information. We're committed to
            protecting your privacy and providing a secure platform for all our
            users.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
