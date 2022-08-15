import { useEffect, useState } from "react";

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollDetectHandler = () => {
    if (window.scrollY > 50) setIsScrolled(true);
    else setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollDetectHandler);
    console.log(`[EFFECT] useScroll`);

    return () =>
      window.removeEventListener(
        "scroll",
        scrollDetectHandler
      );
  }, [isScrolled]);

  return isScrolled;
};

export default useScroll;
