import {
  Social,
  TNavLinks,
  TProject,
  TMapping,
  TProjectTabMode,
  TService,
  TServicesTabMode,
} from "./types";
import { TProjectInfo } from "../features/projectsInfo/projectsInfoSlice";
import { TControls } from "../features/controls/controlsSlice";
import { TProjectCategories } from "../features/categories/categoriesSlice";
import { TPhotos } from "../features/photos/photosSlice";
import { TServiceInfo } from "../features/projectsInfo/infosSlice";
import { contactFunction } from "./contactFunction";

// import playSVG from "../../public/projects_play.svg";
// import masterClassSVG from "../../public/projects_master-class.svg";
// import contestSVG from "../../public/project_contest.svg";
// import shortFilmSVG from "../../public/projets_short-film.svg";

// Обложки проектов
import uniqueChronicle from "../assets/projects/chronicle.webp";
import friendship from "../assets/projects/friendship.webp";
import openPlay from "../assets/projects/play.webp";
import mastership from "../assets/projects/mastership.webp";
import nikolayFilm from "../assets/projects/nikolay.webp";
import twoInWorld from "../assets/projects/two.webp";
import amplitude from "../assets/projects/amplitude.webp";
import esenin from "../assets/projects/esenin.webp";

// Команда
// Админы
import { yakovlev } from "./constants/team";
import { LA } from "./constants/team";
import { sinelnikova } from "./constants/team";
// Творцы
import { rudnitskiy } from "./constants/team";
import { torzhkova } from "./constants/team";
import { murzukova } from "./constants/team";
import { agafonov } from "./constants/team";
import { sokolovskiy } from "./constants/team";
import { maltcev } from "./constants/team";
import { bondareva } from "./constants/team";
import { knysh } from "./constants/team";
import { strelnikov } from "./constants/team";
import { maslovskaya } from "./constants/team";
import { larina } from "./constants/team";
import { medvedev } from "./constants/team";
import { maksimova } from "./constants/team";
import { kizenkov } from "./constants/team";

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
import chronicsPhoto1 from "../assets/projects-photo/chronics/chronics_1.webp";
import chronicsPhoto2 from "../assets/projects-photo/chronics/chronics_2.webp";
import chronicsPhoto3 from "../assets/projects-photo/chronics/chronics_3.webp";
import chronicsPhoto4 from "../assets/projects-photo/chronics/chronics_4.webp";
import chronicsPhoto5 from "../assets/projects-photo/chronics/chronics_5.webp";
import chronicsPhoto6 from "../assets/projects-photo/chronics/chronics_6.webp";

// Фото Есенина
import eseninPhoto1 from "../assets/projects-photo/esenin/esenin_1.webp";
import eseninPhoto2 from "../assets/projects-photo/esenin/esenin_2.webp";
import eseninPhoto3 from "../assets/projects-photo/esenin/esenin_3.webp";
import eseninPhoto4 from "../assets/projects-photo/esenin/esenin_4.webp";
import eseninPhoto5 from "../assets/projects-photo/esenin/esenin_5.webp";
import eseninPhoto6 from "../assets/projects-photo/esenin/esenin_6.webp";
import eseninPhoto7 from "../assets/projects-photo/esenin/esenin_7.webp";

// Иконки фото Амплитуды
import amplitudePhoto1 from "../assets/projects-photo/amplitude/amplitude_1.webp";
import amplitudePhoto2 from "../assets/projects-photo/amplitude/amplitude_2.webp";
import amplitudePhoto3 from "../assets/projects-photo/amplitude/amplitude_3.webp";
import amplitudePhoto4 from "../assets/projects-photo/amplitude/amplitude_4.webp";
import amplitudePhoto5 from "../assets/projects-photo/amplitude/amplitude_5.webp";
import amplitudePhoto6 from "../assets/projects-photo/amplitude/amplitude_6.webp";
import amplitudePhoto7 from "../assets/projects-photo/amplitude/amplitude_7.webp";
import amplitudePhoto8 from "../assets/projects-photo/amplitude/amplitude_8.webp";
import amplitudePhoto9 from "../assets/projects-photo/amplitude/amplitude_9.webp";
import amplitudePhoto10 from "../assets/projects-photo/amplitude/amplitude_10.webp";

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

