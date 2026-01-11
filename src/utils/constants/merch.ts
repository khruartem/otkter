import { Colors } from "../types";
import { TMerch, TMerchColors } from "../types/merch";
import { contactFunction } from "../contactFunction";
import { yakovlev } from "./team";

// Фото футболки творца
import tShirtArtisitsWhiteFrontPhoto from "../../assets/merch/tshirts/tshirt_reg_white_front.avif";
import tShirtArtistsWhiteBackPhoto from "../../assets/merch/tshirts/tshirt_reg_white_back.avif";
import tShirtArtistsNavyFrontPhoto from "../../assets/merch/tshirts/tshirt_reg_navy_front.avif";
import tShirtArtistsNavyBackPhoto from "../../assets/merch/tshirts/tshirt_reg_navy_back.avif";

// Иконки футболки творца
import tShirtArtisitsWhiteFrontIcon from "../../assets/merch/tshirts/icons/tshirt_reg_white_front.avif";
import tShirtArtistsWhiteBackIcon from "../../assets/merch/tshirts/icons/tshirt_reg_white_back.avif";
import tShirtArtistsNavyFrontIcon from "../../assets/merch/tshirts/icons/tshirt_reg_navy_front.avif";
import tShirtArtistsNavyBackIcon from "../../assets/merch/tshirts/icons/tshirt_reg_navy_back.avif";

// Фото термоса
import thermosSteelMainPhoto from "../../assets/merch/thermos/thermos_steel.avif";
// import thermosSteelPhoto1 from "../../assets/merch/thermos/thermos_steel_photo_1.avif";
// import thermosSteelPhoto2 from "../../assets/merch/thermos/thermos_steel_photo_2.avif";

// Иконки термоса
import thermosSteelMainIcon from "../../assets/merch/thermos/icons/thermos_steel.avif";
// import thermosSteelIcon1 from "../../assets/merch/thermos/icons/thermos_steel_photo_1.avif";
// import thermosSteelIcon2 from "../../assets/merch/thermos/icons/thermos_steel_photo_2.avif";

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
    image: tShirtArtisitsWhiteFrontPhoto,
    icon: "",
    photos: [
      {
        id: 1,
        source: tShirtArtisitsWhiteFrontPhoto,
        icon: tShirtArtisitsWhiteFrontIcon,
      },
      {
        id: 2,
        source: tShirtArtistsWhiteBackPhoto,
        icon: tShirtArtistsWhiteBackIcon,
      },
      {
        id: 3,
        source: tShirtArtistsNavyFrontPhoto,
        icon: tShirtArtistsNavyFrontIcon,
      },
      {
        id: 4,
        source: tShirtArtistsNavyBackPhoto,
        icon: tShirtArtistsNavyBackIcon,
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
        onClick: () => contactFunction(yakovlev, "telegram"),
        url: "#",
        icon: "telegram",
      },
    ],
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
    image: thermosSteelMainPhoto,
    icon: "",
    photos: [
      {
        id: 1,
        source: thermosSteelMainPhoto,
        icon: thermosSteelMainIcon,
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
        onClick: () => contactFunction(yakovlev, "telegram"),
        url: "#",
        icon: "telegram",
      },
    ],
    main: true,
    active: true,
  },
];
