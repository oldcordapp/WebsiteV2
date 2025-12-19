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
            Welcome to Oldcord! We are primarily a historical
            preservation/revival project (or "private server", if you prefer
            that term) centered around a popular instant messaging service. We
            currently offer versions from 2015 to 2018.
          </span>
          <span className={sectionStyles.text}>
            You might be wondering, "why do we do this when XYZ theme does it
            all?" Well, why not? In a time of coperate greed, moderation
            neglect, and betraying what has been promised before, we wanted
            restore something that helps people communicate with their friends,
            meet new people, and to relieve earliest years of the service. We
            would also like to share the experience to people who did not
            experience it, no time machine needed. Screenshots and videos do not
            capture the feeling of a first hand experience, which is why we have
            created an interactive archive.
          </span>
          <span className={sectionStyles.text}>
            Oldcord is a not-for-profit project. There will be no commercial
            incentives involved as we take our time, effort and resources to
            create and host Oldcord.
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
            Since 2022, Oldcord has developed many features to enhance the
            experience of using an older version of the instant messaging
            service. Unlike other revivals of the same service which only
            provided a single version, we provide multiple versions that can be
            chosen by the user. Those versions are connected to a single backend
            providing responses specific to the builds, allowing users using
            different versions to interact with each other.
          </span>
          <span className={sectionStyles.text}>
            One of the other impressive features we have done is our bootloader.
            Unlike other revival services that may be in more legal trouble than
            us by distributing modified code, we circumvented the issue entirely
            by downloading the unmodified client files in browser, similar to
            how a modular patcher for apps work by requiring the user to
            download the files itself before patching.
          </span>
          <span className={sectionStyles.text}>
            Oldplunger is a client mod that patches the code to fix and extend
            the builds, all in browser in conjunction to the bootloader.
          </span>
          <span className={sectionStyles.title}>
            Why is this still a thing?
          </span>
          <span className={sectionStyles.text}>
            For fun, archival and educational purposes!
          </span>
          <span className={sectionStyles.text}>
            Hummus and Spacebar are the other instance messaging service
            revivals/private servers we know off. Hummus focuses on 2017, while
            Spacebar focuses on more modern versions of it. Oldcord sits right
            in the middle between the two. We aim to provide a decent experience
            out of the three. However, Spacebar had a toxic community issue
            before (in which we are glad are solved), and we are not different.
          </span>
          <span className={sectionStyles.text}>
            The hosted instance of Oldcord has been closed once due to the
            influx of people who did not respect us and the community. At that
            time, we did not know how to manage an instance (including the fact
            that instance moderation tools were not available at that time), so
            we took it down and implement the missing management tools we need,
            and to take a break from maintaining an ever growing community that
            seemed out of control. Oldcord also has created so-called enemies
            from people of other communities.
          </span>
          <span className={sectionStyles.text}>
            Of course, operating an instance comes with its challenges and
            criticisms. We advise users and non-users alike to take criticism of
            Oldcord with a grain of salt. We admit that there is valid criticism
            of Oldcord, but much hate comes from people who are being haters of
            the project from those communities.
          </span>
          <span className={sectionStyles.text}>
            Nonetheless, besides Hummus, we do not believe there is a true
            competitor to Oldcord. Being up for three years and hitting
            milestones, it does not follow the "cycle of projects" that leaves
            projects dead after a while.
          </span>
          <span className={sectionStyles.title}>Who works on Oldcord?</span>
          <span className={sectionStyles.text}>
            We have a dedicated team of developers working in different areas,
            but in general, our GitHub repository shows how many people have
            contributed to this project. We also have our partners helping to
            preserve the service's history. (Some are also working on Oldcord!)
          </span>
          <span className={sectionStyles.text}>
            Oldcord is open source, allowing anyone to contribute to our efforts
            while the team focuses on bringing features that help make your
            experience even better.
          </span>
          <span className={sectionStyles.title}>How do I get started?</span>
          <span className={sectionStyles.text}>
            Getting started with Oldcord is simple! We have a public instance
            that allows anyone can join and explore without needing an
            invitation. Just create an account, and you'll be able to use the
            builds that we have preserved, and talk to people!
          </span>
          <span className={sectionStyles.text}>
            You can also host your own instance of Oldcord by following the
            README file in our GitHub repository!
          </span>
          <span
            className={`${sectionStyles.text} ${sectionStyles.bold}`}
            style={{ fontStyle: "italic" }}
          >
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
