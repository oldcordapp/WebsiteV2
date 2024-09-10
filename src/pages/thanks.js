import styles from "./thanks.module.css";
import sectionStyles from "./sections.module.css";

import MetaTags from "../components/metaTags.js";

const Thanks = () => {
  return (
    <div>
      <MetaTags title="Oldcord - Special Thanks" />
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={`${styles["tagline-title"]}`}>Special Thanks!</div>
          <div className={`${styles["tagline-subtitle"]} text-light-gray`}>
            A huge shoutout to our amazing developers, contributors, and bug testers!
          </div>
        </div>
      </div>
      <div className={`${styles["thanks-section"]} ${sectionStyles.section}`}>
        <div
          className={sectionStyles["section-content"]}
          style={{ marginBottom: "20px" }}
        >
          <div className={styles["scrollable-lists"]}>
            <div className={styles["scrollable-content"]}>
              <div className={styles.list}>
                <span className={sectionStyles.title}>Developers</span>
                <ul>
                  <li className={sectionStyles.text}>
                    <span className={sectionStyles.bold}>noia</span>
                    <br />
                    <span className={styles["text-small"]}>Everything</span>
                  </li>
                  <li className={sectionStyles.text}>
                    <span className={sectionStyles.bold}>dogsong</span>
                    <br />
                    <span className={styles["text-small"]}>Backend, Bootstrapper/Patcher</span>
                  </li>
                  <li className={sectionStyles.text}>
                    <span className={sectionStyles.bold}>deskehs</span>
                    <br />
                    <span className={styles["text-small"]}>
                      Electron Patches, Website, Branding
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
