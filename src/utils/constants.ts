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

// Обложки проектов
import uniqueChronicle from "../assets/projects/chronicle.png";
import friendship from "../assets/projects/friendship.png";
import openPlay from "../assets/projects/play.png";
import mastership from "../assets/projects/mastership.png";
import nikolayFilm from "../assets/projects/nikolay.png";
import twoInWorld from "../assets/projects/two.png";
import amplitude from "../assets/projects/amplitude.png";
import esenin from "../assets/projects/esenin.png";

// Команда
import yakovlev from "../assets/team/yakovlev.png";
import LA from "../assets/team/LA.png";
import sinelnikova from "../assets/team/sinelnikova.png";
import rudnitskiy from "../assets/team/rudnitskiy.png";
import torzhkova from "../assets/team/torzhkova.png";
import murzukova from "../assets/team/murzukova.png";
import agafonov from "../assets/team/agafonov.png";
import sokolovskiy from "../assets/team/sokolovskiy.png";
import aspek from "../assets/team/aspek.png";
import ivanova from "../assets/team/ivanova.png";
import avramenko from "../assets/team/avramenko.png";
import maltcev from "../assets/team/maltcev.png";
import bondareva from "../assets/team/bondareva.png";
import knysh from "../assets/team/knysh.png";
import strelnikov from "../assets/team/strelnikov.png";
import maslovskaya from "../assets/team/maslovskaya.png";
import karaya from "../assets/team/karaya.png";
import hvostikova from "../assets/team/hvostikova.png";
import tensik from "../assets/team/tensik.png";
import larina from "../assets/team/larina.png";
// import unknown from "../assets/team/unknown.png";
import medvedev from "../assets/team/medvedev.png";
import maksimova from "../assets/team/maksimova.png";
import kizenkov from "../assets/team/kizenkov.png";
import hrustalev from "../assets/team/hrustalev.png";

// Фото ОТ
import openSeaPhoto1 from "../assets/services-photo/open-sea/openSeaPhoto1.png";
import openSeaPhoto2 from "../assets/services-photo/open-sea/openSeaPhoto2.png";
import openSeaPhoto3 from "../assets/services-photo/open-sea/openSeaPhoto3.png";
import openSeaPhoto4 from "../assets/services-photo/open-sea/openSeaPhoto4.png";
import openSeaPhoto5 from "../assets/services-photo/open-sea/openSeaPhoto5.png";

// Фото ЛАМП
import lampPhoto1 from "../assets/services-photo/lamp/lampPhoto1.jpg";
import lampPhoto2 from "../assets/services-photo/lamp/lampPhoto2.jpg";
import lampPhoto3 from "../assets/services-photo/lamp/lampPhoto3.jpg";
import lampPhoto4 from "../assets/services-photo/lamp/lampPhoto4.jpg";
import lampPhoto5 from "../assets/services-photo/lamp/lampPhoto5.jpg";
import lampPhoto6 from "../assets/services-photo/lamp/lampPhoto6.jpg";
import lampPhoto7 from "../assets/services-photo/lamp/lampPhoto7.jpg";
import lampPhoto8 from "../assets/services-photo/lamp/lampPhoto8.jpg";
import lampPhoto9 from "../assets/services-photo/lamp/lampPhoto9.jpg";
import lampPhoto10 from "../assets/services-photo/lamp/lampPhoto10.jpg";

// Фото Хроники
import chronicsPhoto1 from "../assets/projects-photo/chronics/chronics_1.png";
import chronicsPhoto2 from "../assets/projects-photo/chronics/chronics_2.png";
import chronicsPhoto3 from "../assets/projects-photo/chronics/chronics_3.png";
import chronicsPhoto4 from "../assets/projects-photo/chronics/chronics_4.png";
import chronicsPhoto5 from "../assets/projects-photo/chronics/chronics_5.png";
import chronicsPhoto6 from "../assets/projects-photo/chronics/chronics_6.png";

