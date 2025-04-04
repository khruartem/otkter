import {
  Social,
  TEmployees,
  TNavLinks,
  TProject,
  TProjectTabMode,
  TService,
  TServicesTabMode,
  TTeamTabMode,
} from "./types";
import { TProjectInfo } from "../features/projectsInfo/projectsInfoSlice";
import {
  TProjectControls,
  TServiceControls,
} from "../features/controls/controlsSlice";
import { TProjectCategories } from "../features/categories/categoriesSlice";
import { TProjectPhotos, TServicePhotos } from "../features/photos/photosSlice";
import { TServiceInfo } from "../features/projectsInfo/infosSlice";
import { TTeamSocials } from "../features/socials/socialsSlice";
import { contactFunction } from "./contactFunction";

// import playSVG from "../../public/projects_play.svg";
// import masterClassSVG from "../../public/projects_master-class.svg";
// import contestSVG from "../../public/project_contest.svg";
// import shortFilmSVG from "../../public/projets_short-film.svg";
import uniqueChronicle from "../assets/project_unique_chronicle.png";
import friendship from "../assets/project_friendship.png";
import openPlay from "../assets/project_open_play.png";
import mastership from "../assets/project_mastership.png";
import nikolayFilm from "../assets/project_nikolay_film.png";
import twoInWorld from "../assets/project_nikolay_play.png";
import amplitude from "../assets/projects/ampletuda.png";

import yakovlev from "../assets/yakovlev.png";
import LA from "../assets/LA.png";
import sinelnikova from "../assets/sinelnikova.png";
import rudnitskiy from "../assets/rudnitskiy.png";
import torzhkova from "../assets/torzhkova.png";
import murzukova from "../assets/murzukova.png";
import agafonov from "../assets/agafonov.png";
import sokolovskiy from "../assets/sokolovskiy.png";
import aspek from "../assets/aspek.png";
import ivanova from "../assets/ivanova.png";
import avramenko from "../assets/avramenko.png";
import maltcev from "../assets/maltcev.png";
import bondareva from "../assets/bondareva.png";
import knysh from "../assets/knysh.png";
import strelnikov from "../assets/strelnikov.png";
import maslovskaya from "../assets/maslovskaya.png";
import karaya from "../assets/karaya.png";
import hvostikova from "../assets/hvostikova.png";
import tensik from "../assets/tensik.png";
import larina from "../assets/team/larina.png";
import unknown from "../assets/team/unknown.png";

import testPhoto1 from "../assets/testPhoto1.png";
import testPhoto2 from "../assets/testPhoto2.png";
import testPhoto3 from "../assets/testPhoto3.png";
import testPhoto4 from "../assets/testPhoto4.png";
import testPhoto5 from "../assets/testPhoto5.png";
import chronicsPhoto1 from "../assets/projects-photo/chronics/chronics_1.png";
import chronicsPhoto2 from "../assets/projects-photo/chronics/chronics_2.png";
import chronicsPhoto3 from "../assets/projects-photo/chronics/chronics_3.png";
import chronicsPhoto4 from "../assets/projects-photo/chronics/chronics_4.png";
import chronicsPhoto5 from "../assets/projects-photo/chronics/chronics_5.png";
import chronicsPhoto6 from "../assets/projects-photo/chronics/chronics_6.png";
import eseninPhoto1 from "../assets/projects-photo/esenin/esenin_1.png";
import eseninPhoto2 from "../assets/projects-photo/esenin/esenin_2.png";
import eseninPhoto3 from "../assets/projects-photo/esenin/esenin_3.png";
import eseninPhoto4 from "../assets/projects-photo/esenin/esenin_4.png";
import eseninPhoto5 from "../assets/projects-photo/esenin/esenin_5.png";
import eseninPhoto6 from "../assets/projects-photo/esenin/esenin_6.png";
import eseninPhoto7 from "../assets/projects-photo/esenin/esenin_7.png";

import OT from "../assets/services_img_ot.png";
import events from "../assets/services_img_events.png";
import design from "../assets/services_img_design.png";
import content from "../assets/services_img_content.png";
import masterClasses from "../assets/services_img_master_classes.png";
import lamp from "../assets/services_img_lamp.png";
import smm from "../assets/services_img_smm.png";

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

