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
          Oldcord is still being worked on and features might be missing/buggy.
          <span className={styles.bold}>
            {" "}
            Complaining would not help accelerate fixes faster, just makes you
            look like an asshole and we will not tolerate the behaviour.
          </span>
        </span>
        <div className={styles["i-understand"]}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className={styles.checkmark} />I understand and will report
            issues as constructive as possible. Complaining will get my account
            banned without appeals.
          </label>
        </div>
        <div className={styles["button-container"]}>
          <button
            className={`button button-hurple ${styles.button}`}
            onClick={handleOpenSelector}
            disabled={!isChecked}
          >
            Open Selector
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
