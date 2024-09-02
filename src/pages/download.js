import styles from "./download.module.css";

const Download = () => {
  return (
    <div>
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
              className={`button button-hurple ${styles.button} ${styles["download-button"]}`}
            >
              <span
                className={`button ${styles.button} ${
                  styles["download-button"]
                } ${"button-disabled"}`}
              >
                Down for updating.
              </span>
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