// Фото Есенина
import eseninPhoto1 from "../assets/projects-photo/esenin/esenin_1.png";
import eseninPhoto2 from "../assets/projects-photo/esenin/esenin_2.png";
import eseninPhoto3 from "../assets/projects-photo/esenin/esenin_3.png";
import eseninPhoto4 from "../assets/projects-photo/esenin/esenin_4.png";
import eseninPhoto5 from "../assets/projects-photo/esenin/esenin_5.png";
import eseninPhoto6 from "../assets/projects-photo/esenin/esenin_6.png";
import eseninPhoto7 from "../assets/projects-photo/esenin/esenin_7.png";

// Иконки фото ОТ
import openSeaPhotoIcon1 from "../assets/services-photo/open-sea/icons/openSeaPhoto1.jpg";
import openSeaPhotoIcon2 from "../assets/services-photo/open-sea/icons/openSeaPhoto2.jpg";
import openSeaPhotoIcon3 from "../assets/services-photo/open-sea/icons/openSeaPhoto3.jpg";
import openSeaPhotoIcon4 from "../assets/services-photo/open-sea/icons/openSeaPhoto4.jpg";
import openSeaPhotoIcon5 from "../assets/services-photo/open-sea/icons/openSeaPhoto5.jpg";

// Иконки фото ЛАМП
import lampPhotoIcon1 from "../assets/services-photo/lamp/icons/lampPhoto1.webp";
import lampPhotoIcon2 from "../assets/services-photo/lamp/icons/lampPhoto2.webp";
import lampPhotoIcon3 from "../assets/services-photo/lamp/icons/lampPhoto3.webp";
import lampPhotoIcon4 from "../assets/services-photo/lamp/icons/lampPhoto4.webp";
import lampPhotoIcon5 from "../assets/services-photo/lamp/icons/lampPhoto5.webp";
import lampPhotoIcon6 from "../assets/services-photo/lamp/icons/lampPhoto6.webp";
import lampPhotoIcon7 from "../assets/services-photo/lamp/icons/lampPhoto7.webp";
import lampPhotoIcon8 from "../assets/services-photo/lamp/icons/lampPhoto8.webp";
import lampPhotoIcon9 from "../assets/services-photo/lamp/icons/lampPhoto9.webp";
import lampPhotoIcon10 from "../assets/services-photo/lamp/icons/lampPhoto10.webp";

// Иконки фото Хроники
import chronicsPhotoIcon1 from "../assets/projects-photo/chronics/icons/chronics_1.webp";
import chronicsPhotoIcon2 from "../assets/projects-photo/chronics/icons/chronics_2.webp";
import chronicsPhotoIcon3 from "../assets/projects-photo/chronics/icons/chronics_3.webp";
import chronicsPhotoIcon4 from "../assets/projects-photo/chronics/icons/chronics_4.webp";
import chronicsPhotoIcon5 from "../assets/projects-photo/chronics/icons/chronics_5.webp";
import chronicsPhotoIcon6 from "../assets/projects-photo/chronics/icons/chronics_6.webp";

// Иконки фото Есенина
import eseninPhotoIcon1 from "../assets/projects-photo/esenin/icons/esenin_1.webp";
import eseninPhotoIcon2 from "../assets/projects-photo/esenin/icons/esenin_2.webp";
import eseninPhotoIcon3 from "../assets/projects-photo/esenin/icons/esenin_3.webp";
import eseninPhotoIcon4 from "../assets/projects-photo/esenin/icons/esenin_4.webp";
import eseninPhotoIcon5 from "../assets/projects-photo/esenin/icons/esenin_5.webp";
import eseninPhotoIcon6 from "../assets/projects-photo/esenin/icons/esenin_6.webp";
import eseninPhotoIcon7 from "../assets/projects-photo/esenin/icons/esenin_7.webp";