// Иконки фото Амплитуды
import amplitudePhotoIcon1 from "../assets/projects-photo/amplitude/icons/amplitude_1.webp";
import amplitudePhotoIcon2 from "../assets/projects-photo/amplitude/icons/amplitude_2.webp";
import amplitudePhotoIcon3 from "../assets/projects-photo/amplitude/icons/amplitude_3.webp";
import amplitudePhotoIcon4 from "../assets/projects-photo/amplitude/icons/amplitude_4.webp";
import amplitudePhotoIcon5 from "../assets/projects-photo/amplitude/icons/amplitude_5.webp";
import amplitudePhotoIcon6 from "../assets/projects-photo/amplitude/icons/amplitude_6.webp";
import amplitudePhotoIcon7 from "../assets/projects-photo/amplitude/icons/amplitude_7.webp";
import amplitudePhotoIcon8 from "../assets/projects-photo/amplitude/icons/amplitude_8.webp";
import amplitudePhotoIcon9 from "../assets/projects-photo/amplitude/icons/amplitude_9.webp";
import amplitudePhotoIcon10 from "../assets/projects-photo/amplitude/icons/amplitude_10.webp";

// Обложки услуг
import OT from "../assets/services/open_sea.webp";
import events from "../assets/services/events.webp";
import design from "../assets/services/design.webp";
import content from "../assets/services/content.webp";
import masterClasses from "../assets/services/master_class.webp";
import lamp from "../assets/services/lamp.webp";
import smm from "../assets/services/smm.webp";

// Функции по проектам
import { joinAmplitude } from "./joinAmplitude";
import { buyTickets } from "./buyTickets";

// Постеры по проектам
import uniqueChroniclePoster from "../assets/projects/posters/chronicle.png";
import eseninPoster from "../assets/projects/posters/esenin.png";
import amplitudePoster from "../assets/projects/posters/amplitude.png";

// Иконки для таб бара по проектам
import uniqueChronicleIcon from "../assets/projects/icons/chronicle.webp";
import friendshipIcon from "../assets/projects/icons/friendship.webp";
import openPlayIcon from "../assets/projects/icons/play.webp";
import mastershipIcon from "../assets/projects/icons/mastership.webp";
import nikolayFilmIcon from "../assets/projects/icons/nikolay.webp";
import twoInWorldIcon from "../assets/projects/icons/two.webp";
import amplitudeIcon from "../assets/projects/icons/amplitude.webp";
import eseninIcon from "../assets/projects/icons/esenin.webp";

// Иконки для таб бара по услугам
import OTIcon from "../assets/services/icons/open_sea.webp";
import eventsIcon from "../assets/services/icons/events.webp";
import designIcon from "../assets/services/icons/design.webp";
import contentIcon from "../assets/services/icons/content.webp";
import masterClassesIcon from "../assets/services/icons/master_class.webp";
import lampIcon from "../assets/services/icons/lamp.webp";
import smmIcon from "../assets/services/icons/smm.webp";

// Ссылки по проектам
const buyTicketsLinkChronics =
  "https://tickets.mos.ru/widget/visit?eventId=61367&agentId=museum56&date=2025-05-04";
const buyTicketsLinkEsenin =
  "https://bilet.mos.ru/event/348685257/?ysclid=mggoo1slsl352616465";

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

