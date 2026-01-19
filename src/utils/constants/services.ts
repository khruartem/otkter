import { TService } from "../types/services";

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
    image:
      "https://storage.yandexcloud.net/otkter-bucket/services/main/open_sea.webp",
    poster:
      "https://storage.yandexcloud.net/otkter-bucket/services/posters/open_sea.webp",
    type: "open-sea",
    main: true,
    active: true,
    order: 1,
    icon: "https://storage.yandexcloud.net/otkter-bucket/services/icons/open_sea.webp",
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
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/open_sea/open_sea_1.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/open_sea/icons/open_sea_1.webp",
      },
      {
        id: 25,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/open_sea/open_sea_2.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/open_sea/icons/open_sea_2.webp",
      },
      {
        id: 26,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/open_sea/open_sea_3.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/open_sea/icons/open_sea_3.webp",
      },
      {
        id: 27,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/open_sea/open_sea_4.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/open_sea/icons/open_sea_4.webp",
      },
      {
        id: 28,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/open_sea/open_sea_5.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/open_sea/icons/open_sea_5.webp",
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
    image:
      "https://storage.yandexcloud.net/otkter-bucket/services/main/events.webp",
    poster:
      "https://storage.yandexcloud.net/otkter-bucket/services/posters/events.webp",
    previewImg: "/preview/preview_events.webp",
    type: "events",
    main: false,
    active: true,
    order: 3,
    icon: "https://storage.yandexcloud.net/otkter-bucket/services/icons/events.webp",
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
    image:
      "https://storage.yandexcloud.net/otkter-bucket/services/main/design.webp",
    poster:
      "https://storage.yandexcloud.net/otkter-bucket/services/posters/design.webp",
    previewImg: "/preview/preview_design.webp",
    type: "design",
    main: false,
    active: true,
    order: 4,
    icon: "https://storage.yandexcloud.net/otkter-bucket/services/icons/design.webp",
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
    image:
      "https://storage.yandexcloud.net/otkter-bucket/services/main/content.webp",
    poster:
      "https://storage.yandexcloud.net/otkter-bucket/services/posters/content.webp",
    previewImg: "/preview/preview_content.webp",
    type: "content",
    main: false,
    active: true,
    order: 5,
    icon: "https://storage.yandexcloud.net/otkter-bucket/services/icons/content.webp",
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
    image:
      "https://storage.yandexcloud.net/otkter-bucket/services/main/master_class.webp",
    poster:
      "https://storage.yandexcloud.net/otkter-bucket/services/posters/master_class.webp",
    previewImg: "/preview/preview_mc.webp",
    type: "master-class",
    main: false,
    active: true,
    order: 6,
    icon: "https://storage.yandexcloud.net/otkter-bucket/services/icons/master_class.webp",
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
    image:
      "https://storage.yandexcloud.net/otkter-bucket/services/main/lamp.webp",
    poster:
      "https://storage.yandexcloud.net/otkter-bucket/services/posters/lamp.webp",
    previewImg: "/preview/preview_lamp.webp",
    type: "lamp",
    main: true,
    active: true,
    order: 2,
    icon: "https://storage.yandexcloud.net/otkter-bucket/services/icons/lamp.webp",
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
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/lamp_1.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/icons/lamp_1.webp",
      },
      {
        id: 30,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/lamp_2.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/icons/lamp_2.webp",
      },
      {
        id: 31,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/lamp_3.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/icons/lamp_3.webp",
      },
      {
        id: 32,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/lamp_4.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/icons/lamp_4.webp",
      },
      {
        id: 33,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/lamp_5.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/icons/lamp_5.webp",
      },
      {
        id: 34,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/lamp_6.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/icons/lamp_6.webp",
      },
      {
        id: 35,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/lamp_7.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/icons/lamp_7.webp",
      },
      {
        id: 36,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/lamp_8.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/icons/lamp_8.webp",
      },
      {
        id: 37,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/lamp_9.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/icons/lamp_9.webp",
      },
      {
        id: 38,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/lamp_10.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/services/photos/lamp/icons/lamp_10.webp",
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
    image:
      "https://storage.yandexcloud.net/otkter-bucket/services/main/smm.webp",
    poster:
      "https://storage.yandexcloud.net/otkter-bucket/services/posters/smm.webp",
    previewImg: "/preview/preview_smm.webp",
    type: "smm",
    main: false,
    active: true,
    order: 7,
    icon: "https://storage.yandexcloud.net/otkter-bucket/services/icons/smm.webp",
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