// Обложки услуг
import OT from "../assets/services/ot.png";
import events from "../assets/services/events.png";
import design from "../assets/services/design.png";
import content from "../assets/services/content.png";
import masterClasses from "../assets/services/master_class.png";
import lamp from "../assets/services/lamp.png";
import smm from "../assets/services/smm.png";

// Функции по проектам
import { joinAmplitude } from "./joinAmplitude";
import { buyTickets } from "./buyTickets";

// Постеры по проектам
import uniqueChroniclePoster from "../assets/projects/posters/chronicle.png";
import eseninPoster from "../assets/projects/posters/esenin.png";
import amplitudePoster from "../assets/projects/posters/amplitude.png";

// Иконки для таб бара по проектам
import uniqueChronicleIcon from "../assets/projects/icons/chronicle.jpg";
import friendshipIcon from "../assets/projects/icons/friendship.jpg";
import openPlayIcon from "../assets/projects/icons/play.jpg";
import mastershipIcon from "../assets/projects/icons/mastership.jpg";
import nikolayFilmIcon from "../assets/projects/icons/nikolay.jpg";
import twoInWorldIcon from "../assets/projects/icons/two.jpg";
import amplitudeIcon from "../assets/projects/icons/amplitude.jpg";
import eseninIcon from "../assets/projects/icons/esenin.jpg";

// Иконки для таб бара по услугам
import OTIcon from "../assets/services/icons/ot.jpg";
import eventsIcon from "../assets/services/icons/events.jpg";
import designIcon from "../assets/services/icons/design.jpg";
import contentIcon from "../assets/services/icons/content.jpg";
import masterClassesIcon from "../assets/services/icons/master_class.jpg";
import lampIcon from "../assets/services/icons/lamp.jpg";
import smmIcon from "../assets/services/icons/smm.jpg";

// Ссылки по проектам
const buyTicketsLinkChronics =
  "https://tickets.mos.ru/widget/visit?eventId=61367&agentId=museum56&date=2025-05-04";
const buyTicketsLinkEsenin = "https://bilet.mos.ru/event/338617257/";

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
            url: "https://t.me/khruartem",
            type: "telegram",
          },
          {
            id: 10,
            url: "https://vk.com/khruartem",
            type: "vk",
          },
        ],
      },
    ],
  },
];

export const projects: TProject[] = [
  {
    id: 1,
    title: "«Показ уникальной хроники. 1945»",
    image: uniqueChronicle,
    shortText:
      "В центре вечера — восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне.",
    type: "play",
    isMain: true,
    isActive: true,
    order: 2,
    icon: uniqueChronicleIcon,
  },
  {
    id: 2,
    title: "«Нет уз святее товарищества»",
    image: friendship,
    shortText:
      "Цель проведения конкурса — популяризация патриотизма средствами театрального искусства и сохранение социокультурных, духовно-нравственных, патриотических традиций.",
    type: "contest",
    isMain: false,
    isActive: false,
    order: 7,
    icon: friendshipIcon,
  },
  {
    id: 3,
    title: "«Открытая пьеса»",
    image: openPlay,
    shortText:
      "Конкурс пьес молодых драматургов направлен на выявление и поддержку современных авторов, детских театральных студий, самодеятельных и профессиональных театров.",
    type: "contest",
    isMain: false,
    isActive: false,
    order: 8,
    icon: openPlayIcon,
  },
  {
    id: 4,
    title: "«Ораторское мастерство как инструмент коммуникации»",
    image: mastership,
    shortText:
      "Мастер-классы в рамках дополнительной общеобразовательной программы «Психология межличностного общения. Основы коммуникации» для ветеранов СВО.",
    type: "master-class",
    isMain: false,
    isActive: true,
    order: 9,
    icon: mastershipIcon,
  },
  {
    id: 5,
    title: "«О Николае II»",
    image: nikolayFilm,
    shortText:
      "Документальный короткометражный фильм о Николае ll. Проект находится в стадии разработки и написания сценария. Уже собрана полноценная съёмочная группа. Проект нуждается в финансировании.",
    type: "short-film",
    isMain: true,
    isActive: true,
    order: 5,
    icon: nikolayFilmIcon,
  },
  {
    id: 6,
    title: "«Двое во всем мире»",
    image: twoInWorld,
    shortText:
      "Героям суждено понять, что любовь - это великая сила, не знающая времени и расстояний, но требующая смелости.",
    type: "play",
    isMain: true,
    isActive: true,
    order: 4,
    icon: twoInWorldIcon,
  },
  {
    id: 7,
    title: "Поэтический спектакль «Есенин. Жизнь в стихах»",
    image: esenin,
    shortText:
      "В исполнении артистов прозвучат стихи Сергея Есенина, а песни сольются с партией фортепиано, повествуя о мыслях, метаниях и надеждах навеки молодого, но мудрого душой поэта.",
    type: "play",
    isMain: true,
    isActive: true,
    order: 1,
    icon: eseninIcon,
  },
  {
    id: 8,
    title: "«Случительная амплитуда»",
    image: amplitude,
    shortText:
      "Спектакль-перформанс по поэтическому сборнику Анастасии Бондаревой.  В центре вечера - поэзия, переплетенная с человеческим миром и отраженная голосами артистов.",
    type: "play",
    isMain: true,
    isActive: true,
    order: 3,
    icon: amplitudeIcon,
  },
];

