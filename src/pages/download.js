import styles from "./download.module.css";

import MetaTags from '../components/metaTags.js';

const Download = () => {
  return (
    <div>
      <MetaTags title="Oldcord - Download Oldcord Desktop Client" description="Download Oldcord Desktop Client to use Oldcord on your desktop. Great for use."/>
      <div className={styles.header}>
        <div className={styles["tagline-container"]}>
          <div className={styles["tagline-title"]}>
            Download Oldcord Desktop Client
          </div>
          <div className={`${styles["tagline-subtitle"]} text-light-gray`}>
            Patched desktop client generously provided by CordPackers
          </div>
        </div>
      </div>
      <div className={styles.download}>
        <div className={styles["download-section-content"]}>
          <div className={`${styles["download-section-content-os"]}`}>
            <span className={styles["download-title"]}>Windows</span>
            <span
              className={`button ${styles.button} ${styles["download-button"]} ${"button-disabled"}`}
            >
              Temporarily down
            </span>
          </div>
          <div className={`${styles["download-section-content-os"]}`}>
            <span className={styles["download-title"]}>macOS</span>
            <span
              className={`button ${styles.button} ${
                styles["download-button"]
              } ${"button-disabled"}`}
            >
              Coming soon
            </span>
          </div>
          <div className={styles["download-section-content-os"]}>
            <span className={styles["download-title"]}>Linux</span>
            <span
              className={`button ${styles.button} ${
                styles["download-button"]
              } ${"button-disabled"}`}
            >
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
