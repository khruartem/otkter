import { Social, TNavLinks, TProject } from "./types";
import { TInfo } from "../features/projectsInfo/projectsInfoSlice";
import { TProjectControls } from "../features/controls/controlsSlice";
import { TProjectCategories } from "../features/categories/categoriesSlice";
import { TProjectPhotos } from "../features/photos/photosSlice";

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
import yakovlev from "../assets/yakovlev.png";
import LA from "../assets/LA.png";
import sinelnikova from "../assets/sinelnikova.png";
import rudnitskiy from "../assets/rudnitskiy.png";
import torzhkova from "../assets/torzhkova.png";
import murzukova from "../assets/murzukova.png";
import agafonov from "../assets/agafonov.png";
import testPhoto1 from "../assets/testPhoto1.png";
import testPhoto2 from "../assets/testPhoto2.png";
import testPhoto3 from "../assets/testPhoto3.png";
import testPhoto4 from "../assets/testPhoto4.png";
import testPhoto5 from "../assets/testPhoto5.png";

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

export const projects: TProject[] = [
  {
    projectId: 1,
    title: "«Показ уникальной хроники. 1945»",
    image: uniqueChronicle,
    shortText:
      "В центре вечера — восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне.",
    type: "projects",
  },
  {
    projectId: 2,
    title: "«Нет уз святее товарищества»",
    image: friendship,
    shortText:
      "Цель проведения конкурса — популяризация патриотизма средствами театрального искусства и сохранение социокультурных, духовно-нравственных, патриотических традиций.",
    type: "projects",
  },
  {
    projectId: 3,
    title: "«Открытая пьеса»",
    image: openPlay,
    shortText:
      "Конкурс пьес молодых драматургов направлен на выявление и поддержку современных авторов, детских театральных студий, самодеятельных и профессиональных театров.",
    type: "projects",
  },
  {
    projectId: 4,
    title: "«Ораторское мастерство как инструмент коммуникации»",
    image: mastership,
    shortText:
      "Мастер-классы в рамках дополнительной общеобразовательной программы «Психология межличностного общения. Основы коммуникации» для ветеранов СВО.",
    type: "projects",
  },
  {
    projectId: 5,
    title: "«О Николае II»",
    image: nikolayFilm,
    shortText:
      "Документальный короткометражный фильм о Николае ll. Проект находится в стадии разработки и написания сценария. Уже собрана полноценная съёмочная группа. Проект нуждается в финансировании.",
    type: "projects",
  },
  {
    projectId: 6,
    title: "«О Николае II»",
    image: nikolayPlay,
    shortText:
      "Театр «ЛАМП» приступил к созданию спектакля о Николае ll. Проект нуждается в финансировании.",
    type: "projects",
  },
];

