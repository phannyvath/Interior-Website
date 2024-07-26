import React, { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        setCompletion(((currentProgress / scrollHeight) * 100).toFixed(2));
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);

    // Initial call to set the value on component mount
    updateScrollCompletion();

    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