export const projects: TProject[] = [
  {
    id: 1,
    url: "unique-chronicle",
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
    url: "friendship",
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
    url: "open-play",
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
    url: "mastership",
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
    url: "nikolay",
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
    url: "two-in-world",
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
    url: "esenin",
    title: "«Есенин. Жизнь в стихах»",
    image: esenin,
    shortText:
      "В исполнении артистов прозвучат стихи Сергея Есенина, а песни сольются с партией фортепиано, повествуя о мыслях, метаниях и надеждах навеки молодого, но мудрого душой поэта. Посвящено 130-летию со дня рождения Сергея Есенина.",
    type: "play",
    isMain: true,
    isActive: true,
    order: 1,
    icon: eseninIcon,
  },
  {
    id: 8,
    url: "amplitude",
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
        value: "3 июля",
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
            rudnitskiy.getEmployee("Журналист времен войны"),
            LA.getEmployee("Журналист наших дней"),
            torzhkova.getEmployee("Журналист наших дней"),
          ],
        },
      ],
      administrators: {
        name: "Руководители",
        employees: [
          yakovlev.getEmployee("Режиссер-постановщик"),
          sinelnikova.getEmployee("Продюсер"),
        ],
      },
    },
    previewImg: "/preview/preview_chronics.webp",
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
    previewImg: "/preview/preview_friendship.webp",
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
    previewImg: "/preview/preview_play.webp",
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
    previewImg: "/preview/preview_mastership.webp",
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
          yakovlev.getEmployee("Режиссер"),
          agafonov.getEmployee("Второй режиссер"),
          sinelnikova.getEmployee("Генеральный продюсер"),
        ],
      },
    },
    previewImg: "/preview/preview_nikolai.webp",
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
            strelnikov.getEmployee("Актер"),
            rudnitskiy.getEmployee("Актер"),
            torzhkova.getEmployee("Актер"),
            murzukova.getEmployee("Актер"),
          ],
        },
      ],
      administrators: {
        name: "Руководители",
        employees: [
          yakovlev.getEmployee("Режиссер-постановщик"),
          LA.getEmployee("Режиссер"),
          maslovskaya.getEmployee("Драматург"),
          sinelnikova.getEmployee("Продюсер"),
        ],
      },
    },
    previewImg: "/preview/preview_two.webp",
  },
  {
    id: 7,
    text: "В 2025 году исполнится 130 лет со дня рождения Сергея Есенина. Творческое объединение «Открытая Территория» приглашает зрителей на поэтический спектакль «Есенин. Жизнь в стихах». В исполнении артистов прозвучат стихи, а песни сольются с партией фортепиано. Этот спектакль не про смерть, а про жизнь и загадочную русскую душу, отражённую в стихах Сергея Александровича.",
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
          "Есенин-центр",
          "КЦ «Москвич»",
          "Соворотка"
        ],
      },
      {
        type: "address",
        label: "Адрес",
        value: "Москва, пер. Чернышевского, д. 4, стр. 2",
      },
      {
        type: "date",
        label: "Дата",
        value: "20 октября, 19:00",
      },
      {
        type: "price",
        label: "Цена",
        value: "От 400 р.",
      },
    ],
    employees: {
      artists: [
        {
          name: "В ролях",
          employees: [
            maltcev.getEmployee(
              "Сергей Есенин",
              "Артист театра «Ленком Марка Захарова»"
            ),
            knysh.getEmployee("Я", "Артист театра «Ленком Марка Захарова»"),
          ],
        },
        {
          name: "Фортепиано",
          employees: [
            larina.getEmployee("Артистка хора театра «Ленком Марка Захарова»"),
          ],
        },
      ],
      administrators: {
        name: "Руководители",
        employees: [yakovlev.getEmployee("Режиссер-постановщик")],
      },
    },
    poster: eseninPoster,
    previewImg: "/preview/preview_esenin.webp",
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
            bondareva.getEmployee("Поэт"),
            strelnikov.getEmployee("Актер театра у Никитских ворот"),
            knysh.getEmployee("Актёр театра «Ленком Марка Захарова»"),
          ],
        },
        {
          name: "Поэты",
          employees: [
            medvedev.getEmployee("Поэт"),
            sokolovskiy.getEmployee("Поэт"),
            rudnitskiy.getEmployee(
              "Актёр, звукорежиссер, инженер телецентра «Останкино»"
            ),
          ],
        },
        {
          name: "Композитор, исполнитель",
          employees: [maksimova.getEmployee("Композитор, исполнитель")],
        },
        {
          name: "Вокал",
          employees: [
            kizenkov.getEmployee("Актер театра «Ленком Марка Захарова»"),
          ],
        },
      ],
      administrators: {
        name: "Руководители",
        employees: [yakovlev.getEmployee("Режиссер-постановщик")],
      },
    },
    poster: amplitudePoster,
    previewImg: "/preview/preview_amplitude.webp",
  },
];

