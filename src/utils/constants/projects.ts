import {
  rudnitskiy,
  LA,
  torzhkova,
  yakovlev,
  sinelnikova,
  agafonov,
  bondareva,
  kizenkov,
  knysh,
  larina,
  maksimova,
  maltcev,
  maslovskaya,
  medvedev,
  murzukova,
  sokolovskiy,
  strelnikov,
} from "./team";

// Ссылки по проектам
const buyTicketsLinkChronics =
  "https://tickets.mos.ru/widget/visit?eventId=61367&agentId=museum56&date=2025-05-04";
export const buyTicketsLinkEsenin =
  "https://russpass.ru/event/692da2016fb0bf1b94a43efe?date=2025-12-25";
export const buyTicketsLinkAmplitude =
  "https://litgost.timepad.ru/event/3308697/";

// Функции по проектам
import { buyTickets } from "../buyTickets";
import { contactFunction } from "../contactFunction";
import { TProject } from "../types/projects";

export const projects: TProject[] = [
  {
    id: 1,
    kind: "projects",
    url: "unique-chronicle",
    title: "«Показ уникальной хроники. 1945»",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/projects/main/chronicle.webp",
    previewImg: "/preview/preview_chronics.webp",
    poster:
      "https://storage.yandexcloud.net/otkter-bucket/projects/posters/chronicle.png",
    shortText:
      "В центре вечера — восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне.",
    text: "В центре вечера - восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне. Серьёзные и важные темы дискуссии воссоединятся с песнями военных лет и стихами, посвящёнными войне.",
    type: "play",
    main: true,
    active: true,
    order: 2,
    icon: "https://storage.yandexcloud.net/otkter-bucket/projects/icons/chronicle.webp",
    details: [
      {
        type: "about",
        icon: "organizers",
        label: "Организатор",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        type: "about",
        icon: "partners",
        label: "Партнеры",
        value:
          "ГБУ культуры г. Москвы «Объединение культурных центров Центрального административного округа»",
      },
      {
        type: "about",
        icon: "address",
        label: "Адрес",
        value: "г. Москва, Сибирский пр., 2, стр. 5",
      },
      {
        type: "about",
        icon: "date",
        label: "Дата и время",
        value: "3 июля",
      },
      {
        type: "about",
        icon: "price",
        label: "Цена",
        value: "700 руб.",
      },
      {
        type: "artists",
        value: rudnitskiy.getEmployee("Журналист времен войны"),
      },
      {
        type: "artists",
        value: LA.getEmployee("Журналист наших дней"),
      },
      {
        type: "artists",
        value: torzhkova.getEmployee("Журналист наших дней"),
      },
      {
        type: "admins",
        value: yakovlev.getEmployee("Режиссер-постановщик"),
      },
      {
        type: "admins",
        value: sinelnikova.getEmployee("Продюсер"),
      },
      {
        type: "media",
        url: "https://severstolici.ru/na-sokole-projdet-neobychnyj-perfomans-v-pamyat-o-velikoj-otechestvennoj-vojne/",
        value: {
          id: 1,
          title:
            "«На Соколе пройдёт необычный перформанс в память о Великой Отечественной Войне»",
          shortText: "Север Столицы",
          image:
            "https://storage.yandexcloud.net/otkter-bucket/media/sever_stolicy.avif",
          active: true,
        },
      },
      {
        type: "media",
        url: "https://otr-online.ru/programmy/specialnyy-proekt-otr-strana-poetov/iosif-brodskii-ya-vas-lyubil-chitaet-leonid-strelnikov-akter-teatra-u-nikitskih-vorot-uchastnik-tvorcheskogo-obedineniya-otkrytaya-territoriya-moskva-93881.html?ysclid=mhvx5wxp3r458815884",
        value: {
          id: 4,
          title: "«Иосиф Бродский “Я вас любил”. Читает Леонид Стрельников»",
          shortText: "ОТР",
          image: "https://storage.yandexcloud.net/otkter-bucket/media/otr.avif",
          active: true,
        },
      },
      {
        type: "media",
        url: "https://otr-online.ru/programmy/specialnyy-proekt-otr-strana-poetov/konstantin-simonov-muzyka-chitaet-marat-rudnickii-zvukoinzhener-akter-tvorcheskogo-obedineniya-otkrytaya-territoriya-moskva-94135.html?ysclid=mhvx8ht2f7201512498",
        value: {
          id: 7,
          title: "«Константин Симонов “Музыка”. Читает Марат Рудницкий»",
          shortText: "ОТР",
          image: "https://storage.yandexcloud.net/otkter-bucket/media/otr.avif",
          active: true,
        },
      },
    ],
    categories: {
      attention: false,
      categoryList: [
        {
          text: "Спектакль",
          icon: "play",
        },
      ],
    },
    controls: [
      {
        label: "Купить билет",
        type: "button",
        onClick: () => buyTickets(buyTicketsLinkChronics),
        url: "#",
      },
    ],
    photos: [
      {
        id: 1,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/chronics/chronics_1.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/chronics/icons/chronics_1.webp",
      },
      {
        id: 2,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/chronics/chronics_2.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/chronics/icons/chronics_2.webp",
      },
      {
        id: 3,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/chronics/chronics_3.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/chronics/icons/chronics_3.webp",
      },
      {
        id: 4,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/chronics/chronics_4.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/chronics/icons/chronics_4.webp",
      },
      {
        id: 5,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/chronics/chronics_5.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/chronics/icons/chronics_5.webp",
      },
      {
        id: 6,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/chronics/chronics_6.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/chronics/icons/chronics_6.webp",
      },
    ],
  },
  {
    id: 2,
    kind: "projects",
    url: "friendship",
    title: "«Нет уз святее товарищества»",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/projects/main/friendship.webp",
    shortText:
      "Цель проведения конкурса — популяризация патриотизма средствами театрального искусства и сохранение социокультурных, духовно-нравственных, патриотических традиций.",
    text: "Цель проведения конкурса - популяризация патриотизма средствами театрального искусства и сохранение социокультурных, духовно-нравственных, патриотических традиций российского народа в контексте исторических событий, сохранение исторической памяти, патриотических ценностей, прославление подвигов участников СВО.",
    type: "contest",
    main: false,
    active: false,
    order: 7,
    icon: "https://storage.yandexcloud.net/otkter-bucket/projects/icons/friendship.webp",
    previewImg: "/preview/preview_friendship.webp",
    details: [
      {
        icon: "organizers",
        type: "about",
        label: "Организатор",
        value:
          "Федеральное государственное автономное образовательное учреждение высшего образования «Государственный университет просвещения»",
      },
      {
        icon: "partners",
        type: "about",
        label: "Партнеры",
        value: [
          "Министерство просвещения Российской Федерации",
          "Государственный фонд поддержки участников СВО «Защитники Отечества»",
          "Творческое объединение «Открытая Территория»",
        ],
      },
      {
        icon: "address",
        type: "about",
        label: "Адрес",
        value: "г. Москва, ул. Радио, 10А, стр. 1",
      },
      {
        icon: "date",
        type: "about",
        label: "Дата проведения очного этапа",
        value: "-",
      },
      {
        icon: "price",
        type: "about",
        label: "Цена",
        value: "Вход свободный",
      },
    ],
    controls: [
      {
        label: "Подробнее",
        type: "button",
        onClick: () => contactFunction(yakovlev, "telegram"),
        url: "#",
      },
    ],
    categories: {
      attention: false,
      categoryList: [
        {
          text: "Конкурс",
          icon: "contest",
        },
      ],
    },
  },
  {
    id: 3,
    kind: "projects",
    url: "open-play",
    title: "«Открытая пьеса»",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/projects/main/play.webp",
    shortText:
      "Конкурс пьес молодых драматургов направлен на выявление и поддержку современных авторов, детских театральных студий, самодеятельных и профессиональных театров.",
    text: "Конкурс пьес молодых драматургов направлен на выявление и поддержку современных авторов, детских театральных студий, самодеятельных и профессиональных театров.",
    type: "contest",
    main: false,
    active: false,
    order: 8,
    icon: "https://storage.yandexcloud.net/otkter-bucket/projects/icons/play.webp",
    previewImg: "/preview/preview_play.webp",
    details: [
      {
        icon: "organizers",
        type: "about",
        label: "Организатор",
        value:
          "ГБУ культуры г. Москвы «Объединение культурных центров Южного административного округа»",
      },
      {
        icon: "partners",
        type: "about",
        label: "Партнеры",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        icon: "address",
        type: "about",
        label: "Адрес",
        value: "г. Москва, ул. Судостроительная, д. 31, к 1",
      },
      {
        icon: "date",
        type: "about",
        label: "Дата проведения очного питчинга",
        value: "1 декабря 2024",
      },
      {
        icon: "price",
        type: "about",
        label: "Цена участия",
        value: "3000 ₽",
      },
    ],
    controls: [
      {
        label: "Подробнее",
        type: "button",
        onClick: () => contactFunction(yakovlev, "telegram"),
        url: "#",
      },
    ],
    categories: {
      attention: false,
      categoryList: [
        {
          text: "Конкурс",
          icon: "contest",
        },
      ],
    },
  },
  {
    id: 4,
    kind: "projects",
    url: "mastership",
    title: "«Ораторское мастерство как инструмент коммуникации»",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/projects/main/mastership.webp",
    shortText:
      "Мастер-классы в рамках дополнительной общеобразовательной программы «Психология межличностного общения. Основы коммуникации» для ветеранов СВО.",
    text: "В сотрудничестве с Центром военно-патриотического воспитания «Вершина» Людмила Яковлева проводит мастер-классы по теме «Ораторское мастерство как инструмент коммуникации» в рамках программы переобучения, переподготовки и повышения квалификации обучающихся из числа участников СВО.",
    type: "master-class",
    main: false,
    active: true,
    order: 9,
    icon: "https://storage.yandexcloud.net/otkter-bucket/projects/icons/mastership.webp",
    details: [
      {
        icon: "organizers",
        type: "about",
        label: "Организаторы",
        value: [
          "ФГАОУ ВО «Государственный университет просвещения»",
          "Центр военно-патриотического воспитания «Вершина»",
        ],
      },
      {
        icon: "partners",
        type: "about",
        label: "Партнеры",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        icon: "address",
        type: "about",
        label: "Адрес",
        value: "г. Москва, ул. Радио, 10А, стр. 1",
      },
      {
        icon: "date",
        type: "about",
        label: "Дата",
        value: "Каждую третью субботу месяца",
      },
    ],
    previewImg: "/preview/preview_mastership.webp",
    categories: {
      attention: false,
      categoryList: [
        {
          text: "Мастер класс",
          icon: "master-class",
        },
      ],
    },
  },
  {
    id: 5,
    kind: "projects",
    url: "nikolay",
    title: "«О Николае II»",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/projects/main/nikolay.webp",
    shortText:
      "Документальный короткометражный фильм о Николае ll. Проект находится в стадии разработки и написания сценария. Уже собрана полноценная съёмочная группа. Проект нуждается в финансировании.",
    text: "Документальный короткометражный фильм о Николае ll. Проект находится в стадии разработки и написания сценария. Уже собрана полноценная съёмочная группа. Проект нуждается в финансировании.",
    type: "short-film",
    main: true,
    active: true,
    order: 5,
    icon: "https://storage.yandexcloud.net/otkter-bucket/projects/icons/nikolay.webp",
    details: [
      {
        icon: "organizers",
        type: "about",
        label: "Организатор",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        icon: "partners",
        type: "about",
        label: "Партнеры",
        value: "Музей памяти семьи Императора Николая ll, усадьба «Белая Дача»",
      },
      {
        icon: "date",
        type: "about",
        label: "Дата премьеры",
        value: "Зима 2025",
      },
      {
        type: "admins",
        value: yakovlev.getEmployee("Режиссер"),
      },
      {
        type: "admins",
        value: agafonov.getEmployee("Второй режиссер"),
      },
      {
        type: "admins",
        value: sinelnikova.getEmployee("Генеральный продюсер"),
      },
    ],
    previewImg: "/preview/preview_nikolai.webp",
    categories: {
      attention: true,
      categoryList: [
        {
          icon: "attention",
        },
        {
          text: "Короткий метр",
          icon: "short-film",
        },
      ],
    },
  },
  {
    id: 6,
    kind: "projects",
    url: "two-in-world",
    title: "«Двое во всем мире»",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/projects/main/two.webp",
    shortText:
      "Героям суждено понять, что любовь - это великая сила, не знающая времени и расстояний, но требующая смелости.",
    text: "Героям суждено понять, что любовь - это великая сила, не знающая времени и расстояний, но требующая смелости. Спектакль-загадка о том, чему можно научиться у истории, как сложное становится простым и наоборот. По оригинальной пьесе Ольги Масловской.",
    type: "play",
    main: true,
    active: true,
    order: 4,
    icon: "https://storage.yandexcloud.net/otkter-bucket/projects/icons/two.webp",
    details: [
      {
        icon: "organizers",
        type: "about",
        label: "Организатор",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        icon: "partners",
        type: "about",
        label: "Партнеры",
        value:
          "ГБУ культуры г. Москвы «Объединение культурных центров Центрального административного округа»",
      },
      {
        icon: "address",
        type: "about",
        label: "Адрес",
        value: "г. Москва, Шмитовский проезд, 2",
      },
      {
        icon: "date",
        type: "about",
        label: "Дата",
        value: "Премьера летом 2025",
      },
      {
        type: "artists",
        value: strelnikov.getEmployee("Актер"),
      },
      {
        type: "artists",
        value: rudnitskiy.getEmployee("Актер"),
      },
      {
        type: "artists",
        value: torzhkova.getEmployee("Актер"),
      },
      {
        type: "artists",
        value: murzukova.getEmployee("Актер"),
      },
      {
        type: "admins",
        value: yakovlev.getEmployee("Режиссер-постановщик"),
      },
      {
        type: "admins",
        value: LA.getEmployee("Режиссер"),
      },
      {
        type: "admins",
        value: maslovskaya.getEmployee("Драматург"),
      },
      {
        type: "admins",
        value: sinelnikova.getEmployee("Продюсер"),
      },
    ],
    previewImg: "/preview/preview_two.webp",
    categories: {
      attention: false,
      categoryList: [
        {
          text: "Спектакль",
          icon: "play",
        },
      ],
    },
  },
  {
    id: 7,
    kind: "projects",
    url: "esenin",
    title: "«Есенин. Жизнь в стихах»",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/projects/main/esenin.webp",
    shortText:
      "В исполнении артистов прозвучат стихи Сергея Есенина, а песни сольются с партией фортепиано, повествуя о мыслях, метаниях и надеждах навеки молодого, но мудрого душой поэта. Посвящено 130-летию со дня рождения Сергея Есенина.",
    text: "В 2025 году исполнится 130 лет со дня рождения Сергея Есенина. Творческое объединение «Открытая Территория» приглашает зрителей на поэтический спектакль «Есенин. Жизнь в стихах». В исполнении артистов прозвучат стихи, а песни сольются с партией фортепиано. Этот спектакль не про смерть, а про жизнь и загадочную русскую душу, отражённую в стихах Сергея Александровича.",
    type: "play",
    main: true,
    active: true,
    order: 1,
    icon: "https://storage.yandexcloud.net/otkter-bucket/projects/icons/esenin.avif",
    details: [
      {
        icon: "organizers",
        type: "about",
        label: "Организатор",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        icon: "partners",
        type: "about",
        label: "Партнеры",
        value: [
          "ГБУ культуры г. Москвы «Объединение культурных центров Центрального административного округа»",
          "Есенин-центр",
          "КЦ «Москвич»",
          "Соворотка",
          "Музей памяти семьи Николая II в усадьбе «Белая Дача»",
        ],
      },
      {
        icon: "address",
        type: "about",
        label: "Адрес",
        value: "д. 1А, мкр. Белая Дача, г. Котельники",
      },
      {
        icon: "date",
        type: "about",
        label: "Дата",
        value: "25 декабря, 19:00",
      },
      {
        icon: "price",
        type: "about",
        label: "Цена",
        value: "2400 р.",
      },
      {
        type: "artists",
        value: maltcev.getEmployee(
          "Сергей Есенин",
          "Артист театра «Ленком Марка Захарова»"
        ),
      },
      {
        type: "artists",
        value: knysh.getEmployee("Я", "Артист театра «Ленком Марка Захарова»"),
      },
      {
        type: "artists",
        value: larina.getEmployee(
          "Фортепиано",
          "Артистка хора театра «Ленком Марка Захарова»"
        ),
      },
      {
        type: "admins",
        value: yakovlev.getEmployee("Режиссер-постановщик"),
      },
      {
        type: "media",
        url: "https://www.mk.ru/culture/2025/08/09/esenin-zhizn-v-stikhakh-na-scene-razgovor-s-poetom.html",
        value: {
          id: 2,
          title: "«“Есенин. Жизнь в стихах”: на сцене разговор с поэтом»",
          shortText: "МК",
          image: "https://storage.yandexcloud.net/otkter-bucket/media/mk.avif",
          active: true,
        },
      },
      {
        type: "media",
        url: "https://vdnh.ru/news/4372/",
        value: {
          id: 5,
          title:
            "«ВДНХ примет участие в фестивале “Любой из нас хоть чуточку Есенин”",
          shortText: "ВДНХ афиша",
          image:
            "https://storage.yandexcloud.net/otkter-bucket/media/vdnh.avif",
          active: true,
        },
      },
      {
        type: "media",
        url: "https://kasimov.ryazan.gov.ru/news/249811/?ysclid=mhvxromis5822024291",
        value: {
          id: 6,
          title: `«Состоялся показ музыкально-поэтического спектакля "Есенин. Жизнь в стихах" режиссера Сергея Яковлева»`,
          shortText: "Касимовский муниципальный округ",
          image:
            "https://storage.yandexcloud.net/otkter-bucket/media/kasimov.avif",
          active: true,
        },
      },
      {
        type: "media",
        url: "https://otr-online.ru/programmy/specialnyy-proekt-otr-strana-poetov/aleksandr-blok-aviator-chitaet-dmitrii-malcev-akter-teatra-lenkom-marka-zaharova-i-tvorcheskogo-obedineniya-otkrytaya-territoriya-moskva-95524.html?ysclid=miwz8ipxzb590732807",
        value: {
          id: 9,
          title: "«Александр Блок “Авиатор”. Читает Дмитрий Мальцев»",
          shortText: "ОТР",
          image: "https://storage.yandexcloud.net/otkter-bucket/media/otr.avif",
          active: true,
        },
      },
    ],
    poster:
      "https://storage.yandexcloud.net/otkter-bucket/projects/posters/esenin.png",
    previewImg: "/preview/preview_esenin.webp",
    controls: [
      {
        label: "Купить билет",
        type: "button",
        onClick: () => buyTickets(buyTicketsLinkEsenin),
        url: "#",
      },
    ],
    categories: {
      attention: false,
      categoryList: [
        {
          text: "Спектакль",
          icon: "play",
        },
      ],
    },
    photos: [
      {
        id: 7,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_1.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/icons/esenin_1.webp",
      },
      {
        id: 8,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_2.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/icons/esenin_2.webp",
      },
      {
        id: 9,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_3.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/icons/esenin_3.webp",
      },
      {
        id: 10,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_4.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/icons/esenin_4.webp",
      },
      {
        id: 11,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_5.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/icons/esenin_5.webp",
      },
      {
        id: 12,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_6.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/icons/esenin_6.webp",
      },
      {
        id: 13,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/esenin_7.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/esenin/icons/esenin_7.webp",
      },
    ],
    showHistory: [
      {
        date: "6 февраля, 19:00",
        premiere: false,
        current: false,
        where: "Москва, ДК «Стимул»",
      },
      {
        date: "6 апреля, 20:00",
        premiere: false,
        current: false,
        where: "Москва, «Литературная гостиная Дмитрия Кравченко»",
      },
      {
        date: "10 апреля, 19:00",
        premiere: false,
        current: false,
        where: "Москва, ГМИРЛИ им. В.И. Даля",
      },
      {
        date: "28 апреля, 19:00",
        premiere: false,
        current: false,
        where: "Москва, ДК «Стимул»",
      },
      {
        date: "10 июля, 19:00",
        premiere: false,
        current: false,
        where: "Москва, Есенин-центр",
      },
      {
        date: "15 сентября, 19:00",
        premiere: false,
        current: false,
        where: "Москва, КЦ «Москвич»",
      },
      {
        date: "30 сентября, 18:00",
        premiere: false,
        current: false,
        where: "Касимов, КЦ «Дом Культуры»",
      },
      {
        date: "20 октября, 19:00",
        premiere: false,
        current: false,
        where: "Москва, Есенин-центр",
      },
      {
        date: "18 ноября, 19:00",
        premiere: false,
        current: false,
        where: "Москва, Есенин-центр",
      },
      {
        date: "25 декабря, 19:00",
        premiere: false,
        current: false,
        where:
          "Москва, Музей памяти семьи Императора Николая II в усадьбе «Белая Дача»",
      },
      {
        date: "26 декабря, 19:00",
        premiere: false,
        current: true,
        where: "Москва, Есенин-центр",
      },
    ],
  },
  {
    id: 8,
    kind: "projects",
    url: "amplitude",
    title: "«Случительная амплитуда»",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/projects/main/amplitude.webp",
    shortText:
      "Спектакль-перформанс по поэтическому сборнику Анастасии Бондаревой.  В центре вечера - поэзия, переплетенная с человеческим миром и отраженная голосами артистов.",
    text: "Спектакль-перформанс по сборнику Анастасии Бондаревой. Поэзия сплетает человеческие чувства с голосами артистов. Музыкальное сопровождение становится моментом уединения с собой и с тишиной города. Странная жизнь носит нас в разные стороны, заставляя терять себя и вновь находить. Поэзия - это мост между потерей и находкой, разлукой и встречей, серым настоящим и вымышленным сиреневым будущим.",
    type: "play",
    main: true,
    active: true,
    order: 3,
    icon: "https://storage.yandexcloud.net/otkter-bucket/projects/icons/amplitude.avif",
    details: [
      {
        icon: "organizers",
        type: "about",
        label: "Организатор",
        value: "Творческое объединение «Открытая Территория»",
      },
      {
        icon: "partners",
        type: "about",
        label: "Партнеры",
        value: [
          "ГБУ культуры г. Москвы «Объединение культурных центров Центрального административного округа»",
          "Литературная Гостиная Дмитрия Кравченко",
        ],
      },
      {
        icon: "address",
        type: "about",
        label: "Адрес",
        value: "г. Москва, Шмитовский проезд, 2",
      },
      {
        icon: "date",
        type: "about",
        label: "Дата и время",
        value: "1 июня 19:00",
      },
      {
        icon: "price",
        type: "about",
        label: "Цена",
        value: "Шапочный сбор",
      },
      {
        type: "artists",
        value: bondareva.getEmployee("Поэт"),
      },
      {
        type: "artists",
        value: strelnikov.getEmployee("Актер театра у Никитских ворот"),
      },
      {
        type: "artists",
        value: knysh.getEmployee("Актёр театра «Ленком Марка Захарова»"),
      },
      {
        type: "artists",
        value: medvedev.getEmployee(),
      },
      {
        type: "artists",
        value: sokolovskiy.getEmployee("Поэт"),
      },
      {
        type: "artists",
        value: rudnitskiy.getEmployee(
          "Актёр, звукорежиссер, инженер телецентра «Останкино»"
        ),
      },
      {
        type: "artists",
        value: maksimova.getEmployee(),
      },
      {
        type: "artists",
        value: kizenkov.getEmployee(),
      },
      {
        type: "admins",
        value: yakovlev.getEmployee("Режиссер-постановщик"),
      },
      {
        type: "media",
        url: "https://otr-online.ru/programmy/specialnyy-proekt-otr-strana-poetov/anton-delvig-skuchno-devushki-vesnoyu-zhit-odnoi-chitaet-anastasiya-murzyukova-uchitel-gbou-izmailovskaya-shkola-uchastnica-tvorcheskogo-obedineniya-otkrytaya-territoriya-moskva-93680.html?ysclid=mhvx3pm69e825624474",
        value: {
          id: 3,
          title:
            "«Антон Дельвиг “Скучно, девушки, весною жить одной…” Читает Анастасия Мурзюкова»",
          shortText: "ОТР",
          image: "https://storage.yandexcloud.net/otkter-bucket/media/otr.avif",
          active: true,
        },
      },
    ],
    poster:
      "https://storage.yandexcloud.net/otkter-bucket/projects/posters/amplitude.png",
    previewImg: "/preview/preview_amplitude.webp",
    controls: [
      {
        label: "Записаться",
        type: "button",
        onClick: () => buyTickets(buyTicketsLinkAmplitude),
        url: "#",
      },
    ],
    categories: {
      attention: false,
      categoryList: [
        {
          text: "Спектакль",
          icon: "play",
        },
      ],
    },
    photos: [
      {
        id: 14,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/amplitude_1.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/icons/amplitude_1.webp",
      },
      {
        id: 15,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/amplitude_2.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/icons/amplitude_2.webp",
      },
      {
        id: 16,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/amplitude_3.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/icons/amplitude_3.webp",
      },
      {
        id: 17,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/amplitude_4.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/icons/amplitude_4.webp",
      },
      {
        id: 18,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/amplitude_5.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/icons/amplitude_5.webp",
      },
      {
        id: 19,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/amplitude_6.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/icons/amplitude_6.webp",
      },
      {
        id: 20,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/amplitude_7.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/icons/amplitude_7.webp",
      },
      {
        id: 21,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/amplitude_8.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/icons/amplitude_8.webp",
      },
      {
        id: 22,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/amplitude_9.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/icons/amplitude_9.webp",
      },
      {
        id: 23,
        source:
          "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/amplitude_10.webp",
        icon: "https://storage.yandexcloud.net/otkter-bucket/projects/photos/amplitude/icons/amplitude_10.webp",
      },
    ],
  },
  {
    id: 9,
    url: "not-found",
    type: "hero",
    kind: "projects",
    title: "ЛАМПовый вечер «По следам»",
    shortText: "6 декабря | 16:00",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/hero/december/lamp.avif",
    icon: "",
    main: false,
    active: true,
  },
  {
    id: 10,
    url: "not-found",
    type: "hero",
    kind: "projects",
    title: "Эфир на «ОТР»",
    shortText: "7 декабря | в течение дня",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/hero/december/maltcev.avif",
    icon: "",
    main: false,
    active: true,
  },
  {
    id: 11,
    url: "not-found",
    type: "hero",
    kind: "projects",
    title: "Эфир на «ОТР»",
    shortText: "17 декабря | в течение дня",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/hero/december/yakovlev.avif",
    icon: "",
    main: false,
    active: true,
  },
  {
    id: 12,
    url: "not-found",
    type: "hero",
    kind: "projects",
    title: "«Есенин. Жизнь в стихах»",
    shortText: "25 декабря | 19:00",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/hero/december/esenin.avif",
    ticket: true,
    icon: "",
    main: false,
    active: true,
  },
  {
    id: 13,
    url: "not-found",
    type: "hero",
    kind: "projects",
    title: "«Есенин. Жизнь в стихах»",
    shortText: "26 декабря | 19:00",
    image:
      "https://storage.yandexcloud.net/otkter-bucket/hero/december/esenin.avif",
    ticket: true,
    icon: "",
    main: false,
    active: true,
  },
];
