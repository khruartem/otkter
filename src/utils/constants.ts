import { TNavLinks, TMapping } from "./types";

export const navLinks: TNavLinks = [
  {
    id: 1,
    name: "О нас",
    url: "#about",
  },
  {
    id: 2,
    name: "Услуги",
    url: "#services",
  },
  {
    id: 3,
    name: "Проекты",
    url: "#projects",
  },
  {
    id: 4,
    name: "Команда",
    url: "#team",
  },
  {
    id: 5,
    name: "Контакты",
    url: "#contacts",
  },
];

export const linkMapping: TMapping = {
  // Не найдено
  "not-found": 0,
  // Проекты
  "unique-chronicle": 1,
  friendship: 2,
  "open-play": 3,
  mastership: 4,
  nikolay: 5,
  "two-in-world": 6,
  esenin: 7,
  amplitude: 8,
  // Услуги
  "open-sea": 1,
  events: 2,
  design: 3,
  content: 4,
  "master-class": 5,
  lamp: 6,
  smm: 7,
  // Админы
  yakovlev: 1,
  LA: 2,
  sinelnikova: 3,
  aspek: 4,
  hrustalev: 5,
};
