import styles from "./dialogBox.module.css";
import Cookies from "js-cookie";

const DialogBox = ({
  isOpen,
  onClose,
  onCheckboxChange,
  isChecked,
  onOpenSelector,
}) => {
  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    onCheckboxChange(checked);
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
        <div className={styles["i-understand"]}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className={styles.checkmark} />I understand and will report issues as constructively as possible. Complaining may result in my account being banned without the possibility of appeal.
          </label>
        </div>
        <div className={styles["button-container"]}>
          <span
            className={`button ${styles.button} ${!isChecked ? "button-disabled" : "button-hurple"}`}
            onClick={handleOpenSelector}
          >
            Open Selector
          </span>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;