import React, { useEffect } from "react";

const MetaTags = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    return () => {
      document.title = "Oldcord";

      const cleanupMetaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (cleanupMetaDescription) {
        cleanupMetaDescription.setAttribute(
          "content",
          description || "Oldcord, it is website. He is for old instant-messager. Good for use."
        );
      }
    };
  }, [title, description]);

  return null;
};

export default MetaTags;
