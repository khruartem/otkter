import { FC, useEffect, useState } from "react";

import { Header } from "../header";

export const HeaderAnimated: FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const sectionHeight =
      (document.querySelector("#hero")?.clientHeight || 300) * 0.6;

    const handleScroll = () => {
      setScrolled(window.scrollY > sectionHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Header animation={{ animated: scrolled, setAnimated: setScrolled }} />
  );
};
