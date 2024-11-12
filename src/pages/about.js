import styles from "./about.module.css";
import sectionStyles from "./sections.module.css";

import { ReactComponent as Logo } from "../assets/logo.svg";

import MetaTags from "../components/metaTags.js";
import { useOutletContext } from "react-router-dom";

const About = () => {
  const [onGetStarted] = useOutletContext();
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
            project out there (or "revival"/"private server", if you prefer
            those terms) for old versions of a popular instant messaging
            service. We currently offer versions from 2015 to 2018. Users are
            free to use any features available in these versions that conform to
            our rules.
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
          </span>
          <span className={sectionStyles.text}>
            We also have a bootstrapper, which acts as both a downloader and a
            patcher. All assets are downloaded in-browser/client by our
            bootstrapper from our archival CDN, rather than being served
            directly on our server. This bootstrapper also provides
            quality-of-life updates while preserving the historical value of the
            instant messaging service.
          </span>
          <span className={sectionStyles.text}>
            Finally, we have a fully public instance where anyone can join and
            participate without needing invite codes. We also maintain a
            community server on the service, where users can discuss our work,
            share feedback, and engage with one another in a supportive
            environment.
          </span>
          <span className={sectionStyles.title}>
            Why is this still a thing?
          </span>
          <span className={sectionStyles.text}>
            As stated above, we aim to be the best historical preservation
            project and revival. Other revivals may have (subjectively) better
            features at the cost of having less historical accuracy, leading to
            a less authentic experience, or have staff members that do not
            understand how to maintain a project focused on historical
            preservation.
          </span>
          <span className={sectionStyles.text}>
            Of course, having been up for some time, Oldcord has faced various
            criticisms. We advise users and non-users alike to take criticism of
            Oldcord with a grain of salt. We admit that there is valid criticism
            of Oldcord, but much feedback comes from users who may not fully
            understand our vision or have had individual negative experiences.
          </span>
          <span className={sectionStyles.text}>
            We believe that Oldcord offers a unique and stable alternative for
            those looking to relive the earlier days of the instant messaging
            service.
          </span>
          <span className={sectionStyles.title}>Who works on Oldcord?</span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            We have a team of three developers that work on different areas:
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
            Getting started with Oldcord is simple! As our instance is public,
            anyone can join and explore our features without needing an
            invitation. Just create an account, and you'll be ready to connect
            with others in the Oldcord community.
          </span>
          <span className={sectionStyles.text}>
            You can also host your own instance of Oldcord by following the
            README file in our GitHub repository!
          </span>
          <span className={sectionStyles.text} style={{ fontStyle: "italic" }}>
            Note: While our instance is fully public, other instances may
            require an invite.
          </span>
          <hr />
          <div
            className={styles["upsell-section"]}
            style={{ marginTop: "10px" }}
          >
            <div className={styles["upsell-title"]}>
              That's it. We are <Logo />.
            </div>
            <span className={styles["upsell-text"]}>
              Convinced? Use Oldcord now and experience the nostalgia!
            </span>
            <span
              className={`button button-hurple ${styles.button} ${styles["upsell-button"]}`}
              onClick={() => onGetStarted("https://staging.oldcordapp.com/selector")}
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