export const projectInfos: TInfo[] = [
  {
    projectId: 1,
    text: "В центре вечера - восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне. Серьёзные и важные темы дискуссии воссоединятся с песнями военных лет и стихами, посвящёнными войне.",
    eventDetails: [
      {
        type: "organizers",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "partners",
        value: [
          "ГБУ культуры г. Москвы «Объединение культурных центров Центрального административного округа»",
        ],
      },
      {
        type: "address",
        value: "г. Москва, Сибирский пр., 2, стр. 5",
      },
      {
        type: "date",
        value: "3 декабря 19:00",
      },
      {
        type: "price",
        value: "Вход свободный"
      }
    ],
    employees: {
      actors: [
        {
          name: "Марат Рудницкий",
          occupation: "Журналист времен войны",
          photo: rudnitskiy,
        },
        {
          name: "Людмила Яковлева",
          occupation: "Журналист наших дней",
          photo: LA,
        },
      ],
      administrators: [
        {
          name: "Сергей Яковлев",
          occupation: "Режиссер-постановщик",
          photo: yakovlev,
        },
      ],
    },
  },
  {
    projectId: 2,
    text: "Цель проведения конкурса - популяризация патриотизма средствами театрального искусства и сохранение социокультурных, духовно-нравственных, патриотических традиций российского народа в контексте исторических событий, сохранение исторической памяти, патриотических ценностей, прославление подвигов участников СВО.",
    eventDetails: [
      {
        type: "organizers",
        value: "Федеральное государственное автономное образовательное учреждение высшего образования «Государственный университет просвещения»",
      },
      {
        type: "partners",
        value: [
          "Министерство просвещения Российской Федерации",
          "Государственный фонд поддержки участников СВО «Защитники Отечества»",
          "Творческое объединение «Открытая Территория»",
        ],
      },
      {
        type: "address",
        value: "г. Москва, ул. Радио, 10А, стр. 1",
      },
      {
        type: "date",
        value: "-",
      },
      {
        type: "price",
        value: "Вход свободный"
      }
    ],
  },
  {
    projectId: 3,
    text: "Конкурс пьес молодых драматургов направлен на выявление и поддержку современных авторов, детских театральных студий, самодеятельных и профессиональных театров.",
    eventDetails: [
      {
        type: "organizers",
        value: "ГБУ культуры г. Москвы «Объединение культурных центров Южного административного округа»",
      },
      {
        type: "partners",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "address",
        value: "г. Москва, ул. Судостроительная, д. 31, к 1",
      },
      {
        type: "date",
        value: "1 декабря 2024",
      },
      {
        type: "price",
        value: "3000 ₽",
      }
    ],
  },
  {
    projectId: 4,
    text: "В сотрудничестве с Центром военно-патриотического воспитания «Вершина» Людмила Яковлева проводит мастер-классы по теме «Ораторское мастерство как инструмент коммуникации» в рамках программы переобучения, переподготовки и повышения квалификации обучающихся из числа участников СВО.",
    eventDetails: [
      {
        type: "organizers",
        value: [
          "ФГАОУ ВО «Государственный университет просвещения»",
          "Центр военно-патриотического воспитания «Вершина»",
        ],
      },
      {
        type: "partners",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "address",
        value: "г. Москва, ул. Радио, 10А, стр. 1",
      },
      {
        type: "date",
        value: "Каждую третью субботу месяца"
      },
    ],
  },
  {
    projectId: 5,
    text: "Документальный короткометражный фильм о Николае ll. Проект находится в стадии разработки и написания сценария. Уже собрана полноценная съёмочная группа. Проект нуждается в финансировании.",
    eventDetails: [
      {
        type: "organizers",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "partners",
        value: "Музей памяти семьи Императора Николая ll, усадьба «Белая Дача»",
      },
      {
        type: "date",
        value: "Весна 2025",
      }
    ],
    employees: {
      administrators: [
        {
          name: "Сергей Яковлев",
          occupation: "Режиссер",
          photo: yakovlev,
        },
        {
          name: "Марк Агафонов",
          occupation: "Второй режиссер",
          photo: agafonov,
        },
        {
          name: "Алёна Синельникова",
          occupation: "Генеральный продюсер",
          photo: sinelnikova,
        },
      ],
    },
  },
  {
    projectId: 6,
    text: "Театр «ЛАМП» приступил к созданию спектакля о Николае ll. Проект нуждается в финансировании.",
    eventDetails: [
      {
        type: "organizers",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "partners",
        value: "Музей памяти семьи Императора Николая ll, усадьба «Белая Дача»",
      },
      {
        type: "date",
        value: "Весна 2025"
      }
    ],
    employees: {
      actors: [
        {
          name: "Марат Рудницкий",
          occupation: "Роль",
          photo: rudnitskiy,
        },
        {
          name: "Анастасия Мурзюкова",
          occupation: "Роль",
          photo: murzukova,
        },
        {
          name: "Дарья Торжкова",
          occupation: "Роль",
          photo: torzhkova,
        },
      ],
      administrators: [
        {
          name: "Сергей Яковлев",
          occupation: "Режиссер-постановщик",
          photo: yakovlev,
        },
        {
          name: "Людмила Яковлева",
          occupation: "Режиссер",
          photo: LA,
        },
        {
          name: "Алёна Синельникова",
          occupation: "Директор проекта",
          photo: sinelnikova,
        },
      ],
    },
  },
];

