import { Category, Social, TCard, TNavLinks } from "./types";

import telegramSVG from "../assets/telegram.svg";
import vkSVG from "../assets/vk.svg";
import uniqueChronicle from "../assets/project_unique_chronicle.png";

export const presentationUrl: string = "https://doka.guide/";
export const telegramUrl: string = "https://t.me/otkterr";
export const vkUrl: string = "https://vk.com/otkter";

export const navLinks: TNavLinks = [
  {
    id: 1,
    name: "О нас",
    url: "#about"
  },
  {
    id: 2,
    name: "Услуги",
    url: "#services"
  },
  {
    id: 3,
    name: "Проекты",
    url: "#projects"
  },
  {
    id: 4,
    name: "Команда",
    url: "#team"
  },
  {
    id: 5,
    name: "Контакты",
    url: "#contacts"
  }
]

export const socials: Social[] = [
  {
    id: 1,
    url: telegramUrl,
    type: "telegram",
    icon: telegramSVG
  },
  {
    id: 2,
    url: vkUrl,
    type: "vk",
    icon: vkSVG
  }
]

export const Cards: TCard[] = [
  {
    id: 1,
    title: "«Показ уникальной хроники 1945»",
    category: [Category.PLAY],
    attention: false,
    image: uniqueChronicle,
    text: "В центре вечера — восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне."
  },
  {
    id: 2,
    title: "«Нет уз святее товарищества»",
    category: [Category.COMPETITION],
    attention: false,
    image: uniqueChronicle,
    text: "В центре вечера — восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне."
  }
] 
