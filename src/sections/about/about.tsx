import { FC } from "react";

import { AboutUI } from "../../components/ui/sections/about";

import { useScrollOnMount } from "../../hooks/useScrollOnMount";

import presentation from "../../assets/presentation.pdf";

export const About: FC = () => {
  const onButtonClick = () => {
    window.open(presentation, "_blank");
  };
  
  useScrollOnMount();
  
  return <AboutUI onButtonClick={onButtonClick} />;
};
