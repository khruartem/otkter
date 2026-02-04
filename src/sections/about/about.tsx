import { FC } from "react";

import { AboutUI } from "../../components/ui/sections/about";

export const About: FC = () => {
  const presentation =
    "https://storage.yandexcloud.net/otkter-bucket/about/presentation.pdf";

  const onButtonClick = () => {
    window.open(presentation, "_blank");
  };

  return <AboutUI onButtonClick={onButtonClick} />;
};
