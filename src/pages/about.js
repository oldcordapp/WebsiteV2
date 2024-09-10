import styles from "./about.module.css";
import sectionStyles from "./sections.module.css";

import { ReactComponent as Logo } from "../assets/logo.svg";

import MetaTags from "../components/metaTags.js";

const About = ({ onGetStarted }) => {
  return (
    <div>
      <MetaTags
        title="Oldcord - About"
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
            Welcome to Oldcord! We aim to be the premier historical preservation
            project for older versions of a popular instant messaging service,
            specifically focusing on versions from 2015 to 2018. Some people
            might also call Oldcord a revival (or "private server", if you
            prefer that term). Our platform allows users to experience the
            nostalgia of earlier iterations while maintaining a friendly and
            engaging community.
          </span>
          <span className={sectionStyles.text}>
            Many people today didn't experience the instant messaging service
            during its prime, and Oldcord offers a way for them to see what it
            was like — without needing a time machine. It's essential to remember
            that the service wasn't always the platform it is today.
          </span>
          <span className={sectionStyles.text}>
            Oldcord allows users to explore the timeline of the service's
            development, showcasing the features that were added, the bugs that
            existed, and how they were eventually fixed. More importantly, it
            captures what it felt like to be a user during the years 2015, 2016,
            2017, and 2018. This experience is something that cannot be conveyed
            through screenshots or articles alone.
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
            Oldcord boasts a range of features developed by our dedicated team
            over its existence. We focus on reimplementing the service's API
            that attempts to match the experience of the time period of your
            selected build. Unlike other revivals which only provided one build
            selection, we put multiple builds for users to choose from. Our
            platform is fully public, allowing anyone to join and participate
            without the need for invite codes.
          </span>
          <span className={sectionStyles.text}>
            Additionally, we don't serve said instant messaging service's
            assets on our server code; all of the assets are downloaded
            in-browser/client by our bootstrapper, which is also our patcher
            that provides QoL patches to improve the user experience without
            trying to ruin the historical value of the instant messaging
            service.
          </span>
          <span className={sectionStyles.text}>
            We also have a community server on said instant messaging service
            where users can discuss our work, share feedback, and engage with
            one another in a supportive environment.
          </span>
          <span className={sectionStyles.title}>
            Why is this still a thing?
          </span>
          <span className={sectionStyles.text}>
            Oldcord stands out in the revival scene, especially as one of the
            only two public revivals alongside Hummus. Unlike some other
            revivals that may suffer from instability or poor community
            management, Oldcord has maintained steady growth and a dedicated
            user base.
          </span>
          <span className={sectionStyles.text}>
            While we acknowledge that there may be valid criticisms, much of the
            feedback stems from users who may not fully understand our vision or
            have had individual negative experiences. We believe Oldcord offers
            a unique and stable alternative for those looking to relive the
            earlier days of said instant messaging service.
          </span>
          <span className={sectionStyles.title}>Who works on Oldcord?</span>
          <span className={sectionStyles.text}>
            Our team consists of three developers who specialize in different
            areas:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>API Reimplementation: </span>
              Ensuring that our platform closely mirrors the functionality of
              older versions.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>
                Patcher for Quality of Life Features and Fixes:{" "}
              </span>
              Continuously improving the user experience with practical updates.
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Website and Branding: </span>
              Crafting our online presence and community engagement.
            </li>
          </ul>
          <span className={sectionStyles.text}>
            Oldcord is open source, allowing anyone to contribute and
            collaborate on our project while our core team focuses on
            development.
          </span>
          <span className={sectionStyles.title}>How do I get started?</span>
          <span className={sectionStyles.text}>
            Getting started with Oldcord is simple! Since we are a public
            platform, anyone can join and explore our features without needing
            an invitation. Just create an account, and you’ll be ready to
            connect with others in the Oldcord community.
          </span>
          <span className={sectionStyles.text}>
            You can also host your own instance of Oldcord by following the
            README file on our GitHub repository!
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
