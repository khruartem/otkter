import { FC, useEffect, useState } from "react";

import { MainUI } from "../../components/ui/pages/main";
import { Preloader } from "../../components/ui/preloader";

import { Colors } from "../../utils/types";

export const Main: FC = () => {
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );
  
  useEffect(() => {
    document.body.style.backgroundColor = Colors.Light80;
    setDocReadyState(document.readyState);
  }, []);

  return docReadyState === "complete" || docReadyState === "interactive" ? (
    <MainUI />
  ) : (
    <Preloader />
  );
};
