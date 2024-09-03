import styles from "./dialogBox.module.css";
import Cookies from "js-cookie";
import { useState } from "react"; // Import useState

const DialogBox = ({
  isOpen,
  onClose,
  onCheckboxChange,
  isChecked,
  onOpenSelector,
}) => {
  const [isCheckedSecond, setIsCheckedSecond] = useState(false); // State for the second checkbox

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    onCheckboxChange(checked);
  };

  const handleSecondCheckboxChange = (event) => {
    setIsCheckedSecond(event.target.checked); // Update the second checkbox state
  };

  const handleOpenSelector = () => {
    Cookies.set("skip-dialog", true);
    onOpenSelector();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <div className={styles["header"]}>
          <span className={styles.title}>Before you use Oldcord...</span>
          <span className={styles["close-button"]} onClick={onClose}>
            &times;
          </span>
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
        <span className={styles.subtitle} style={{ marginBottom: '20px' }}>
          Please also read the <a href="/terms">T&C</a>, <a href="/privacy">Privacy Policy</a> and <a href="/guidelines">Instance Guidelines</a>.
        </span>
        <div className={styles["i-understand"]}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className={styles.checkmark} />
            I understand and will report issues as constructively as possible. Complaining may result in my account being banned without the possibility of appeal.
          </label>
        </div>
        <div className={styles["i-understand"]} style={{ marginBottom: '20px' }}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={isCheckedSecond}
              onChange={handleSecondCheckboxChange}
            />
            <span className={styles.checkmark} />
            I have read the T&C, Privacy Policy and Instance Guidelines.
          </label>
        </div>
        <div className={styles["button-container"]}>
          <span
            className={`button ${styles.button} ${!(isChecked && isCheckedSecond) ? "button-disabled" : "button-hurple"}`}
            onClick={handleOpenSelector}
          >
            Go to selector
          </span>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;