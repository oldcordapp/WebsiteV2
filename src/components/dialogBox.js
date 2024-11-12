import styles from "./dialogBox.module.css";
import Cookies from "js-cookie";
import { useState, useCallback } from "react";

const CHECKBOXES = [
  {
    id: 'terms',
    label: 'I understand and will report issues constructively. Complaining may result in account termination.'
  },
  {
    id: 'guidelines',
    label: 'I have read the T&C, Privacy Policy and Instance Guidelines.'
  }
];

const DialogBox = ({ isOpen, onClose, redirectUrl }) => {
  const [checks, setChecks] = useState(
    Object.fromEntries(CHECKBOXES.map(({ id }) => [id, false]))
  );

  const handleCheckboxChange = useCallback((id) => (event) => {
    setChecks(prev => ({ ...prev, [id]: event.target.checked }));
  }, []);

  const canContinue = Object.values(checks).every(Boolean);

  const handleContinue = useCallback(() => {
    if (canContinue) {
      Cookies.set("skip-dialog", "true", { expires: 365 });
      redirectUrl && (window.location.href = redirectUrl);
    }
  }, [canContinue, redirectUrl]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.box} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>Before you use Oldcord...</span>
          <span className={styles["close-button"]} onClick={onClose}>&times;</span>
        </div>

        <span className={styles.subtitle}>
          Oldcord is still under development, so some features may be incomplete
          or have bugs.
          <span className={styles.bold}>
            {" "}Complaining won't speed up fixes; it only reflects poorly on you,
            and we won't accept that kind of behavior.
          </span>
        </span>

        <span className={styles.subtitle} style={{ marginBottom: "20px" }}>
          Please also read the{' '}
          {['T&C', 'Privacy Policy', 'Cookie Policy', 'Instance Guidelines'].map((text, i, arr) => (
            <span key={text}>
              <a href={`/${text.toLowerCase().replace(/\s/g, '')}`}>{text}</a>
              {i < arr.length - 1 && (i === arr.length - 2 ? ' and ' : ', ')}
            </span>
          ))}.
        </span>

        {CHECKBOXES.map(({ id, label }) => (
          <div key={id} className={styles["i-understand"]} style={{ marginBottom: id === 'guidelines' ? "20px" : "" }}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={checks[id]}
                onChange={handleCheckboxChange(id)}
              />
              <span className={styles.checkmark} />
              {label}
            </label>
          </div>
        ))}

        <div className={styles["button-container"]}>
          <span 
            className={`button ${styles.button} ${canContinue ? 'button-hurple' : 'button-disabled'}`}
            onClick={canContinue ? handleContinue : undefined}
          >
            Continue
          </span>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
