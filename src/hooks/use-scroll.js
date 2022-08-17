import { useEffect, useState } from "react";

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollDetectHandler = () => {
    if (window.scrollY > 50) setIsScrolled(true);
    else setIsScrolled(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener(
        "scroll",
        scrollDetectHandler
      );
      console.log(`[EFFECT] Scrolling`);
    }, 500);

    return () => {
      window.removeEventListener(
        "scroll",
        scrollDetectHandler
      );

      clearTimeout(timer);
    };
  }, [isScrolled]);

  return isScrolled;
};

export default useScroll;
