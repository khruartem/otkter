import { FC, useState } from "react";

import { CopyUI } from "../ui/copy";

import { Colors } from "../../utils/types";
import { TAlert } from "../../utils/types/alert";

export const Copy: FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const copyUrl = window.location.href;
    window.navigator.clipboard.writeText(copyUrl || "");

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const copy: TAlert = {
    category: {
      text: "Ссылка скопирована",
      icon: "circle",
    },
    colors: {
      icon: Colors.Navy,
      background: Colors.Navy,
      text: Colors.Light100,
    },
  };

  return <CopyUI copy={copy} onCopy={handleCopy} isCopied={isCopied} />;
};
