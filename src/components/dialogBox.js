import styles from "./dialogBox.module.css";
import Cookies from "js-cookie";
import { useState } from "react";

const DialogBox = ({ isOpen, onClose, redirectUrl }) => {
  const [checks, setChecks] = useState({
    terms: false,
    guidelines: false
  });

  const handleCheckboxChange = (field) => (event) => {
    setChecks(prev => ({
      ...prev,
      [field]: event.target.checked
    }));
  };

  const handleContinue = () => {
    if (checks.terms && checks.guidelines) {
      Cookies.set("skip-dialog", "true");
      // Make sure redirectUrl exists before redirecting
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    }
  };

  if (!isOpen) return null;

  const canContinue = checks.terms && checks.guidelines;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>Before you use Oldcord...</span>
          <span className={styles["close-button"]} onClick={onClose}>&times;</span>
        </div>
        <span className={styles.subtitle}>
          Oldcord is still under development, so some features may be incomplete
          or have bugs.
          <span className={styles.bold}>
            {" "}
            Complaining won't speed up fixes; it only reflects poorly on you,
            and we won't accept that kind of behavior.
          </span>
        </span>
        <span className={styles.subtitle} style={{ marginBottom: "20px" }}>
          Please also read the <a href="/terms">T&C</a>,{" "}
          <a href="/privacy">Privacy Policy</a>, <a href="/cookies">Cookie Policy</a> and{" "}
          <a href="/guidelines">Instance Guidelines</a>.
        </span>
        <div className={styles["i-understand"]}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={checks.terms}
              onChange={handleCheckboxChange('terms')}
            />
            <span className={styles.checkmark} />
            I understand and will report issues constructively. Complaining may result in account termination.
          </label>
        </div>
        <div className={styles["i-understand"]} style={{ marginBottom: "20px" }}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={checks.guidelines}
              onChange={handleCheckboxChange('guidelines')}
            />
            <span className={styles.checkmark} />
            I have read the T&C, Privacy Policy and Instance Guidelines.
          </label>
        </div>
        <div className={styles["button-container"]}>
          <span
            className={`button ${styles.button} ${canContinue ? 'button-hurple' : 'button-disabled'}`}
            onClick={canContinue ? handleContinue : null}
          >
            Continue
          </span>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