export const mainSocials: Social[] = [
  {
    id: 1,
    url: "https://t.me/otkterr",
    type: "telegram",
  },
  {
    id: 2,
    url: "https://vk.com/otkter",
    type: "vk",
  },
];

export const teamsSocials: TTeamSocials[] = [
  {
    teamType: "admins",
    teamSocials: [
      {
        employeeId: 1,
        socials: [
          {
            id: 1,
            url: "https://t.me/yakovlevsergeyy1",
            type: "telegram",
          },
          {
            id: 2,
            url: "https://vk.com/seryoga_yakovlev",
            type: "vk",
          },
        ],
      },
      {
        employeeId: 2,
        socials: [
          {
            id: 3,
            url: "https://t.me/otkmore",
            type: "telegram",
          },
          {
            id: 4,
            url: "https://vk.com/id58249512",
            type: "vk",
          },
        ],
      },
      {
        employeeId: 3,
        socials: [
          {
            id: 5,
            url: "https://t.me/Chronostheone",
            type: "telegram",
          },
          {
            id: 6,
            url: "https://vk.com/kronosas",
            type: "vk",
          },
        ],
      },
      {
        employeeId: 4,
        socials: [
          {
            id: 7,
            url: "https://t.me/si_alyo",
            type: "telegram",
          },
          {
            id: 8,
            url: "https://vk.com/blessedbyamisteryoflove",
            type: "vk",
          },
        ],
      },
      {
        employeeId: 5,
        socials: [
          {
            id: 9,
            url: "#",
            type: "telegram",
          },
          {
            id: 10,
            url: "#",
            type: "vk",
          },
        ],
      },
    ],
  },
];

export const projects: TProject[] = [
  {
    projectId: 1,
    title: "«Показ уникальной хроники. 1945»",
    image: uniqueChronicle,
    shortText:
      "В центре вечера — восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне.",
    type: "play",
    isMain: true,
    isActive: true,
  },
  {
    projectId: 2,
    title: "«Нет уз святее товарищества»",
    image: friendship,
    shortText:
      "Цель проведения конкурса — популяризация патриотизма средствами театрального искусства и сохранение социокультурных, духовно-нравственных, патриотических традиций.",
    type: "contest",
    isMain: false,
    isActive: false,
  },
  {
    projectId: 3,
    title: "«Открытая пьеса»",
    image: openPlay,
    shortText:
      "Конкурс пьес молодых драматургов направлен на выявление и поддержку современных авторов, детских театральных студий, самодеятельных и профессиональных театров.",
    type: "contest",
    isMain: false,
    isActive: false,
  },
  {
    projectId: 4,
    title: "«Ораторское мастерство как инструмент коммуникации»",
    image: mastership,
    shortText:
      "Мастер-классы в рамках дополнительной общеобразовательной программы «Психология межличностного общения. Основы коммуникации» для ветеранов СВО.",
    type: "master-class",
    isMain: false,
    isActive: true,
  },
  {
    projectId: 5,
    title: "«О Николае II»",
    image: nikolayFilm,
    shortText:
      "Документальный короткометражный фильм о Николае ll. Проект находится в стадии разработки и написания сценария. Уже собрана полноценная съёмочная группа. Проект нуждается в финансировании.",
    type: "short-film",
    isMain: true,
    isActive: true,
  },
  {
    projectId: 6,
    title: "«Двое во всем мире»",
    image: twoInWorld,
    shortText:
      "Героям суждено понять, что любовь - это великая сила, не знающая времени и расстояний, но требующая смелости.",
    type: "play",
    isMain: true,
    isActive: true,
  },
  {
    projectId: 7,
    title: "Поэтический спектакль «Есенин. Жизнь в стихах»",
    image: twoInWorld,
    shortText:
      "В исполнении артистов прозвучат стихи Сергея Есенина, а песни сольются с партией фортепиано, повествуя о мыслях, метаниях и надеждах навеки молодого, но мудрого душой поэта.",
    type: "play",
    isMain: true,
    isActive: true,
  },
  {
    projectId: 8,
    title: "«Случительная амплитуда»",
    image: amplitude,
    shortText:
      "Спектакль-перформанс по поэтическому сборнику Анастасии Бондаревой.  В центре вечера - поэзия, переплетенная с человеческим миром и отраженная голосами артистов.",
    type: "play",
    isMain: true,
    isActive: true,
  },
];

