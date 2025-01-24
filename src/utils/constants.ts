import { Social, TNavLinks, TProject } from "./types";

import telegramSVG from "../assets/telegram.svg";
import vkSVG from "../assets/vk.svg";
import playSVG from "../../public/projects_play.svg";
import masterClassSVG from "../../public/projects_master-class.svg";
import contestSVG from "../../public/project_contest.svg";
import shortFilmSVG from "../../public/projets_short-film.svg";
import uniqueChronicle from "../assets/project_unique_chronicle.png";
import friendship from "../assets/project_friendship.png";
import openPlay from "../assets/project_open_play.png";
import mastership from "../assets/project_mastership.png";
import nikolayFilm from "../assets/project_nikolay_film.png";
import nikolayPlay from "../assets/project_nikolay_play.png";

export const presentationUrl: string = "https://doka.guide/";
export const telegramUrl: string = "https://t.me/otkterr";
export const vkUrl: string = "https://vk.com/otkter";

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

export const socials: Social[] = [
  {
    id: 1,
    url: telegramUrl,
    type: "telegram",
    icon: telegramSVG,
  },
  {
    id: 2,
    url: vkUrl,
    type: "vk",
    icon: vkSVG,
  },
];

export const Cards: TProject[] = [
  {
    id: 1,
    title: "«Показ уникальной хроники 1945»",
    categoryList: [
      { 
        name: "Спектакль", 
        icon: playSVG,
        id: "play" 
      },
    ],
    attention: false,
    image: uniqueChronicle,
    shortText:
      "В центре вечера — восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне.",
    type: "projects",
  },
  {
    id: 2,
    title: "«Нет уз святее товарищества»",
    categoryList: [
      {
        name: "Конкурс",
        icon: contestSVG,
        id: "contest"
      },
    ],
    attention: false,
    image: friendship,
    shortText:
      "Цель проведения конкурса — популяризация патриотизма средствами театрального искусства и сохранение социокультурных, духовно-нравственных, патриотических традиций.",
    type: "projects",
  },
  {
    id: 3,
    title: "«Открытая пьеса»",
    categoryList: [
      {
        name: "Конкурс",
        icon: contestSVG,
        id: "contest"
      },
    ],
    attention: false,
    image: openPlay,
    shortText:
      "Конкурс пьес молодых драматургов направлен на выявление и поддержку современных авторов, детских театральных студий, самодеятельных и профессиональных театров.",
    type: "projects",
  },
  {
    id: 4,
    title: "«Ораторское мастерство как инструмент коммуникации»",
    categoryList: [
      {
        name: "Мастер класс",
        icon: masterClassSVG,
        id: "master-class"
      },
    ],
    attention: false,
    image: mastership,
    shortText:
      "Мастер-классы в рамках дополнительной общеобразовательной программы «Психология межличностного общения. Основы коммуникации» для ветеранов СВО.",
    type: "projects",
  },
  {
    id: 5,
    title: "«О Николае II»",
    categoryList: [
      {
        name: "Короткий метр",
        icon: shortFilmSVG,
        id: "short-film"
      },
    ],
    attention: true,
    image: nikolayFilm,
    shortText:
      "Документальный короткометражный фильм о Николае ll. Проект находится в стадии разработки и написания сценария. Уже собрана полноценная съёмочная группа. Проект нуждается в финансировании.",
    type: "projects",
  },
  {
    id: 6,
    title: "«О Николае II»",
    categoryList: [
      {
        name: "Спектакль",
        icon: playSVG,
        id: "play"
      },
    ],
    attention: false,
    image: nikolayPlay,
    shortText:
      "Театр «ЛАМП» приступил к созданию спектакля о Николае ll. Проект нуждается в финансировании.",
    type: "projects",
  },
];
