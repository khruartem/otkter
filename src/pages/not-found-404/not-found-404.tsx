import { FC, useEffect, useState } from "react";

import { Preloader } from "../../components/ui/preloader";
import { ErrorUI } from "../../components/ui/pages/error";

import { useToMain } from "../../hooks/useToMain";

export const NotFound404: FC = () => {
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );

  const title = "Страница не найдена";
  const text =
    "Она была удалена или перемещена, либо её адрес набран неправильно";
  const buttonLabel = "Вернуться на главную";
  const onButtonClick = useToMain();

  useEffect(() => {
    setDocReadyState(document.readyState);
  }, [docReadyState]);

  return docReadyState ? (
    <ErrorUI
      title={title}
      text={text}
      buttonLabel={buttonLabel}
      onButtonClick={onButtonClick}
    />
  ) : (
    <Preloader />
  );
};
