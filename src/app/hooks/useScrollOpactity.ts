import { useEffect, useState } from "react";

export const useScrollOpacity = (sectionId: string) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        const rect = section.getBoundingClientRect();
        const isCurrentlyVisible =
          rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isCurrentlyVisible) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionId]);

  return isVisible;
};
