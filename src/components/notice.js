import { useEffect, useState } from 'react';

const Notice = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch("https://staging.oldcordapp.com/api");
        
        if (response.status === 502) {
            setShowNotice(true);
        }
      } catch (error) {
        console.error("Error fetching the API:", error);

        setShowNotice(true);
      }
    };

    checkApiStatus();

    const interval = setInterval(checkApiStatus, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  if (showNotice) {
    return (
      <div className="notice">
        Main instance is currently experiencing problems. Please wait until it's resolved.
      </div>
    );
  }
};

export default Notice;
