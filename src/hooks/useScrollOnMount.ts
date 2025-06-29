import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollOnMount = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash && !location.state) {
      const section = document.querySelector(`${location.hash}`);
      section?.scrollIntoView({
        block: "start",
        behavior: "instant",
      });
    }
  }, []);
};
