import { FC } from "react";

import { AboutUI } from "../../components/ui/sections/about";

import presentation from "../../assets/presentation.pdf";

export const About: FC = () => {
  const onButtonClick = () => {
    window.open(presentation, "_blank");
  };

  return <AboutUI onButtonClick={onButtonClick} />;
};
