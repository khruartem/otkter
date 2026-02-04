import { Colors } from "../types";
import { TMerch, TMerchColors } from "../types/merch";
import { contactFunction } from "../contactFunction";
import { yakovlev } from "./team";

const merchColors: TMerchColors = {
  Navy: { hex: Colors.Navy, name: "Нави" },
  Nephritis: { hex: Colors.Nephritis100, name: "Нефрит" },
  Light: { hex: Colors.Light100, name: "Белый" },
  Steel: { hex: Colors.Light30, name: "Стальной" },
};

export const merchItems: TMerch[] = [
  {
    id: 1,
    kind: "merch",
    url: "t-shirt-artist",
    type: "cloths",
    title: "Футболка творца Открытой Территории",
    shortText:
      "Буквальная униформа всех наших творцов, призывающая объединять творческих людей. Плотный хлопок и контрастный взрыв фирменной айдентики.",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/merch/cloths/t_shirt_artists/original/t_shirt_artists_white_front.png",
    icon: "",
    photos: [
      {
        id: 1,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/merch/cloths/t_shirt_artists/original/t_shirt_artists_white_front.png",
        icon: "https://storage.yandexcloud.net/otkter-bucket/merch/cloths/t_shirt_artists/icons/t_shirt_artists_white_front.avif",
      },
      {
        id: 2,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/merch/cloths/t_shirt_artists/original/t_shirt_artists_white_back.png",
        icon: "https://storage.yandexcloud.net/otkter-bucket/merch/cloths/t_shirt_artists/icons/t_shirt_artists_white_back.avif",
      },
      {
        id: 3,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/merch/cloths/t_shirt_artists/original/t_shirt_artists_navy_front.png",
        icon: "https://storage.yandexcloud.net/otkter-bucket/merch/cloths/t_shirt_artists/icons/t_shirt_artists_navy_front.avif",
      },
      {
        id: 4,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/merch/cloths/t_shirt_artists/original/t_shirt_artists_navy_back.png",
        icon: "https://storage.yandexcloud.net/otkter-bucket/merch/cloths/t_shirt_artists/icons/t_shirt_artists_navy_back.avif",
      },
    ],
    price: {
      value: 2000,
      currency: "₽",
    },
    params: {
      name: "Размеры",
      values: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    colors: [merchColors.Light, merchColors.Navy],
    controls: [
      {
        label: "Заказать",
        type: "button",
        onClick: () => contactFunction(yakovlev.getEmployee(), "telegram"),
        url: "#",
        icon: "telegram",
      },
    ],
    previewImg: "/preview/preview_tshirt_artists.webp",
    main: true,
    active: true,
  },
  {
    id: 2,
    kind: "merch",
    url: "thermos",
    type: "souvenirs",
    categories: {
      attention: false,
      categoryList: [
        {
          text: "Новинка",
        },
      ],
    },
    title: "Термос творца Открытой Территории",
    shortText:
      "Городской аксессуар, призванный наполнять теплом и творческой энергией. Нержавеющая сталь, ситечко, компактный формат.",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/merch/souvenirs/thermos_steel/original/thermos_steel.png",
    icon: "",
    photos: [
      {
        id: 1,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/merch/souvenirs/thermos_steel/original/thermos_steel.png",
        icon: "https://storage.yandexcloud.net/otkter-bucket/merch/souvenirs/thermos_steel/icons/thermos_steel.avif",
      },
    ],
    price: {
      value: 2000,
      currency: "₽",
    },
    params: {
      name: "Объемы",
      values: ["500мл"],
    },
    colors: [merchColors.Steel],
    controls: [
      {
        label: "Заказать",
        type: "button",
        onClick: () => contactFunction(yakovlev.getEmployee(), "telegram"),
        url: "#",
        icon: "telegram",
      },
    ],
    previewImg: "/preview/preview_termos.webp",
    main: true,
    active: true,
  },
];