export const projectInfos: TProjectInfo[] = [
  {
    id: 1,
    text: "В центре вечера - восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне. Серьёзные и важные темы дискуссии воссоединятся с песнями военных лет и стихами, посвящёнными войне.",
    // shortText: "В центре вечера — восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне.",
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
        value: "г. Москва, Сибирский пр., 2, стр. 5",
      },
      {
        type: "date",
        label: "Дата и время",
        value: "4 мая 19:00",
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
    previewImg: "/preview_chronics.png",
    poster: uniqueChroniclePoster,
  },
  {
    id: 2,
    text: "Цель проведения конкурса - популяризация патриотизма средствами театрального искусства и сохранение социокультурных, духовно-нравственных, патриотических традиций российского народа в контексте исторических событий, сохранение исторической памяти, патриотических ценностей, прославление подвигов участников СВО.",
    // shortText: "Цель проведения конкурса — популяризация патриотизма средствами театрального искусства и сохранение социокультурных, духовно-нравственных, патриотических традиций.",
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
    id: 3,
    text: "Конкурс пьес молодых драматургов направлен на выявление и поддержку современных авторов, детских театральных студий, самодеятельных и профессиональных театров.",
    // shortText: "Конкурс пьес молодых драматургов направлен на выявление и поддержку современных авторов, детских театральных студий, самодеятельных и профессиональных театров.",
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
    id: 4,
    text: "В сотрудничестве с Центром военно-патриотического воспитания «Вершина» Людмила Яковлева проводит мастер-классы по теме «Ораторское мастерство как инструмент коммуникации» в рамках программы переобучения, переподготовки и повышения квалификации обучающихся из числа участников СВО.",
    // shortText: "Мастер-классы в рамках дополнительной общеобразовательной программы «Психология межличностного общения. Основы коммуникации» для ветеранов СВО.",
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
    id: 5,
    text: "Документальный короткометражный фильм о Николае ll. Проект находится в стадии разработки и написания сценария. Уже собрана полноценная съёмочная группа. Проект нуждается в финансировании.",
    // shortText: "Документальный короткометражный фильм о Николае ll. Проект находится в стадии разработки и написания сценария. Уже собрана полноценная съёмочная группа. Проект нуждается в финансировании.",
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
        value: "Зима 2025",
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
    previewImg: "/preview_nikolai.png",
  },
  {
    id: 6,
    text: "Героям суждено понять, что любовь - это великая сила, не знающая времени и расстояний, но требующая смелости. Спектакль-загадка о том, чему можно научиться у истории, как сложное становится простым и наоборот. По оригинальной пьесе Ольги Масловской.",
    // shortText: "Героям суждено понять, что любовь - это великая сила, не знающая времени и расстояний, но требующая смелости.",
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
            occupation: "Режиссер",
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
    previewImg: "/preview_two.png",
  },
  {
    id: 7,
    text: "В 2025 году исполнится 130 лет со дня рождения Сергея Есенина. Творческое объединение «Открытая Территория» приглашает зрителей на поэтический спектакль «Есенин. Жизнь в стихах». В исполнении артистов прозвучат стихи, а песни сольются с партией фортепиано. Этот спектакль не про смерть, а про жизнь и загадочную русскую душу, отражённую в стихах Сергея Александровича.",
    // shortText: "В исполнении артистов прозвучат стихи Сергея Есенина, а песни сольются с партией фортепиано, повествуя о мыслях, метаниях и надеждах навеки молодого, но мудрого душой поэта.",
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
        value: "г. Москва, Сибирский пр., 2, стр. 5",
      },
      {
        type: "date",
        label: "Дата",
        value: "28 апреля 19:00",
      },
      {
        type: "price",
        label: "Цена",
        value: "700 руб. ДК «Стимул»",
      },
    ],
    employees: {
      artists: [
        {
          name: "В ролях",
          employees: [
            {
              name: "Дмитрий Мальцев",
              occupation: "Сергей Есенин",
              occupationExtra: "Артист театра «Ленком Марка Захарова»",
              photo: maltcev,
            },
            {
              name: "Олег Кныш",
              occupation: "Я",
              occupationExtra: "Артист театра «Ленком Марка Захарова»",
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
    previewImg: "/preview_esenin.png",
    poster: eseninPoster,
  },
  {
    id: 8,
    text: "Спектакль-перформанс по сборнику Анастасии Бондаревой. Поэзия сплетает человеческие чувства с голосами артистов. Музыкальное сопровождение становится моментом уединения с собой и с тишиной города. Странная жизнь носит нас в разные стороны, заставляя терять себя и вновь находить. Поэзия - это мост между потерей и находкой, разлукой и встречей, серым настоящим и вымышленным сиреневым будущим.",
    // shortText: "Спектакль-перформанс по поэтическому сборнику Анастасии Бондаревой.  В центре вечера - поэзия, переплетенная с человеческим миром и отраженная голосами артистов.",
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
        value: "1 июня 19:00",
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
              photo: medvedev,
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
              photo: maksimova,
            },
          ],
        },
        {
          name: "Вокал",
          employees: [
            {
              name: "Алексей Кизенков",
              occupation: "Актер театра «Ленком Марка Захарова»",
              photo: kizenkov,
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
    poster: amplitudePoster,
    previewImg: "/preview_amplitude.png",
  },
];

export const projectControls: TProjectControls[] = [
  {
    id: 1,
    controls: {
      buttons: [
        {
          label: "Купить билет",
          onClick: () => buyTickets(buyTicketsLinkChronics),
        },
      ],
      links: [],
    },
  },
  {
    id: 2,
    controls: {
      buttons: [
        {
          label: "Подробнее",
          onClick: () => contactFunction("admins", 1, "telegram"),
        },
      ],
      links: [],
    },
  },
  {
    id: 3,
    controls: {
      buttons: [
        {
          label: "Подробнее",
          onClick: () => contactFunction("admins", 1, "telegram"),
        },
      ],
      links: [],
    },
  },
  {
    id: 4,
    controls: null,
  },
  {
    id: 5,
    controls: null,
  },
  {
    id: 6,
    controls: null,
  },
  {
    id: 7,
    controls: {
      buttons: [
        {
          label: "Купить билет",
          onClick: () => buyTickets(buyTicketsLinkEsenin),
        },
      ],
      links: [],
    },
  },
  {
    id: 8,
    controls: {
      buttons: [
        {
          label: "Записаться",
          onClick: joinAmplitude,
        },
      ],
      links: [],
    },
  },
];

export const projectCategories: TProjectCategories[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 1,
    photos: [
      {
        id: 1,
        source: chronicsPhoto1,
        icon: chronicsPhotoIcon1,
      },
      {
        id: 2,
        source: chronicsPhoto2,
        icon: chronicsPhotoIcon2,
      },
      {
        id: 3,
        source: chronicsPhoto3,
        icon: chronicsPhotoIcon3,
      },
      {
        id: 4,
        source: chronicsPhoto4,
        icon: chronicsPhotoIcon4,
      },
      {
        id: 5,
        source: chronicsPhoto5,
        icon: chronicsPhotoIcon5,
      },
      {
        id: 6,
        source: chronicsPhoto6,
        icon: chronicsPhotoIcon6,
      },
    ],
  },
  {
    id: 2,
    photos: [],
  },
  {
    id: 3,
    photos: [],
  },
  {
    id: 4,
    photos: [],
  },
  {
    id: 5,
    photos: [],
  },
  {
    id: 6,
    photos: [],
  },
  {
    id: 7,
    photos: [
      {
        id: 31,
        source: eseninPhoto1,
        icon: eseninPhotoIcon1,
      },
      {
        id: 32,
        source: eseninPhoto2,
        icon: eseninPhotoIcon2,
      },
      {
        id: 33,
        source: eseninPhoto3,
        icon: eseninPhotoIcon3,
      },
      {
        id: 34,
        source: eseninPhoto4,
        icon: eseninPhotoIcon4,
      },
      {
        id: 35,
        source: eseninPhoto5,
        icon: eseninPhotoIcon5,
      },
      {
        id: 36,
        source: eseninPhoto6,
        icon: eseninPhotoIcon6,
      },
      {
        id: 37,
        source: eseninPhoto7,
        icon: eseninPhotoIcon7,
      },
    ],
  },
  {
    id: 8,
    photos: [],
  },
];

export const serviceTabs: TServicesTabMode[] = [
  "open-sea",
  "lamp",
  "events",
  "design",
  "content",
  "master-class",
  "smm",
];

export const services: TService[] = [
  {
    id: 1,
    title: "Театральная студия «Открытое Море»",
    shortText:
      "Театральная студия «Открытое Море» для детей и подростков дает возможность расширить свои горизонты через театр. Мы не слепо делаем из студийцев профессиональных актеров, а помогаем ребятам понять себя в этом мире. Наши ученики развивают личностные и индивидуальные качества, избавляясь от комплексов и зажимов через методы изучения актерского мастерства. ",
    image: OT,
    type: "open-sea",
    isMain: true,
    order: 1,
    icon: OTIcon,
  },
  {
    id: 2,
    title: "Организация мероприятий",
    shortText:
      "Организуем и проведем мероприятия любой сложности. Концерты, городские мероприятия, творческие вечера, фестивали, конкурсы, спектакли т. п.",
    image: events,
    type: "events",
    isMain: false,
    order: 3,
    icon: eventsIcon,
  },
  {
    id: 3,
    title: "Студия дизайна «Открытый Глаз»",
    shortText:
      "Берем в работу задачи по графическому дизайну, айдентике, полиграфии, UX/UI и разработке сайтов.",
    image: design,
    type: "design",
    isMain: false,
    order: 4,
    icon: designIcon,
  },
  {
    id: 4,
    title: "Контент и производство видеоматериалов",
    shortText:
      "Организация съемки мероприятий, в том числе интервью, подкастов, рилсов, репортажей, бэкстейджей, документальных фильмов, коротких метров или иных съемок. Обеспечивается полный цикл производства, от подготовительного до монтажно-тонировочного периода, и команда профессионалов (режиссер-постановщик, оператор-постановщик, гафер, звукорежиссёр, актеры и т.д.).",
    image: content,
    type: "content",
    isMain: false,
    order: 5,
    icon: contentIcon,
  },
  {
    id: 5,
    title: "Проведение мастер-классов",
    shortText:
      "Проведем мастер-классы и треннинги по актерскому мастерству, ораторскому искусству.",
    image: masterClasses,
    type: "master-class",
    isMain: false,
    order: 6,
    icon: masterClassesIcon,
  },
  {
    id: 6,
    title: "Любительский театр «ЛАМП»",
    shortText:
      "Театр «ЛАМП» (Любители, Актеры, Музыканты, Писатели) собирает на сцене разных творческих людей. Здесь не важно, есть ли соответствующее образование или нет. Подойдёт для всех, кто хочет стать частью команды театра в любом проявлении. При театре есть семейные группы для совместного творчества родителей и их детей. ",
    image: lamp,
    type: "lamp",
    isMain: true,
    order: 2,
    icon: lampIcon,
  },
  {
    id: 7,
    title: "SMM, PR и продвижение",
    shortText:
      "Менеджмент социальных сетей (SMM - создание и управление контентом на платформах социальных медиа) и связи с общественностью (PR - формирование и поддержание положительного имиджа компании через взаимодействие с общественностью и медиа).",
    image: smm,
    type: "smm",
    isMain: false,
    order: 7,
    icon: smmIcon,
  },
];

export const serviceControls: TServiceControls[] = [
  {
    id: 1,
    controls: {
      buttons: [
        {
          label: "Записаться",
          onClick: () => contactFunction("admins", 2, "telegram"),
        },
      ],
      links: [
        {
          label: "Подробнее",
          // href: "/otkter/services/1",
          href: "/services/1",
          state: { id: 1 },
        },
      ],
    },
  },
  {
    id: 2,
    controls: {
      buttons: [
        {
          label: "Заказать",
          onClick: () => contactFunction("admins", 1, "telegram"),
        },
      ],
      links: [],
    },
  },
  {
    id: 3,
    controls: {
      buttons: [
        {
          label: "Заказать",
          onClick: () => contactFunction("admins", 1, "telegram"),
        },
      ],
      links: [],
    },
  },
  {
    id: 4,
    controls: {
      buttons: [
        {
          label: "Заказать",
          onClick: () => contactFunction("admins", 1, "telegram"),
        },
      ],
      links: [],
    },
  },
  {
    id: 5,
    controls: {
      buttons: [
        {
          label: "Заказать",
          onClick: () => contactFunction("admins", 1, "telegram"),
        },
      ],
      links: [],
    },
  },
  {
    id: 6,
    controls: {
      buttons: [
        {
          label: "Записаться",
          onClick: () => contactFunction("admins", 2, "telegram"),
        },
      ],
      links: [
        {
          label: "Подробнее",
          // href: "/otkter/services/6",
          href: "/services/6",
          state: { id: 6 },
        },
      ],
    },
  },
  {
    id: 7,
    controls: {
      buttons: [
        {
          label: "Заказать",
          onClick: () => contactFunction("admins", 4, "telegram"),
        },
      ],
      links: [],
    },
  },
];

export const serviceInfos: TServiceInfo[] = [
  {
    id: 1,
    text: "«Открытое море» - студия с огромным багажом опыта в 30 лет, наши спектакли являются многократными победителями и лауреатами множества фестивалей и конкурсов, наши выпускники работают в различных творческих индустриях и являются как известными актерами театра и кино, так и писателями, драматургами, художниками, дизайнерами, кинорежиссерами, операторами и т.д.",
    serviceDetails: [
      {
        type: "address",
        label: "Адрес",
        value: "м. Новокосино, г. Реутов, ул. Юбилейный проспект 38",
      },
      {
        type: "date",
        label: "Занятия",
        value: "пн 18:00 - 20:00 и ср 18:00 - 20:00",
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
    poster: OT,
  },
  {
    id: 2,
    text: "Организуем и проведем мероприятия любой сложности. Концерты, городские мероприятия, творческие вечера, фестивали, конкурсы, спектакли т. п.",
    serviceDetails: [],
    poster: events,
  },
  {
    id: 3,
    text: "Берем в работу задачи по графическому дизайну, айдентике, полиграфии, UX/UI и разработке сайтов.",
    serviceDetails: [],
    poster: design,
  },
  {
    id: 4,
    text: "Организация съемки мероприятий, в том числе интервью, подкастов, рилсов, репортажей, бэкстейджей, документальных фильмов, коротких метров или иных съемок. Обеспечивается полный цикл производства, от подготовительного до монтажно-тонировочного периода, и команда профессионалов (режиссер-постановщик, оператор-постановщик, гафер, звукорежиссёр, актеры и т.д.).",
    serviceDetails: [],
    poster: content,
  },
  {
    id: 5,
    text: "Проведем мастер-классы и треннинги по актерскому мастерству, ораторскому искусству.",
    serviceDetails: [],
    poster: masterClasses,
  },
  {
    id: 6,
    text: "Театр «ЛАМП» (Любители, Актеры, Музыканты, Писатели) собирает на сцене разных творческих людей. Здесь не важно, есть ли соответствующее образование или нет. Подойдёт для всех, кто хочет стать частью команды театра в любом проявлении. При театре есть семейные группы для совместного творчества родителей и их детей. Ведется набор группы 18+ для занятий актёрским мастерством и постановки спектаклей.",
    serviceDetails: [
      {
        type: "address",
        label: "Адрес",
        value: "г.Москва, Шмитовский проезд, 2",
      },
      {
        type: "date",
        label: "Занятия",
        value: "вт 19:00 - 21:00  и сб 14:00 - 16:00",
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
    poster: lamp,
  },
  {
    id: 7,
    text: "Менеджмент социальных сетей (SMM - создание и управление контентом на платформах социальных медиа) и связи с общественностью (PR - формирование и поддержание положительного имиджа компании через взаимодействие с общественностью и медиа).",
    serviceDetails: [],
    poster: smm,
  },
];

export const servicePhotos: TServicePhotos[] = [
  {
    id: 1,
    photos: [
      {
        id: 43,
        source: openSeaPhoto1,
        icon: openSeaPhotoIcon1,
      },
      {
        id: 44,
        source: openSeaPhoto2,
        icon: openSeaPhotoIcon2,
      },
      {
        id: 45,
        source: openSeaPhoto3,
        icon: openSeaPhotoIcon3,
      },
      {
        id: 46,
        source: openSeaPhoto4,
        icon: openSeaPhotoIcon4,
      },
      {
        id: 47,
        source: openSeaPhoto5,
        icon: openSeaPhotoIcon5,
      },
    ],
  },
  {
    id: 6,
    photos: [
      {
        id: 48,
        source: lampPhoto1,
        icon: lampPhotoIcon1,
      },
      {
        id: 49,
        source: lampPhoto2,
        icon: lampPhotoIcon2,
      },
      {
        id: 50,
        source: lampPhoto3,
        icon: lampPhotoIcon3,
      },
      {
        id: 51,
        source: lampPhoto4,
        icon: lampPhotoIcon4,
      },
      {
        id: 52,
        source: lampPhoto5,
        icon: lampPhotoIcon5,
      },
      {
        id: 53,
        source: lampPhoto6,
        icon: lampPhotoIcon6,
      },
      {
        id: 54,
        source: lampPhoto7,
        icon: lampPhotoIcon7,
      },
      {
        id: 55,
        source: lampPhoto8,
        icon: lampPhotoIcon8,
      },
      {
        id: 56,
        source: lampPhoto9,
        icon: lampPhotoIcon9,
      },
      {
        id: 57,
        source: lampPhoto10,
        icon: lampPhotoIcon10,
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
      {
        id: 5,
        name: "Артём Хрусталёв",
        occupation: "Front-end разработчик",
        photo: hrustalev,
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
