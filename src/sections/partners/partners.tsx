import { FC } from "react";

import { PartnersUI } from "../../components/ui/sections/partners";

import { TPartner } from "../../utils/types/partners";

export const Partners: FC = () => {
  const partners: TPartner[] = [
    {
      src: "https://storage.yandexcloud.net/otkter-bucket/partners/nagatino.webp",
      alt: "Логотип Нагатино",
    },
    {
      src: "https://storage.yandexcloud.net/otkter-bucket/partners/uao.webp",
      alt: "Логотип ОКЦ ЮАО",
    },
    {
      src: "https://storage.yandexcloud.net/otkter-bucket/partners/cao.webp",
      alt: "Логотип ОКЦ ЦАО",
    },
    {
      src: "https://storage.yandexcloud.net/otkter-bucket/partners/nicolai.webp",
      alt: "Логотип Николай",
    },
    {
      src: "https://storage.yandexcloud.net/otkter-bucket/partners/prosvet.webp",
      alt: "Логотип Гос. университета просвещения (ПРОСВЕТ)",
    },
    {
      src: "https://storage.yandexcloud.net/otkter-bucket/partners/vershyna.webp",
      alt: "Логотип Вершина",
    },
    {
      src: "https://storage.yandexcloud.net/otkter-bucket/partners/minpros.webp",
      alt: "Логотип Мин. просвещения РФ",
    },
  ];

  return <PartnersUI partners={partners} />;
};
