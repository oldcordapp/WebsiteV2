import styles from "./about.module.css";
import sectionStyles from "./sections.module.css";

import { ReactComponent as Logo } from "../assets/logo.svg";

import MetaTags from "../components/metaTags.js";

const About = ({ onGetStarted }) => {
  return (
    <div>
      <MetaTags
        title="Oldcord — About"
        description="Find out what we do on Oldcord and how we do it here."
      />
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <Logo className={styles["tagline-logo"]} />
          <div className={styles["tagline-title"]}>About us</div>
        </div>
      </div>
      <div className={sectionStyles.section}>
        <div className={sectionStyles["section-content"]}>
          <span className={sectionStyles.title}>Who Are We?</span>
          <span className={sectionStyles.text}>
            Welcome to Oldcord! We aim to be the best historical preservation
            project for older versions of a popular instant messaging service.
            Our focus is on versions from 2015 to 2018. Some may refer to
            Oldcord as a revival (or "private server", if you prefer that term).
            Our platform allows users to experience the nostalgia of earlier
            iterations while fostering a friendly and engaging community.
          </span>
          <span className={sectionStyles.text}>
            Many users today didn't experience the service during its prime, and
            Oldcord provides a way for them to relive that experience — no time
            machine needed. It's crucial to remember that the service wasn't
            always what it is today.
          </span>
          <span className={sectionStyles.text}>
            Oldcord allows users to explore the timeline of the service's
            development, showcasing added features, existing bugs, and how they
            were ultimately resolved. More importantly, it captures what it felt
            like to be a user during the years 2015, 2016, 2017, and 2018. This
            experience cannot be conveyed through screenshots or articles alone.
          </span>
          <span className={sectionStyles.text}>
            In essence, Oldcord serves as an extension of the Wayback Machine,
            preserving and sharing the unique experience of using the service
            during its formative years.
          </span>
          <span className={sectionStyles.text}>
            <span className={sectionStyles.bold}>
              Oldcord is a non-profit project.
            </span>{" "}
            We are committed to preserving the history of the service without
            any commercial motives.{" "}
            <span className={sectionStyles.bold}>
              We are not associated with the theme named Oldcord.
            </span>{" "}
          </span>
          <span className={sectionStyles.title}>
            What is unique about Oldcord?
          </span>
          <span className={sectionStyles.text}>
            Oldcord has developed many features over its existence, focusing on
            reimplementing the service's API to match the experience of the time
            period for your selected build. Unlike other revivals that provide
            only one build, we offer multiple options for users to choose from.
            Our platform is fully public, allowing anyone to join and
            participate without needing invite codes.
          </span>
          <span className={sectionStyles.text}>
            Additionally, we do not serve the service's assets directly on our
            server; all assets are downloaded in-browser/client by our
            bootstrapper from our archival CDN. Our bootstrapper also acts as a
            patcher to provide quality-of-life updates while preserving the
            historical value of the instant messaging service.
          </span>
          <span className={sectionStyles.text}>
            We also maintain a community server on the service, where users can
            discuss our work, share feedback, and engage with one another in a
            supportive environment.
          </span>
          <span className={sectionStyles.title}>
            Why is this still a thing?
          </span>
          <span className={sectionStyles.text}>
            Oldcord stands out in the revival scene as one of the only two
            public revivals alongside Hummus. Unlike other revivals that may
            suffer from instability or poor community management, Oldcord has
            maintained steady growth and a dedicated user base.
          </span>
          <span className={sectionStyles.text}>
            While we acknowledge valid criticisms, much feedback stems from
            users who may not fully understand our vision or have had individual
            negative experiences. We believe Oldcord offers a unique and stable
            alternative for those looking to relive the earlier days of the
            instant messaging service.
          </span>
          <span className={sectionStyles.title}>Who works on Oldcord?</span>
          <span className={sectionStyles.text}>
            Our team consists of three developers specializing in different
            areas:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>API Reimplementation: </span>
              Ensuring our platform closely mirrors the functionality of older
              versions.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>
                Patcher for Quality of Life Features and Fixes:{" "}
              </span>
              Continuously enhancing the user experience with practical updates.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Website and Branding: </span>
              Crafting our online presence and fostering community engagement.
            </li>
          </ul>
          <span className={sectionStyles.text}>
            Oldcord is open source, allowing anyone to contribute and
            collaborate on our project while our core team focuses on
            development.
          </span>
          <span className={sectionStyles.title}>How do I get started?</span>
          <span className={sectionStyles.text}>
            Getting started with Oldcord is simple! As a public platform, anyone
            can join and explore our features without needing an invitation.
            Just create an account, and you'll be ready to connect with others
            in the Oldcord community.
          </span>
          <span className={sectionStyles.text}>
            You can also host your own instance of Oldcord by following the
            README file in our GitHub repository!
          </span>
          <span className={sectionStyles.text} style={{ fontStyle: "italic" }}>
            Note: Other instances may require an invite.
          </span>
          <hr />
          <div
            className={styles["upsell-section"]}
            style={{ marginTop: "10px" }}
          >
            <span className={styles["upsell-title"]}>
              That's it. We are Oldcord.
            </span>
            <span className={styles["upsell-text"]}>
              Convinced? Use Oldcord now and experience the nostalgia!
            </span>
            <span
              className={`button button-hurple ${styles.button} ${styles["upsell-button"]}`}
              onClick={onGetStarted}
            >
              Get Started
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
