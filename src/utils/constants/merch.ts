import { Colors } from "../types";
import { TMerch, TMerchColors } from "../types/merch";

const merchColors: TMerchColors = {
  Navy: { hex: Colors.Navy, name: "Нави" },
  Nephritis: { hex: Colors.Nephritis100, name: "Нефрит" },
  Light: { hex: Colors.Light100, name: "Белый" },
};

export const merchItems: TMerch[] = [
  {
    id: 1,
    kind: "merch",
    url: "regular-t-shirt-light",
    type: "cloths",
    categories: {
      attention: false,
      categoryList: [
        {
          text: "Новинка",
        },
      ],
    },
    title: "Футболка творца Открытой Территории",
    shortText:
      "Буквальная униформа всех наших творцов, призывающая объединять творческих людей. Плотный хлопок и контрастный взрыв фирменной айдентики.",
    image: "",
    icon: "",
    photos: [],
    price: {
      value: 2000,
      currency: "₽",
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [merchColors.Light],
    main: true,
    active: true,
  },
  {
    id: 2,
    kind: "merch",
    url: "regular-t-shirt-navy",
    type: "cloths",
    title: "Футболка творца Открытой Территории",
    shortText:
      "Буквальная униформа всех наших творцов, призывающая объединять творческих людей. Плотный хлопок и контрастный взрыв фирменной айдентики.",
    image: "",
    icon: "",
    photos: [],
    price: {
      value: 2000,
      currency: "₽",
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [merchColors.Navy],
    main: true,
    active: true,
  },
  {
    id: 3,
    kind: "merch",
    url: "regular-t-shirt-nephritis",
    type: "cloths",
    title: "Футболка творца Открытой Территории",
    shortText:
      "Буквальная униформа всех наших творцов, призывающая объединять творческих людей. Плотный хлопок и контрастный взрыв фирменной айдентики.",
    image: "",
    icon: "",
    photos: [],
    price: {
      value: 2000,
      currency: "₽",
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [merchColors.Nephritis],
    main: true,
    active: true,
  },
];
