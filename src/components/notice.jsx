import { useEffect, useState } from "react";

import styles from "./notice.module.css";

const Notice = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const checkApiStatus = async () => {
      const response = await fetch("https://staging.oldcordapp.com/api", {
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
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
        Instance is currently closed until futher notice. Check GitHub for self-hosting instructions. Community instances will be featured in the instance page as they become available.
      </div>
    );
  }
};

export default Notice;
