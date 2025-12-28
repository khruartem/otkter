import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { ErrorUI } from "../../components/ui/pages/error";

import { TPageLayout, TPageSEO } from "../../components/page/type";

export const NotFound404: FC = () => {
  const navigate = useNavigate();

  const title = "Страница не найдена";
  const text =
    "Она была удалена или перемещена, либо её адрес набран неправильно";
  const buttonLabel = "Вернуться на главную";
  const handleClick = () => {
    navigate("/");
  };

  const seo: TPageSEO = {
    title,
    description: text,
    siteName: title,
    url: "https://otkter.ru/",
    previewImg: "/preview/preview.webp",
  };

  const layout: TPageLayout = {
    noPadding: false,
  };

  return (
    <ErrorUI
      title={title}
      text={text}
      buttonLabel={buttonLabel}
      onButtonClick={handleClick}
      pageProps={{ seo, layout }}
    />
  );
};
