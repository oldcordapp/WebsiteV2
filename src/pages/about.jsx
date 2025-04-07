import styles from "./about.module.css";
import sectionStyles from "./sections.module.css";

import Logo from "../assets/logo.svg?react";

import MetaTags from "../components/metaTags.jsx";
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
            Welcome to Oldcord! We are first and foremost a historical
            preservation project, aiming to preserve and maintain the legacy of
            a popular instant messaging service. While some may call us a
            revival (or "private server", if you prefer that term), our primary
            mission is archival and educational. We currently preserve multiple
            versions from 2015 to 2018, allowing users to experience these
            crucial formative years firsthand.
          </span>
          <span className={sectionStyles.text}>
            Many users today didn't experience the service during its prime, and
            Oldcord provides a way for them to relive that experience — no time
            machine needed. We believe it's crucial to remember that the service
            wasn't always what it is today. Screenshots and articles can't
            capture the genuine feeling of using the platform during these
            years, which is why we've created a living, interactive archive.
          </span>
          <span className={sectionStyles.text}>
            In general, these are our key principles:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              We go beyond static archives by reimplementing the service's API
            </li>
            <li className={sectionStyles.text}>
              Users can explore the timeline of the service's development
            </li>
            <li className={sectionStyles.text}>
              We showcase historical features, bugs, and their eventual
              solutions
            </li>
            <li className={sectionStyles.text}>
              Our instance is fully public, with no invite codes needed
            </li>
            <li className={sectionStyles.text}>
              All assets are downloaded through our archival CDN
            </li>
          </ul>
          <span className={sectionStyles.text}>
            Generally speaking, Oldcord is a not-for-profit project. We are
            committed to preserving the history of the service without any
            commercial motives.
          </span>
          <span
            className={`${sectionStyles.text} ${sectionStyles.bold}`}
            style={{ fontStyle: "italic" }}
          >
            Note: We are not associated with the theme named Oldcord.
          </span>
          <span className={sectionStyles.title}>
            What is unique about Oldcord?
          </span>
          <span className={sectionStyles.text}>
            Oldcord has developed many features over its existence, but always
            with historical accuracy as our north star. Unlike other revivals
            that focus on a single point in time, we maintain multiple builds
            that showcase the service's evolution from 2015 through 2018. Each
            version is carefully reimplemented to match the authentic experience
            of that specific time period.
          </span>
          <span className={sectionStyles.text}>
            We also have our own bootloader that downloads and patches client
            files in-browser, applying necessary quality-of-life updates while
            maintaining historical authenticity. Additionally, we maintain a
            community server (both on Oldcord and on said instant messaging
            service) where users can discuss digital preservation and share
            their experiences with these historical versions.
          </span>
          <span className={sectionStyles.title}>
            Why is this still a thing?
          </span>
          <span className={sectionStyles.text}>
            As a historical preservation project, we serve a unique purpose in
            the revival scene. Oldcord stands out as one of the only two public
            revivals alongside Hummus, but our focus on maintaining historical
            accuracy and our unique features sets us apart. While other revivals
            may prioritize other things, we maintain a careful balance between
            usability and historical authenticity.
          </span>
          <span className={sectionStyles.text}>
            Of course, operating as a preservation project comes with its
            challenges and criticisms. We advise users and non-users alike to
            take criticism of Oldcord with a grain of salt. We admit that there
            is valid criticism, but much feedback stems from those who may not
            fully understand our mission of historical preservation.
          </span>
          <span className={sectionStyles.text}>
            We believe that Oldcord provides an essential service in preserving
            this period of said instant messaging service's history, offering
            stability that doesn't follow the "cycle of projects" that leaves
            revivals dead after a month.
          </span>
          <span className={sectionStyles.title}>Who works on Oldcord?</span>
          <span className={sectionStyles.text} style={{ marginBottom: "0" }}>
            We have a dedicated team of developers working in different areas:
          </span>
          <ul>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>API Reimplementation: </span>
              Ensuring historical accuracy in functionality and features
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Patcher Development: </span>
              Creating minimal quality-of-life fixes while maintaining period
              authenticity
            </li>
            <li className={sectionStyles.text}>
              <span className={sectionStyles.bold}>Website and Archives: </span>
              Managing our digital preservation infrastructure
            </li>
          </ul>
          <span className={sectionStyles.text}>
            We also have our partners helping to preserve the service's history.
            (Some are also working on Oldcord!)
          </span>
          <span className={sectionStyles.text}>
            Oldcord is open source, allowing anyone to contribute to our
            preservation efforts while our core team focuses on maintaining
            historical accuracy.
          </span>
          <span className={sectionStyles.title}>How do I get started?</span>
          <span className={sectionStyles.text}>
            Getting started with Oldcord is simple! We have a public instance
            that allows anyone can join and explore our preserved versions
            without needing an invitation. Just create an account, and you'll be
            able to experience these historical versions of the service
            firsthand.
          </span>
          <span className={sectionStyles.text}>
            You can also host your own instance of Oldcord by following the
            README file in our GitHub repository!
          </span>
          <span className={`${sectionStyles.text} ${sectionStyles.bold}`} style={{ fontStyle: "italic" }}>
            Note: Other instances may require an invite.
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
            <a
              href="https://staging.oldcordapp.com/selector"
              className={`button button-hurple ${styles.button} ${styles["upsell-button"]}`}
              onClick={(e) => {
                e.preventDefault();
                onGetStarted("https://staging.oldcordapp.com/selector");
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