export const projectControls: TControls[] = [
  {
    id: 1,
    controls: [
      {
        label: "Купить билет",
        type: "button",
        located: "info",
        onClick: () => buyTickets(buyTicketsLinkChronics),
        url: "#",
      },
    ],
  },
  {
    id: 2,
    controls: [
      {
        label: "Подробнее",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 1, "telegram"),
        url: "#",
      },
    ],
  },
  {
    id: 3,
    controls: [
      {
        label: "Подробнее",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 1, "telegram"),
        url: "#",
      },
    ],
  },
  {
    id: 4,
    controls: undefined,
  },
  {
    id: 5,
    controls: undefined,
  },
  {
    id: 6,
    controls: undefined,
  },
  {
    id: 7,
    controls: [
      {
        label: "Купить билет",
        type: "button",
        located: "info",
        onClick: () => buyTickets(buyTicketsLinkEsenin),
        url: "#",
      },
    ],
  },
  {
    id: 8,
    controls: [
      {
        label: "Записаться",
        type: "button",
        located: "info",
        onClick: joinAmplitude,
        url: "#",
      },
    ],
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

export const projectPhotos: TPhotos[] = [
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
        id: 7,
        source: eseninPhoto1,
        icon: eseninPhotoIcon1,
      },
      {
        id: 8,
        source: eseninPhoto2,
        icon: eseninPhotoIcon2,
      },
      {
        id: 9,
        source: eseninPhoto3,
        icon: eseninPhotoIcon3,
      },
      {
        id: 10,
        source: eseninPhoto4,
        icon: eseninPhotoIcon4,
      },
      {
        id: 11,
        source: eseninPhoto5,
        icon: eseninPhotoIcon5,
      },
      {
        id: 12,
        source: eseninPhoto6,
        icon: eseninPhotoIcon6,
      },
      {
        id: 13,
        source: eseninPhoto7,
        icon: eseninPhotoIcon7,
      },
    ],
  },
  {
    id: 8,
    photos: [
      {
        id: 14,
        source: amplitudePhoto1,
        icon: amplitudePhotoIcon1,
      },
      {
        id: 15,
        source: amplitudePhoto2,
        icon: amplitudePhotoIcon2,
      },
      {
        id: 16,
        source: amplitudePhoto3,
        icon: amplitudePhotoIcon3,
      },
      {
        id: 17,
        source: amplitudePhoto4,
        icon: amplitudePhotoIcon4,
      },
      {
        id: 18,
        source: amplitudePhoto5,
        icon: amplitudePhotoIcon5,
      },
      {
        id: 19,
        source: amplitudePhoto6,
        icon: amplitudePhotoIcon6,
      },
      {
        id: 20,
        source: amplitudePhoto7,
        icon: amplitudePhotoIcon7,
      },
      {
        id: 21,
        source: amplitudePhoto8,
        icon: amplitudePhotoIcon8,
      },
      {
        id: 22,
        source: amplitudePhoto9,
        icon: amplitudePhotoIcon9,
      },
      {
        id: 23,
        source: amplitudePhoto10,
        icon: amplitudePhotoIcon10,
      },
    ],
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
    url: "open-sea",
    title: "Театральная студия «Открытое Море»",
    shortText:
      "Театральная студия «Открытое Море» для детей и подростков дает возможность расширить свои горизонты через театр. Мы не слепо делаем из студийцев профессиональных актеров, а помогаем ребятам понять себя в этом мире. Наши ученики развивают личностные и индивидуальные качества, избавляясь от комплексов и зажимов через методы изучения актерского мастерства.",
    image: OT,
    type: "open-sea",
    isMain: true,
    order: 1,
    icon: OTIcon,
  },
  {
    id: 2,
    url: "events",
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
    url: "design",
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
    url: "content",
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
    url: "master-class",
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
    url: "lamp",
    title: "Любительский театр «ЛАМП»",
    shortText:
      "Театр «ЛАМП» (Любители, Актеры, Музыканты, Писатели) собирает на сцене разных творческих людей. Здесь не важно, есть ли соответствующее образование или нет. Подойдёт для всех, кто хочет стать частью команды театра в любом проявлении. При театре есть семейные группы для совместного творчества родителей и их детей.",
    image: lamp,
    type: "lamp",
    isMain: true,
    order: 2,
    icon: lampIcon,
  },
  {
    id: 7,
    url: "smm",
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

export const serviceControls: TControls[] = [
  {
    id: 1,
    controls: [
      {
        label: "Записаться",
        type: "button",
        located: "main",
        onClick: () => contactFunction("admins", 2, "telegram"),
        url: "#",
      },
      {
        label: "Записаться",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 2, "telegram"),
        url: "#",
      },
      {
        label: "Подробнее",
        type: "link",
        located: "main",
        onClick: () => {},
        url: "/services/open-sea/",
        state: { id: 1, url: "open-sea" },
      },
    ],
  },
  {
    id: 2,
    controls: [
      {
        label: "Заказать",
        type: "button",
        located: "main",
        onClick: () => contactFunction("admins", 1, "telegram"),
        url: "#",
      },
      {
        label: "Заказать",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 1, "telegram"),
        url: "#",
      },
    ],
  },
  {
    id: 3,
    controls: [
      {
        label: "Заказать",
        type: "button",
        located: "main",
        onClick: () => contactFunction("admins", 1, "telegram"),
        url: "#",
      },
      {
        label: "Заказать",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 1, "telegram"),
        url: "#",
      },
    ],
  },
  {
    id: 4,
    controls: [
      {
        label: "Заказать",
        type: "button",
        located: "main",
        onClick: () => contactFunction("admins", 1, "telegram"),
        url: "#",
      },
      {
        label: "Заказать",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 1, "telegram"),
        url: "#",
      },
    ],
  },
  {
    id: 5,
    controls: [
      {
        label: "Заказать",
        type: "button",
        located: "main",
        onClick: () => contactFunction("admins", 1, "telegram"),
        url: "#",
      },
      {
        label: "Заказать",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 1, "telegram"),
        url: "#",
      },
    ],
  },
  {
    id: 6,
    controls: [
      {
        label: "Записаться",
        type: "button",
        located: "main",
        onClick: () => contactFunction("admins", 2, "telegram"),
        url: "#",
      },
      {
        label: "Записаться",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 2, "telegram"),
        url: "#",
      },
      {
        label: "Подробнее",
        type: "link",
        located: "main",
        onClick: () => {},
        url: "/services/lamp/",
        state: { id: 6, code: "lamp" },
      },
    ],
  },
  {
    id: 7,
    controls: [
      {
        label: "Заказать",
        type: "button",
        located: "main",
        onClick: () => contactFunction("admins", 4, "telegram"),
        url: "#",
      },
      {
        label: "Заказать",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 4, "telegram"),
        url: "#",
      },
    ],
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
          yakovlev.getEmployee("Директор"),
          LA.getEmployee("Худрук и педагог"),
        ],
      },
    },
    poster: OT,
    previewImg: "/preview/preview_ot.webp",
  },
  {
    id: 2,
    text: "Организуем и проведем мероприятия любой сложности. Концерты, городские мероприятия, творческие вечера, фестивали, конкурсы, спектакли т. п.",
    serviceDetails: [],
    poster: events,
    previewImg: "/preview/preview_events.webp",
  },
  {
    id: 3,
    text: "Берем в работу задачи по графическому дизайну, айдентике, полиграфии, UX/UI и разработке сайтов.",
    serviceDetails: [],
    poster: design,
    previewImg: "/preview/preview_design.webp",
  },
  {
    id: 4,
    text: "Организация съемки мероприятий, в том числе интервью, подкастов, рилсов, репортажей, бэкстейджей, документальных фильмов, коротких метров или иных съемок. Обеспечивается полный цикл производства, от подготовительного до монтажно-тонировочного периода, и команда профессионалов (режиссер-постановщик, оператор-постановщик, гафер, звукорежиссёр, актеры и т.д.).",
    serviceDetails: [],
    poster: content,
    previewImg: "/preview/preview_content.webp",
  },
  {
    id: 5,
    text: "Проведем мастер-классы и треннинги по актерскому мастерству, ораторскому искусству.",
    serviceDetails: [],
    poster: masterClasses,
    previewImg: "/preview/preview_mc.webp",
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
          yakovlev.getEmployee("Директор"),
          LA.getEmployee("Худрук и педагог"),
        ],
      },
    },
    poster: lamp,
    previewImg: "/preview/preview_lamp.webp",
  },
  {
    id: 7,
    text: "Менеджмент социальных сетей (SMM - создание и управление контентом на платформах социальных медиа) и связи с общественностью (PR - формирование и поддержание положительного имиджа компании через взаимодействие с общественностью и медиа).",
    serviceDetails: [],
    poster: smm,
    previewImg: "/preview/preview_smm.webp",
  },
];

