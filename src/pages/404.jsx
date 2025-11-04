import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import funfacts from "../assets/funfacts.json";


import styles from "./404.module.css";

import Hurple from "../assets/hurple.svg?react";
import MetaTags from "../components/metaTags.jsx";

const FourOhFour = () => {
  const [onGetStarted] = useOutletContext();
  const [randomFunFact, setRandomFunFact] = useState({
    number: 1,
    fun_fact: "Some fact here",
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * funfacts.length);
    setRandomFunFact(funfacts[randomIndex]);
  }, []);

  return (
    <div>
      <MetaTags title="Oldcord — Not Found" description="" />
      <div className={styles.section}>
        <div className={styles["section-content"]}>
          <span className={styles.title}>
            <span style={{ fontStyle: "italic" }}>WHOOPS</span> – You have
            vacuumed the wrong page!
          </span>
          <span className={styles.text}>
            Hey, I think you got no place to vacuum up. Maybe you got lost? It's
            alright, Hurple is here to support you on your vacuuming journey.
            Don't worry, he doesn't vacuum hard!
          </span>
          <span className={styles.subtitle}>
            Oh? You want places to go huh?
          </span>
          <ul>
            <li className={styles.text}>
              <Link to="/" className={styles.bold}>
                Home{" "}
              </Link>
              — Check out the cool features about Oldcord. And they're very
              cool.
            </li>
            <li className={styles.text}>
              <a
                href="https://staging.oldcordapp.com"
                className={styles.bold}
                onClick={(e) => {
                  e.preventDefault();
                  onGetStarted("https://staging.oldcordapp.com");
                }}
              >
                Go Back to Oldcord{" "}
              </a>
              — Your friends are waiting for you! Go there and say hi!
            </li>
            <li className={styles.text}>
              <Link to="about" className={styles.bold}>
                About Us{" "}
              </Link>
              — First time knowing who we are? Learn how we are bringing back
              the good old days of Discord from 2015-2018.
            </li>
          </ul>
          <span className={styles.subtitle}>
            Fun Fact #{randomFunFact.number}
          </span>
          <span className={styles.text}>{randomFunFact.fun_fact}</span>
        </div>
        <Hurple className={styles.logo} />
      </div>
    </div>
  );
};

export default FourOhFour;
