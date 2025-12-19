import { useEffect, useState } from "react";

import styles from "./notice.module.css";

const Notice = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const checkApiStatus = async () => {
      const response = await fetch("https://staging.oldcordapp.com/api", {
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        setShowNotice(true);
      }
    };

    checkApiStatus();

    const interval = setInterval(checkApiStatus, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  if (showNotice) {
    return (
      <div className={styles.content}>
        Instance is currently experiencing problems. Please wait until it's
        resolved. Join our Spacebar guild in the meantime.
      </div>
    );
  }
};

export default Notice;
