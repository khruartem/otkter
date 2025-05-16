import clsx from "clsx";
import { FC, useState } from "react";

import { ShareUI } from "../ui/share";

import { TShareProps } from "./types";
import { useGetTitle } from "../../hooks/useGetTitle";
import { Social, TCategory } from "../../utils/types";

export const Share: FC<TShareProps> = ({ id, type }) => {
  const href = window.location.href;

  // TODO: сделать useGetTitle универсальным для услуг и проектов, добавив тип
  const title = `${clsx(
    type === "projects" && "Проект",
    type === "services" && "Услуга"
  )} ${useGetTitle(id)[0].toLocaleLowerCase() + useGetTitle(id).slice(1)}`;

  const telegramLink = `https://t.me/share/url?url=${href}&text=${title}`;
  const VKLink = `https://vk.com/share.php?url=${href}`;
  const copyLink = href;

  const [isCopied, setIsCopied] = useState(false);

  const onCopy = (copyLink?: string) => {
    window.navigator.clipboard.writeText(copyLink || "");

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const socials: Social[] = [
    {
      id: 1,
      type: "telegram",
      url: telegramLink,
    },
    {
      id: 2,
      type: "vk",
      url: VKLink,
    },
    {
      id: 3,
      type: "copy",
      url: copyLink,
      onClick: onCopy,
    },
  ];

  const copy: TCategory = {
    name: "Ссылка скопирована",
    type: "main",
    id: "circle",
  };

  return <ShareUI socials={socials} copy={copy} isCopied={isCopied} />;
};