export const projectInfos: TProjectInfo[] = [
  {
    projectId: 1,
    text: "В центре вечера - восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне. Серьёзные и важные темы дискуссии воссоединятся с песнями военных лет и стихами, посвящёнными войне.",
    eventDetails: [
      {
        type: "organizers",
        label: "Организатор",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "partners",
        label: "Партнеры",
        value:
          "ГБУ культуры г. Москвы «Объединение культурных центров Центрального административного округа»",
      },
      {
        type: "address",
        label: "Адрес",
        value: "г. Москва, Шмитовский проезд, 2",
      },
      {
        type: "date",
        label: "Дата и время",
        value: "Апрель 19:00",
      },
      {
        type: "price",
        label: "Цена",
        value: "Вход свободный",
      },
    ],
    employees: {
      artists: [
        {
          name: "В ролях",
          employees: [
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
            {
              name: "Дарья Торжкова",
              occupation: "Журналист наших дней",
              photo: torzhkova,
            },
          ],
        },
      ],
      administrators: {
        name: "Руководители",
        employees: [
          {
            name: "Сергей Яковлев",
            occupation: "Режиссер-постановщик",
            photo: yakovlev,
          },
          {
            name: "Алена Синельникова",
            occupation: "Продюсер",
            photo: sinelnikova,
          },
        ],
      },
    },
  },
  {
    projectId: 2,
    text: "Цель проведения конкурса - популяризация патриотизма средствами театрального искусства и сохранение социокультурных, духовно-нравственных, патриотических традиций российского народа в контексте исторических событий, сохранение исторической памяти, патриотических ценностей, прославление подвигов участников СВО.",
    eventDetails: [
      {
        type: "organizers",
        label: "Организатор",
        value:
          "Федеральное государственное автономное образовательное учреждение высшего образования «Государственный университет просвещения»",
      },
      {
        type: "partners",
        label: "Партнеры",
        value: [
          "Министерство просвещения Российской Федерации",
          "Государственный фонд поддержки участников СВО «Защитники Отечества»",
          "Творческое объединение «Открытая Территория»",
        ],
      },
      {
        type: "address",
        label: "Адрес",
        value: "г. Москва, ул. Радио, 10А, стр. 1",
      },
      {
        type: "date",
        label: "Дата проведения очного этапа",
        value: "-",
      },
      {
        type: "price",
        label: "Цена",
        value: "Вход свободный",
      },
    ],
  },
  {
    projectId: 3,
    text: "Конкурс пьес молодых драматургов направлен на выявление и поддержку современных авторов, детских театральных студий, самодеятельных и профессиональных театров.",
    eventDetails: [
      {
        type: "organizers",
        label: "Организатор",
        value:
          "ГБУ культуры г. Москвы «Объединение культурных центров Южного административного округа»",
      },
      {
        type: "partners",
        label: "Партнеры",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "address",
        label: "Адрес",
        value: "г. Москва, ул. Судостроительная, д. 31, к 1",
      },
      {
        type: "date",
        label: "Дата проведения очного питчинга",
        value: "1 декабря 2024",
      },
      {
        type: "price",
        label: "Цена участия",
        value: "3000 ₽",
      },
    ],
  },
  {
    projectId: 4,
    text: "В сотрудничестве с Центром военно-патриотического воспитания «Вершина» Людмила Яковлева проводит мастер-классы по теме «Ораторское мастерство как инструмент коммуникации» в рамках программы переобучения, переподготовки и повышения квалификации обучающихся из числа участников СВО.",
    eventDetails: [
      {
        type: "organizers",
        label: "Организаторы",
        value: [
          "ФГАОУ ВО «Государственный университет просвещения»",
          "Центр военно-патриотического воспитания «Вершина»",
        ],
      },
      {
        type: "partners",
        label: "Партнеры",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "address",
        label: "Адрес",
        value: "г. Москва, ул. Радио, 10А, стр. 1",
      },
      {
        type: "date",
        label: "Дата",
        value: "Каждую третью субботу месяца",
      },
    ],
  },
  {
    projectId: 5,
    text: "Документальный короткометражный фильм о Николае ll. Проект находится в стадии разработки и написания сценария. Уже собрана полноценная съёмочная группа. Проект нуждается в финансировании.",
    eventDetails: [
      {
        type: "organizers",
        label: "Организатор",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "partners",
        label: "Партнеры",
        value: "Музей памяти семьи Императора Николая ll, усадьба «Белая Дача»",
      },
      {
        type: "date",
        label: "Дата премьеры",
        value: "Весна 2025",
      },
    ],
    employees: {
      administrators: {
        name: "Руководители",
        employees: [
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
  },
  {
    projectId: 6,
    text: "Героям суждено понять, что любовь - это великая сила, не знающая времени и расстояний, но требующая смелости. Спектакль-загадка о том, чему можно научиться у истории, как сложное становится простым и наоборот. По оригинальной пьесе Ольги Масловской.",
    eventDetails: [
      {
        type: "organizers",
        label: "Организатор",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "partners",
        label: "Партнеры",
        value:
          "ГБУ культуры г. Москвы «Объединение культурных центров Центрального административного округа»",
      },
      {
        type: "address",
        label: "Адрес",
        value: "г. Москва, Шмитовский проезд, 2",
      },
      {
        type: "date",
        label: "Дата",
        value: "Премьера летом 2025",
      },
    ],
    employees: {
      artists: [
        {
          name: "В ролях",
          employees: [
            {
              name: "Леонид Стрельников",
              occupation: "Актер",
              photo: strelnikov,
            },
            {
              name: "Марат Рудницкий",
              occupation: "Актер",
              photo: rudnitskiy,
            },
            {
              name: "Дарья Торжкова",
              occupation: "Актер",
              photo: torzhkova,
            },
            {
              name: "Анастасия Мурзюкова",
              occupation: "Актер",
              photo: murzukova,
            },
          ],
        },
      ],
      administrators: {
        name: "Руководители",
        employees: [
          {
            name: "Сергей Яковлев",
            occupation: "Режиссер-постановщик",
            photo: yakovlev,
          },
          {
            name: "Людмила Яковлева",
            occupation: "Режиссер-постановщик",
            photo: LA,
          },
          {
            name: "Ольга Масловская",
            occupation: "Драматург",
            photo: maslovskaya,
          },
          {
            name: "Алёна Синельникова",
            occupation: "Продюсер",
            photo: sinelnikova,
          },
        ],
      },
    },
  },
  {
    projectId: 7,
    text: "В 2025 году исполнится 130 лет со дня рождения Сергея Есенина, а также 100 лет с момента его трагической кончины. Значимость творчества великого русского поэта неоспорима, и даже век спустя его стихи не теряют актуальности, продолжают вдохновлять и трогать сердца людей. Творческое объединение «Открытая Территория» приглашает всех жителей и гостей Москвы на литературно-музыкальную композицию «Есенин. Жизнь в стихах». В исполнении артистов прозвучат стихи Сергея Есенина, а песни сольются с партией фортепиано, повествуя о мыслях, метаниях и надеждах навеки молодого, но мудрого душой поэта. Этот поэтический спектакль не про смерть, а про жизнь и загадочную русскую душу, отражённую в стихах любимого народного поэта.",
    eventDetails: [
      {
        type: "organizers",
        label: "Организатор",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "partners",
        label: "Партнеры",
        value: [
          "Государственный Литературный музей имени В. И. Даля",
          "ГБУ культуры г. Москвы «Объединение культурных центров Центрального административного округа»",
        ],
      },
      {
        type: "address",
        label: "Адрес",
        value: [
          "г. Москва, Зубовский бульвар, стр. 1",
          "г. Москва, Сибирский пр., 2, стр. 5",
        ],
      },
      {
        type: "date",
        label: "Дата",
        value: ["14 апреля 19:00", "28 апреля 19:00"],
      },
      {
        type: "price",
        label: "Цена спектакля с эксурсией",
        value: "2000 руб.",
      },
      {
        type: "price",
        label: "Цена",
        value: "700 руб.",
      },
    ],
    employees: {
      artists: [
        {
          name: "Стихи и песни",
          employees: [
            {
              name: "Дмитрий Мальцев",
              occupation: "Артист театра «Ленком Марка Захарова»",
              photo: maltcev,
            },
            {
              name: "Олег Кныш",
              occupation: "Артист театра «Ленком Марка Захарова»",
              photo: knysh,
            },
          ],
        },
        {
          name: "Фортепиано",
          employees: [
            {
              name: "Елена Ларина",
              occupation: "Артистка хора театра «Ленком Марка Захарова»",
              photo: larina,
            },
          ],
        },
      ],
      administrators: {
        name: "Руководители",
        employees: [
          {
            name: "Сергей Яковлев",
            occupation: "Режиссер-постановщик",
            photo: yakovlev,
          },
        ],
      },
    },
  },
  {
    projectId: 8,
    text: "Спектакль-перформанс по поэтическому сборнику Анастасии Бондаревой. В центре вечера - поэзия, переплетенная с человеческим миром и отраженная голосами артистов. Музыка, сопровождающая постановку, станет моментом уединения с собой и с тишиной города. Странная жизнь носит нас из стороны в сторону, крутит вокруг своей оси, возвращает на место. Мы теряем себя и находим. Поэзия — это то, что между двумя полюсами: тяжёлой потерей и неожиданной находкой, больной разлукой и светлой встречей, серым настоящим и вымышленным сиреневым будущим.",
    eventDetails: [
      {
        type: "organizers",
        label: "Организатор",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "partners",
        label: "Партнеры",
        value: [
          "ГБУ культуры г. Москвы «Объединение культурных центров Центрального административного округа»",
          "Литературная Гостиная Дмитрия Кравченко",
        ],
      },
      {
        type: "address",
        label: "Адрес",
        value: "г. Москва, Шмитовский проезд, 2",
      },
      {
        type: "date",
        label: "Дата и время",
        value: "22 мая 20:00",
      },
      {
        type: "price",
        label: "Цена",
        value: "Шапочный сбор",
      },
    ],
    employees: {
      artists: [
        {
          name: "Стихи",
          employees: [
            {
              name: "Анастасия Бондарева",
              occupation: "Поэт",
              photo: bondareva,
            },
            {
              name: "Леонид Стрельников",
              occupation: "Актер театра у Никитских ворот",
              photo: strelnikov,
            },
            {
              name: "Олег Кныш",
              occupation: "Актер театра «Ленком Марка Захарова»",
              photo: knysh,
            },
          ],
        },
        {
          name: "Поэты",
          employees: [
            {
              name: "Андрей Медведев",
              occupation: "Поэт",
              photo: unknown,
            },
            {
              name: "Кирилл Соколовский",
              occupation: "Поэт",
              photo: sokolovskiy,
            },
            {
              name: "Марат Рудницкий",
              occupation:
                "Актёр, звукорежиссер, инженер телецентра «Останкино»",
              photo: rudnitskiy,
            },
          ],
        },
        {
          name: "Композитор, исполнитель",
          employees: [
            {
              name: "Арина Максимова",
              occupation: "Композитор, исполнитель",
              photo: unknown,
            },
          ],
        },
        {
          name: "Вокал",
          employees: [
            {
              name: "Алексей Кизенков",
              occupation: "Актер театра «Ленком Марка Захарова»",
              photo: unknown,
            },
          ],
        },
      ],
      administrators: {
        name: "Руководители",
        employees: [
          {
            name: "Сергей Яковлев",
            occupation: "Режиссер-постановщик",
            photo: yakovlev,
          },
        ],
      },
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
          onClick: contactFunction,
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
          onClick: contactFunction,
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
          onClick: contactFunction,
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
          onClick: contactFunction,
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
          onClick: contactFunction,
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
    projectId: 7,
    controls: {
      buttons: [
        {
          label: "Купить билет",
          onClick: contactFunction,
        },
      ],
      links: [],
    },
  },
  {
    projectId: 8,
    controls: {
      buttons: [],
      links: [],
    },
  },
];

export const projectCategories: TProjectCategories[] = [
  {
    projectId: 1,
    categories: {
      attention: false,
      categoryList: [
        {
          name: "Спектакль",
          type: "main",
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
          type: "main",
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
          type: "main",
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
          type: "main",
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
          type: "attention",
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
          type: "main",
          id: "play",
        },
      ],
    },
  },
  {
    projectId: 7,
    categories: {
      attention: false,
      categoryList: [
        {
          name: "Спектакль",
          type: "main",
          id: "play",
        },
      ],
    },
  },
  {
    projectId: 8,
    categories: {
      attention: false,
      categoryList: [
        {
          name: "Спектакль",
          type: "main",
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
        source: chronicsPhoto1,
      },
      {
        id: 2,
        source: chronicsPhoto2,
      },
      {
        id: 3,
        source: chronicsPhoto3,
      },
      {
        id: 4,
        source: chronicsPhoto4,
      },
      {
        id: 5,
        source: chronicsPhoto5,
      },
      {
        id: 6,
        source: chronicsPhoto6,
      },
    ],
  },
  {
    projectId: 2,
    photos: [
      {
        id: 7,
        source: testPhoto1,
      },
      {
        id: 8,
        source: testPhoto2,
      },
      {
        id: 9,
        source: testPhoto3,
      },
      {
        id: 10,
        source: testPhoto4,
      },
      {
        id: 11,
        source: testPhoto5,
      },
    ],
  },
  {
    projectId: 3,
    photos: [
      {
        id: 12,
        source: testPhoto1,
      },
      {
        id: 13,
        source: testPhoto2,
      },
      {
        id: 14,
        source: testPhoto3,
      },
      {
        id: 15,
        source: testPhoto4,
      },
      {
        id: 16,
        source: testPhoto5,
      },
    ],
  },
  {
    projectId: 4,
    photos: [
      {
        id: 17,
        source: testPhoto1,
      },
      {
        id: 18,
        source: testPhoto2,
      },
      {
        id: 19,
        source: testPhoto3,
      },
      {
        id: 20,
        source: testPhoto4,
      },
      {
        id: 21,
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
  {
    projectId: 7,
    photos: [
      {
        id: 31,
        source: eseninPhoto1,
      },
      {
        id: 32,
        source: eseninPhoto2,
      },
      {
        id: 33,
        source: eseninPhoto3,
      },
      {
        id: 34,
        source: eseninPhoto4,
      },
      {
        id: 35,
        source: eseninPhoto5,
      },
      {
        id: 36,
        source: eseninPhoto6,
      },
      {
        id: 37,
        source: eseninPhoto7,
      },
    ],
  },
  {
    projectId: 8,
    photos: [
      {
        id: 38,
        source: testPhoto1,
      },
      {
        id: 39,
        source: testPhoto2,
      },
      {
        id: 40,
        source: testPhoto3,
      },
      {
        id: 41,
        source: testPhoto4,
      },
      {
        id: 42,
        source: testPhoto5,
      },
    ],
  },
];

export const serviceTabs: TServicesTabMode[] = [
  "open-sea",
  "events",
  "design",
  "content",
  "master-class",
  "lamp",
  "smm",
];

export const services: TService[] = [
  {
    serviceId: 1,
    title: "Театральная студия «Открытое Море»",
    shortText:
      "Театральная студия «Открытое Море» для детей и подростков дает возможность расширить свои горизонты через театр. Мы не слепо делаем из студийцев профессиональных актеров, а помогаем ребятам понять себя в этом мире. Наши ученики развивают личностные и индивидуальные качества, избавляясь от комплексов и зажимов через методы изучения актерского мастерства. ",
    image: OT,
    type: "open-sea",
  },
  {
    serviceId: 2,
    title: "Организация мероприятий",
    shortText:
      "Организуем и проведем мероприятия любой сложности. Концерты, городские мероприятия, творческие вечера, фестивали, конкурсы, спектакли т. п.",
    image: events,
    type: "events",
  },
  {
    serviceId: 3,
    title: "Студия дизайна «Открытый Глаз»",
    shortText:
      "Берем в работу задачи по графическому дизайну, айдентике, полиграфии, UX/UI и разработке сайтов.",
    image: design,
    type: "design",
  },
  {
    serviceId: 4,
    title: "Контент и производство видеоматериалов",
    shortText:
      "Организация съемки мероприятий, в том числе интервью, подкастов, рилсов, репортажей, бэкстейджей, документальных фильмов, коротких метров или иных съемок. Обеспечивается полный цикл производства, от подготовительного до монтажно-тонировочного периода, и команда профессионалов (режиссер-постановщик, оператор-постановщик, гафер, звукорежиссёр, актеры и т.д.).",
    image: content,
    type: "content",
  },
  {
    serviceId: 5,
    title: "Проведение мастер-классов",
    shortText:
      "Проведем мастер-классы и треннинги по актерскому мастерству, ораторскому искусству.",
    image: masterClasses,
    type: "master-class",
  },
  {
    serviceId: 6,
    title: "Любительский театр «ЛАМП»",
    shortText:
      "Театр «ЛАМП» (Любители, Актеры, Музыканты, Писатели) собирает на сцене разных творческих людей. Здесь не важно, есть ли соответствующее образование или нет. Подойдёт для всех, кто хочет стать частью команды театра в любом проявлении. При театре есть семейные группы для совместного творчества родителей и их детей. ",
    image: lamp,
    type: "lamp",
  },
  {
    serviceId: 7,
    title: "SMM, PR и продвижение",
    shortText:
      "Менеджмент социальных сетей (SMM - создание и управление контентом на платформах социальных медиа) и связи с общественностью (PR - формирование и поддержание положительного имиджа компании через взаимодействие с общественностью и медиа). ",
    image: smm,
    type: "smm",
  },
];

export const serviceControls: TServiceControls[] = [
  {
    serviceId: 1,
    controls: {
      buttons: [
        {
          label: "Записаться",
          onClick: contactFunction,
        },
      ],
      links: [
        {
          label: "Подробнее",
          href: "/otkter/services/1",
          state: { id: 1 },
        },
      ],
    },
  },
  {
    serviceId: 2,
    controls: {
      buttons: [
        {
          label: "Заказать",
          onClick: contactFunction,
        },
      ],
      links: [],
    },
  },
  {
    serviceId: 3,
    controls: {
      buttons: [
        {
          label: "Заказать",
          onClick: contactFunction,
        },
      ],
      links: [],
    },
  },
  {
    serviceId: 4,
    controls: {
      buttons: [
        {
          label: "Заказать",
          onClick: contactFunction,
        },
      ],
      links: [],
    },
  },
  {
    serviceId: 5,
    controls: {
      buttons: [
        {
          label: "Заказать",
          onClick: contactFunction,
        },
      ],
      links: [],
    },
  },
  {
    serviceId: 6,
    controls: {
      buttons: [
        {
          label: "Записаться",
          onClick: contactFunction,
        },
      ],
      links: [
        {
          label: "Подробнее",
          href: "/otkter/services/6",
          state: { id: 6 },
        },
      ],
    },
  },
  {
    serviceId: 7,
    controls: {
      buttons: [
        {
          label: "Заказать",
          onClick: contactFunction,
        },
      ],
      links: [],
    },
  },
];

export const serviceInfos: TServiceInfo[] = [
  {
    serviceId: 1,
    text: "«Открытое море» - студия с огромным багажом опыта в 30 лет, наши спектакли являются многократными победителями и лауреатами множества фестивалей и конкурсов, наши выпускники работают в различных творческих индустриях и являются как известными актерами театра и кино, так и писателями, драматургами, художниками, дизайнерами, кинорежиссерами, операторами и т.д.",
    serviceDetails: [
      {
        type: "address",
        label: "Адрес",
        value: "м. Новокосино, г. Реутов, ул. Юбилейный проспект 38",
      },
      {
        type: "contacts",
        label: "Телефон",
        value: "8 (916) 117-90-92",
      },
      {
        type: "price",
        label: "Цена",
        value: "6500 ₽ (8 занятий в месяц)",
      },
    ],
    employees: {
      administrators: {
        name: "Руководители",
        employees: [
          {
            name: "Сергей Яковлев",
            occupation: "Директор",
            photo: yakovlev,
          },
          {
            name: "Людмила Яковлева",
            occupation: "Худрук и педагог",
            photo: LA,
          },
        ],
      },
    },
  },
  {
    serviceId: 6,
    text: "Театр «ЛАМП» (Любители, Актеры, Музыканты, Писатели) собирает на сцене разных творческих людей. Здесь не важно, есть ли соответствующее образование или нет. Подойдёт для всех, кто хочет стать частью команды театра в любом проявлении. При театре есть семейные группы для совместного творчества родителей и их детей. Ведется набор группы 18+ для занятий актёрским мастерством и постановки спектаклей.",
    serviceDetails: [
      {
        type: "address",
        label: "Адрес",
        value: "г.Москва, Шмитовский проезд, 2",
      },
      {
        type: "contacts",
        label: "Телефон",
        value: "8 (916) 117-90-92",
      },
    ],
    employees: {
      administrators: {
        name: "Руководители",
        employees: [
          {
            name: "Сергей Яковлев",
            occupation: "Директор",
            photo: yakovlev,
          },
          {
            name: "Людмила Яковлева",
            occupation: "Худрук и педагог",
            photo: LA,
          },
        ],
      },
    },
  },
];

export const servicePhotos: TServicePhotos[] = [
  {
    serviceId: 1,
    photos: [
      {
        id: 43,
        source: testPhoto1,
      },
      {
        id: 44,
        source: testPhoto2,
      },
      {
        id: 45,
        source: testPhoto3,
      },
      {
        id: 46,
        source: testPhoto4,
      },
      {
        id: 47,
        source: testPhoto5,
      },
    ],
  },
  {
    serviceId: 6,
    photos: [
      {
        id: 48,
        source: testPhoto1,
      },
      {
        id: 49,
        source: testPhoto2,
      },
      {
        id: 50,
        source: testPhoto3,
      },
      {
        id: 51,
        source: testPhoto4,
      },
      {
        id: 52,
        source: testPhoto5,
      },
    ],
  },
];

export const teamsTabs: TTeamTabMode[] = ["admins", "artists"];

export const teams: TEmployees = {
  administrators: {
    employees: [
      {
        id: 1,
        name: "Сергей Яковлев",
        occupation: "Актер театра «Ленком» Марка Захарова и театра Наций",
        photo: yakovlev,
      },
      {
        id: 2,
        name: "Людмила Яковлева",
        occupation:
          "Режиссер и художественный руководитель театральной студии «Открытое Море»",
        photo: LA,
      },
      {
        id: 3,
        name: "Арсений Аспек",
        occupation: "Графический и UX/UI дизайнер",
        photo: aspek,
      },
      {
        id: 4,
        name: "Алёна Синельникова",
        occupation: "Специалист по SMM и PR-менеджер креативных проектов",
        photo: sinelnikova,
      },
    ],
  },
  artists: [
    {
      employees: [
        {
          name: "Кирилл Соколовский",
          occupation: "Поэт",
          photo: sokolovskiy,
        },
        {
          name: "Екатерина Иванова",
          occupation: "Певица, артистка театра «Ленком Марка Захарова»",
          photo: ivanova,
        },
        {
          name: "Анастасия Авраменко",
          occupation: "Режиссёр, фотограф",
          photo: avramenko,
        },
        {
          name: "Дмитрий Мальцев",
          occupation: "Актёр театра «Ленком Марка Захарова»",
          photo: maltcev,
        },
        {
          name: "Анастасия Бондарева",
          occupation: "Поэт",
          photo: bondareva,
        },
        {
          name: "Марк Агафонов",
          occupation: "Режиссёр, фотограф, видеограф",
          photo: agafonov,
        },
        {
          name: "Олег Кныш",
          occupation: "Актёр театра «Ленком Марка Захарова»",
          photo: knysh,
        },
        {
          name: "Марат Рудницкий",
          occupation: "Актёр, звукорежиссер, инженер телецентра «Останкино»",
          photo: rudnitskiy,
        },
        {
          name: "Леонид Стрельников",
          occupation:
            "Актёр театра у Никитских ворот и театра «Ленком Марка Захарова»",
          photo: strelnikov,
        },
        {
          name: "Ольга Масловская",
          occupation: "Драматург",
          photo: maslovskaya,
        },
        {
          name: "Мария Карая",
          occupation: "Актриса театра «Ленком Марка Захарова»",
          photo: karaya,
        },
        {
          name: "Дарья Торжкова",
          occupation: "Актриса",
          photo: torzhkova,
        },
        {
          name: "Настя Мурзюкова",
          occupation:
            "Актриса, выпускница Московской Духовной Академии, педагог",
          photo: murzukova,
        },
        {
          name: "Юлия Хвостикова",
          occupation: "Актриса",
          photo: hvostikova,
        },
        {
          name: "Елена Тенсик",
          occupation:
            "Журналист, радиоведущая, театральный критик, педагог, арт-терапевт и актриса",
          photo: tensik,
        },
      ],
    },
  ],
};

export const projectsTabs: TProjectTabMode[] = [
  "all",
  "play",
  "contest",
  "master-class",
  "short-film",
];
