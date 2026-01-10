import { TService } from "../types/services";

// Обложки услуг
import openSeaImage from "../../assets/services/open_sea.webp";
import eventsImage from "../../assets/services/events.webp";
import designImage from "../../assets/services/design.webp";
import contentImage from "../../assets/services/content.webp";
import masterClassesImage from "../../assets/services/master_class.webp";
import lampImage from "../../assets/services/lamp.webp";
import smmImage from "../../assets/services/smm.webp";

// Иконки для таб бара по услугам
import openSeaIcon from "../../assets/services/icons/open_sea.webp";
import eventsIcon from "../../assets/services/icons/events.webp";
import designIcon from "../../assets/services/icons/design.webp";
import contentIcon from "../../assets/services/icons/content.webp";
import masterClassesIcon from "../../assets/services/icons/master_class.webp";
import lampIcon from "../../assets/services/icons/lamp.webp";
import smmIcon from "../../assets/services/icons/smm.webp";

// Фото ОТ
import openSeaPhoto1 from "../../assets/services-photo/open-sea/openSeaPhoto1.png";
import openSeaPhoto2 from "../../assets/services-photo/open-sea/openSeaPhoto2.png";
import openSeaPhoto3 from "../../assets/services-photo/open-sea/openSeaPhoto3.png";
import openSeaPhoto4 from "../../assets/services-photo/open-sea/openSeaPhoto4.png";
import openSeaPhoto5 from "../../assets/services-photo/open-sea/openSeaPhoto5.png";

// Фото ЛАМП
import lampPhoto1 from "../../assets/services-photo/lamp/lampPhoto1.jpg";
import lampPhoto2 from "../../assets/services-photo/lamp/lampPhoto2.jpg";
import lampPhoto3 from "../../assets/services-photo/lamp/lampPhoto3.jpg";
import lampPhoto4 from "../../assets/services-photo/lamp/lampPhoto4.jpg";
import lampPhoto5 from "../../assets/services-photo/lamp/lampPhoto5.jpg";
import lampPhoto6 from "../../assets/services-photo/lamp/lampPhoto6.jpg";
import lampPhoto7 from "../../assets/services-photo/lamp/lampPhoto7.jpg";
import lampPhoto8 from "../../assets/services-photo/lamp/lampPhoto8.jpg";
import lampPhoto9 from "../../assets/services-photo/lamp/lampPhoto9.jpg";
import lampPhoto10 from "../../assets/services-photo/lamp/lampPhoto10.jpg";

// Иконки фото ОТ
import openSeaPhotoIcon1 from "../../assets/services-photo/open-sea/icons/openSeaPhoto1.jpg";
import openSeaPhotoIcon2 from "../../assets/services-photo/open-sea/icons/openSeaPhoto2.jpg";
import openSeaPhotoIcon3 from "../../assets/services-photo/open-sea/icons/openSeaPhoto3.jpg";
import openSeaPhotoIcon4 from "../../assets/services-photo/open-sea/icons/openSeaPhoto4.jpg";
import openSeaPhotoIcon5 from "../../assets/services-photo/open-sea/icons/openSeaPhoto5.jpg";

// Иконки фото ЛАМП
import lampPhotoIcon1 from "../../assets/services-photo/lamp/icons/lampPhoto1.webp";
import lampPhotoIcon2 from "../../assets/services-photo/lamp/icons/lampPhoto2.webp";
import lampPhotoIcon3 from "../../assets/services-photo/lamp/icons/lampPhoto3.webp";
import lampPhotoIcon4 from "../../assets/services-photo/lamp/icons/lampPhoto4.webp";
import lampPhotoIcon5 from "../../assets/services-photo/lamp/icons/lampPhoto5.webp";
import lampPhotoIcon6 from "../../assets/services-photo/lamp/icons/lampPhoto6.webp";
import lampPhotoIcon7 from "../../assets/services-photo/lamp/icons/lampPhoto7.webp";
import lampPhotoIcon8 from "../../assets/services-photo/lamp/icons/lampPhoto8.webp";
import lampPhotoIcon9 from "../../assets/services-photo/lamp/icons/lampPhoto9.webp";
import lampPhotoIcon10 from "../../assets/services-photo/lamp/icons/lampPhoto10.webp";

// Команда
// Админы
import { yakovlev, sinelnikova, LA } from "./team";

// Связаться
import { contactFunction } from "../contactFunction";

