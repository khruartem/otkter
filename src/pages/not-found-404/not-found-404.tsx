import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Preloader } from "../../components/ui/preloader";
import { ErrorUI } from "../../components/ui/pages/error";

export const NotFound404: FC = () => {
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );

  const navigate = useNavigate();

  const title = "Страница не найдена";
  const text =
    "Она была удалена или перемещена, либо её адрес набран неправильно";
  const buttonLabel = "Вернуться на главную";
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setDocReadyState(document.readyState);
  }, [docReadyState]);

  return docReadyState ? (
    <ErrorUI
      title={title}
      text={text}
      buttonLabel={buttonLabel}
      onButtonClick={handleClick}
    />
  ) : (
    <Preloader />
  );
};
