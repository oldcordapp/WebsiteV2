import { Link } from "react-router-dom";

import styles from "./404.module.css";

import { ReactComponent as Hurple } from "../assets/hurple.svg";

import MetaTags from "../components/metaTags.js";

const FourOhFour = () => {
  return (
    <div>
      <MetaTags title="Oldcord — Not Found" description="" />
      <div className={styles.section}>
        <div className={styles["section-content"]}>
          <span className={styles.title}>
            Oops! You've Vacuumed Up the Wrong Page
          </span>
          <span className={styles.subtitle}>Hey there, lost wanderer!</span>
          <span className={styles.text}>
            Looks like you've stumbled into a corner of Oldcord where the dust
            bunnies live. Don't worry; it happens to the best of us. You know
            what helps when you're feeling disoriented? A little bit of tidying
            up! How about you take a breather while we sweep this mess under the
            rug?
          </span>
          <span className={styles.subtitle}>Need Something to Explore?</span>
          <span className={styles.text}>
            While we're busy vacuuming up the confusion, here are a few pages
            that might help you find your way:
          </span>
          <ul>
            <li className={styles.text}>
              <Link to="/" className={styles.bold}>
                Home{" "}
              </Link>
              — Return to the cozy corners of our website.
            </li>
            <li className={styles.text}>
              <a href="https://staging.oldcordapp.com" className={styles.bold}>
                Go back to Oldcord{" "}
              </a>
              — Why not go back and check your messages, eh? They might be
              waiting for you!
            </li>
            <li className={styles.text}>
              <Link to="about" className={styles.bold}>
                About us{" "}
              </Link>
              — Wait, you don't know who we are? That's a shame, but we won't
              shame you!
            </li>
          </ul>
          <span className={styles.subtitle}>Did You Know?</span>
          <span className={styles.text}>
            Our beloved mascot, Hurple, is a vacuuming wizard! He's not just
            sucking up dust; he's also here to suck out your boredom. So, if you
            see him zooming by, don't forget to wave!
          </span>
          <span className={styles.subtitle}>In the Meantime...</span>
          <span className={styles.text}>
            Why not grab a broom and help us sweep away this 404? Or just sit
            tight; we'll get you back on track in a jiffy!
          </span>
          <span className={styles.text}>
            Remember, in the world of instant messaging, it's easy to get
            lost—but we're always here to help you clean up the mess!
          </span>
        </div>
        <Hurple className={styles.logo} />
      </div>
    </div>
  );
};

export default FourOhFour;
