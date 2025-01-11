import { Social, TNavLinks } from "./types";

import telegramSVG from "../assets/telegram.svg";
import vkSVG from "../assets/vk.svg";

export const presentationUrl: string = "https://doka.guide/";
export const telegramUrl: string = "https://doka.guide/";
export const vkUrl: string = "https://doka.guide/";

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