export const services: TService[] = [
  {
    id: 1,
    kind: "services",
    url: "open-sea",
    title: "Театральная студия «Открытое Море»",
    shortText:
      "Театральная студия «Открытое Море» для детей и подростков дает возможность расширить свои горизонты через театр. Мы не слепо делаем из студийцев профессиональных актеров, а помогаем ребятам понять себя в этом мире. Наши ученики развивают личностные и индивидуальные качества, избавляясь от комплексов и зажимов через методы изучения актерского мастерства.",
    image: openSeaImage,
    poster: openSeaImage,
    type: "open-sea",
    main: true,
    active: true,
    order: 1,
    icon: openSeaIcon,
    controls: [
      {
        label: "Записаться",
        type: "button",
        onClick: () => contactFunction(LA, "telegram"),
        url: "#",
      },
      {
        label: "Подробнее",
        type: "link",
        onClick: () => {},
        url: "/services/open-sea/",
        state: { id: 1, url: "open-sea" },
      },
    ],
    details: [
      {
        type: "about",
        icon: "address",
        label: "Адрес",
        value: "м. Новокосино, г. Реутов, ул. Юбилейный проспект 38",
      },
      {
        type: "about",
        icon: "date",
        label: "Занятия",
        value: "пн 18:00 - 20:00 и ср 18:00 - 20:00",
      },
      {
        type: "about",
        icon: "contacts",
        label: "Телефон",
        value: "8 (916) 117-90-92",
      },
      {
        type: "about",
        icon: "price",
        label: "Цена",
        value: "6500 ₽ (8 занятий в месяц)",
      },
      {
        type: "admins",
        value: yakovlev.getEmployee("Директор"),
      },
      {
        type: "admins",
        value: LA.getEmployee("Худрук и педагог"),
      },
    ],
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
    id: 2,
    kind: "services",
    url: "events",
    title: "Организация мероприятий",
    shortText:
      "Организуем и проведем мероприятия любой сложности. Концерты, городские мероприятия, творческие вечера, фестивали, конкурсы, спектакли т. п.",
    image: eventsImage,
    poster: eventsImage,
    previewImg: "/preview/preview_events.webp",
    type: "events",
    main: false,
    active: true,
    order: 3,
    icon: eventsIcon,
    controls: [
      {
        label: "Заказать",
        type: "button",
        onClick: () => contactFunction(yakovlev, "telegram"),
        url: "#",
      },
    ],
  },
  {
    id: 3,
    kind: "services",
    url: "design",
    title: "Студия дизайна «Открытый Глаз»",
    shortText:
      "Берем в работу задачи по графическому дизайну, айдентике, полиграфии, UX/UI и разработке сайтов.",
    image: designImage,
    poster: designImage,
    previewImg: "/preview/preview_design.webp",
    type: "design",
    main: false,
    active: true,
    order: 4,
    icon: designIcon,
    controls: [
      {
        label: "Заказать",
        type: "button",
        onClick: () => contactFunction(yakovlev, "telegram"),
        url: "#",
      },
    ],
  },
  {
    id: 4,
    kind: "services",
    url: "content",
    title: "Контент и производство видеоматериалов",
    shortText:
      "Организация съемки мероприятий, в том числе интервью, подкастов, рилсов, репортажей, бэкстейджей, документальных фильмов, коротких метров или иных съемок. Обеспечивается полный цикл производства, от подготовительного до монтажно-тонировочного периода, и команда профессионалов (режиссер-постановщик, оператор-постановщик, гафер, звукорежиссёр, актеры и т.д.).",
    image: contentImage,
    poster: contentImage,
    previewImg: "/preview/preview_content.webp",
    type: "content",
    main: false,
    active: true,
    order: 5,
    icon: contentIcon,
    controls: [
      {
        label: "Заказать",
        type: "button",
        onClick: () => contactFunction(yakovlev, "telegram"),
        url: "#",
      },
    ],
  },
  {
    id: 5,
    kind: "services",
    url: "master-class",
    title: "Проведение мастер-классов",
    shortText:
      "Проведем мастер-классы и треннинги по актерскому мастерству, ораторскому искусству.",
    image: masterClassesImage,
    poster: masterClassesImage,
    previewImg: "/preview/preview_mc.webp",
    type: "master-class",
    main: false,
    active: true,
    order: 6,
    icon: masterClassesIcon,
    controls: [
      {
        label: "Заказать",
        type: "button",
        onClick: () => contactFunction(yakovlev, "telegram"),
        url: "#",
      },
    ],
  },
  {
    id: 6,
    kind: "services",
    url: "lamp",
    title: "Любительский театр «ЛАМП»",
    shortText:
      "Театр «ЛАМП» (Любители, Актеры, Музыканты, Писатели) собирает на сцене разных творческих людей. Здесь не важно, есть ли соответствующее образование или нет. Подойдёт для всех, кто хочет стать частью команды театра в любом проявлении. При театре есть семейные группы для совместного творчества родителей и их детей.",
    image: lampImage,
    poster: lampImage,
    previewImg: "/preview/preview_lamp.webp",
    type: "lamp",
    main: true,
    active: true,
    order: 2,
    icon: lampIcon,
    controls: [
      {
        label: "Записаться",
        type: "button",
        onClick: () => contactFunction(LA, "telegram"),
        url: "#",
      },
      {
        label: "Подробнее",
        type: "link",
        onClick: () => {},
        url: "/services/lamp/",
        state: { id: 6, code: "lamp" },
      },
    ],
    details: [
      {
        type: "about",
        icon: "address",
        label: "Адрес",
        value: "г.Москва, Шмитовский проезд, 2",
      },
      {
        type: "about",
        icon: "date",
        label: "Занятия",
        value: "вт 19:00 - 21:00  и сб 14:00 - 16:00",
      },
      {
        type: "about",
        icon: "contacts",
        label: "Телефон",
        value: "8 (916) 117-90-92",
      },
      {
        type: "admins",
        value: yakovlev.getEmployee("Директор"),
      },
      {
        type: "admins",
        value: LA.getEmployee("Худрук и педагог"),
      },
    ],
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
  {
    id: 7,
    kind: "services",
    url: "smm",
    title: "SMM, PR и продвижение",
    shortText:
      "Менеджмент социальных сетей (SMM - создание и управление контентом на платформах социальных медиа) и связи с общественностью (PR - формирование и поддержание положительного имиджа компании через взаимодействие с общественностью и медиа).",
    image: smmImage,
    poster: smmImage,
    previewImg: "/preview/preview_smm.webp",
    type: "smm",
    main: false,
    active: true,
    order: 7,
    icon: smmIcon,
    controls: [
      {
        label: "Заказать",
        type: "button",
        onClick: () => contactFunction(sinelnikova, "telegram"),
        url: "#",
      },
    ],
  },
];