export const servicePhotos: TPhotos[] = [
  {
    id: 1,
    photos: [
      {
        id: 24,
        source: openSeaPhoto1,
        icon: openSeaPhotoIcon1,
      },
      {
        id: 25,
        source: openSeaPhoto2,
        icon: openSeaPhotoIcon2,
      },
      {
        id: 26,
        source: openSeaPhoto3,
        icon: openSeaPhotoIcon3,
      },
      {
        id: 27,
        source: openSeaPhoto4,
        icon: openSeaPhotoIcon4,
      },
      {
        id: 28,
        source: openSeaPhoto5,
        icon: openSeaPhotoIcon5,
      },
    ],
  },
  {
    id: 6,
    photos: [
      {
        id: 29,
        source: lampPhoto1,
        icon: lampPhotoIcon1,
      },
      {
        id: 30,
        source: lampPhoto2,
        icon: lampPhotoIcon2,
      },
      {
        id: 31,
        source: lampPhoto3,
        icon: lampPhotoIcon3,
      },
      {
        id: 32,
        source: lampPhoto4,
        icon: lampPhotoIcon4,
      },
      {
        id: 33,
        source: lampPhoto5,
        icon: lampPhotoIcon5,
      },
      {
        id: 34,
        source: lampPhoto6,
        icon: lampPhotoIcon6,
      },
      {
        id: 35,
        source: lampPhoto7,
        icon: lampPhotoIcon7,
      },
      {
        id: 36,
        source: lampPhoto8,
        icon: lampPhotoIcon8,
      },
      {
        id: 37,
        source: lampPhoto9,
        icon: lampPhotoIcon9,
      },
      {
        id: 38,
        source: lampPhoto10,
        icon: lampPhotoIcon10,
      },
    ],
  },
];

export const projectsTabs: TProjectTabMode[] = [
  "all",
  "play",
  "contest",
  "master-class",
  "short-film",
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