export const projectControls: TProjectControls[] = [
  {
    projectId: 1,
    controls: {
      buttons: [
        {
          label: "Записаться",
          onClick: () => {},
        },
      ],
      links: [],
    },
  },
  {
    projectId: 2,
    controls: {
      buttons: [
        {
          label: "Подробнее",
          onClick: () => {},
        },
      ],
      links: [],
    },
  },
  {
    projectId: 3,
    controls: {
      buttons: [
        {
          label: "Подробнее",
          onClick: () => {},
        },
      ],
      links: [],
    },
  },
  {
    projectId: 4,
    controls: null,
  },
  {
    projectId: 5,
    controls: {
      buttons: [
        {
          label: "Поддержать проект",
          onClick: () => {},
        },
      ],
      links: [
        {
          href: "",
          label: "Презентация проекта",
        },
      ],
    },
  },
  {
    projectId: 6,
    controls: {
      buttons: [
        {
          label: "Поддержать проект",
          onClick: () => {},
        },
      ],
      links: [
        {
          href: "",
          label: "Презентация проекта",
        },
      ],
    },
  },
];

export const projectCategories: TProjectCategories[] = [
  {
    projectId: 0,
    categories: {
      attention: false,
      categoryList: [
        {
          name: "Спектакль",
          icon: "",
          id: "employees",
        },
      ],
    },
  },
  {
    projectId: 1,
    categories: {
      attention: false,
      categoryList: [
        {
          name: "Спектакль",
          icon: playSVG,
          id: "play",
        },
      ],
    },
  },
  {
    projectId: 2,
    categories: {
      attention: false,
      categoryList: [
        {
          name: "Конкурс",
          icon: contestSVG,
          id: "contest",
        },
      ],
    },
  },
  {
    projectId: 3,
    categories: {
      attention: false,
      categoryList: [
        {
          name: "Конкурс",
          icon: contestSVG,
          id: "contest",
        },
      ],
    },
  },
  {
    projectId: 4,
    categories: {
      attention: false,
      categoryList: [
        {
          name: "Мастер класс",
          icon: masterClassSVG,
          id: "master-class",
        },
      ],
    },
  },
  {
    projectId: 5,
    categories: {
      attention: true,
      categoryList: [
        {
          name: "Короткий метр",
          icon: shortFilmSVG,
          id: "short-film",
        },
      ],
    },
  },
  {
    projectId: 6,
    categories: {
      attention: false,
      categoryList: [
        {
          name: "Спектакль",
          icon: playSVG,
          id: "play",
        },
      ],
    },
  },
];

export const projectPhotos: TProjectPhotos[] = [
  {
    projectId: 1,
    photos: [
      {
        id: 1,
        source: testPhoto1,
      },
      {
        id: 2,
        source: testPhoto2,
      },
      {
        id: 3,
        source: testPhoto3,
      },
      {
        id: 4,
        source: testPhoto4,
      },
      {
        id: 5,
        source: testPhoto5,
      },
    ],
  },
  {
    projectId: 2,
    photos: [
      {
        id: 6,
        source: testPhoto1,
      },
      {
        id: 7,
        source: testPhoto2,
      },
      {
        id: 8,
        source: testPhoto3,
      },
      {
        id: 9,
        source: testPhoto4,
      },
      {
        id: 10,
        source: testPhoto5,
      },
    ],
  },
  {
    projectId: 3,
    photos: [
      {
        id: 11,
        source: testPhoto1,
      },
      {
        id: 12,
        source: testPhoto2,
      },
      {
        id: 13,
        source: testPhoto3,
      },
      {
        id: 14,
        source: testPhoto4,
      },
      {
        id: 15,
        source: testPhoto5,
      },
    ],
  },
  {
    projectId: 4,
    photos: [
      {
        id: 16,
        source: testPhoto1,
      },
      {
        id: 17,
        source: testPhoto2,
      },
      {
        id: 18,
        source: testPhoto3,
      },
      {
        id: 19,
        source: testPhoto4,
      },
      {
        id: 20,
        source: testPhoto5,
      },
    ],
  },
  {
    projectId: 5,
    photos: [
      {
        id: 21,
        source: testPhoto1,
      },
      {
        id: 22,
        source: testPhoto2,
      },
      {
        id: 23,
        source: testPhoto3,
      },
      {
        id: 24,
        source: testPhoto4,
      },
      {
        id: 25,
        source: testPhoto5,
      },
    ],
  },
  {
    projectId: 6,
    photos: [
      {
        id: 26,
        source: testPhoto1,
      },
      {
        id: 27,
        source: testPhoto2,
      },
      {
        id: 28,
        source: testPhoto3,
      },
      {
        id: 29,
        source: testPhoto4,
      },
      {
        id: 30,
        source: testPhoto5,
      },
    ],
  },
];
