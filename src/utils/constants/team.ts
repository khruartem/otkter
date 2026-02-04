import { IEmployee, Employee } from "../model/teamData";
import { contactFunction } from "../contactFunction";
import { TEmployee } from "../types/team";

// Список команды
// Админы
export const yakovlev: IEmployee = new Employee({
  id: 1,
  kind: "team",
  url: "yakovlev",
  title: "Сергей Яковлев",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/yakovlev.avif",
  shortText: "Глава творческого объединения",
  extraText: "Глава творческого объединения",
  text: "Один из основателей «Открытой Территории», главный режиссёр. Директор детско-юношеской театральной студии «Открытое Море». В 2013 закончил ВТУ им. М. С. Щепкина (курс Бэйлиса-Иванова). В труппе театра «Ленком Марка Захарова» с 2015 года, актёр Театра Наций – с 2023. В «Ленкоме»: Голубков – «Бег» и др. В Театре Наций: Вронский – «Каренина. Процесс» В Театре Эстрады: Диего-Маурисьо – «Ложь во спасение».",
  type: "admins",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/yakovlev.avif",
  poster:
    "https://storage.yandexcloud.net/otkter-bucket/team/posters/yafovlev.avif",
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
    {
      id: 12,
      url: "https://www.kinopoisk.ru/name/4025850/",
      type: "kinopoisk",
    },
    {
      id: 13,
      url: "https://casting.filmtoolz.ru/3139792/?ysclid=ml5qvj26ga663124730",
      type: "film-toolz",
    },
  ],
  photos: [
    {
      id: 39,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/yakovlev_1.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/icons/yakovlev_1.avif",
    },
    {
      id: 40,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/yakovlev_2.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/icons/yakovlev_2.avif",
    },
    {
      id: 41,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/yakovlev_3.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/icons/yakovlev_3.avif",
    },
    {
      id: 42,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/yakovlev_4.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/icons/yakovlev_4.avif",
    },
    {
      id: 43,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/yakovlev_5.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/icons/yakovlev_5.avif",
    },
    {
      id: 44,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/yakovlev_6.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/icons/yakovlev_6.avif",
    },
    {
      id: 45,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/yakovlev_7.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/yakovlev/icons/yakovlev_7.avif",
    },
  ],
  controls: [
    {
      label: "Telegram",
      type: "button",
      onClick: () => contactFunction(yakovlev.getEmployee(), "telegram"),
      url: "#",
      icon: "telegram",
    },
    {
      label: "VK",
      type: "button",
      onClick: () => contactFunction(yakovlev.getEmployee(), "vk"),
      url: "#",
      icon: "vk",
    },
    {
      label: "Кинопоиск",
      type: "button",
      onClick: () => contactFunction(yakovlev.getEmployee(), "kinopoisk"),
      url: "#",
      icon: "kinopoisk",
    },
    {
      label: "FilmToolz",
      type: "button",
      onClick: () => contactFunction(yakovlev.getEmployee(), "film-toolz"),
      url: "#",
      icon: "film-toolz",
    },
  ],
  details: [
    {
      type: "media",
      url: "https://otr-online.ru/programmy/specialnyy-proekt-otr-strana-poetov/ivan-bunin-uchan-su-chitaet-sergei-yakovlev-glava-tvorcheskogo-obedineniya-otkrytaya-territoriya-akter-teatra-lenkom-marka-zaharova-i-teatra-nacii-95828.html?ysclid=mj9xfgc0l8935203416",
      value: {
        id: 10,
        title: "«Иван Бунин “Учан-Су”. Читает Сергей Яковлев»",
        shortText: "ОТР",
        image: "https://storage.yandexcloud.net/otkter-bucket/media/otr.avif",
        active: true,
      },
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
  ],
});
export const LA: IEmployee = new Employee({
  id: 2,
  kind: "team",
  url: "LA",
  title: "Людмила Яковлева",
  image: "https://storage.yandexcloud.net/otkter-bucket/team/main/LA.webp",
  shortText: "Художественный руководитель",
  extraText: "Художественный руководитель",
  text: "Одна из основателей «Открытой Территорией». Помимо художественного руководства творческим объединением, руководит детско-юношеской театральной студией «Открытое Море» («КаЛиТка»), которую основала в 1995 году, и театром «ЛАМП». Преподаватель актерского мастерства, автор и ведущая актерско-психологических тренингов. Режиссер театральных постановок, автор рассказов в жанре фантастического реализма.",
  type: "admins",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/LA.avif",
  poster: "https://storage.yandexcloud.net/otkter-bucket/team/posters/LA.avif",
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
  photos: [
    {
      id: 46,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/LA_1.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/icons/LA_1.avif",
    },
    {
      id: 47,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/LA_2.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/icons/LA_2.avif",
    },
    {
      id: 48,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/LA_3.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/icons/LA_3.avif",
    },
    {
      id: 49,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/LA_4.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/icons/LA_4.avif",
    },
    {
      id: 50,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/LA_5.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/icons/LA_5.avif",
    },
    {
      id: 51,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/LA_6.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/icons/LA_6.avif",
    },
    {
      id: 52,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/LA_7.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/LA/icons/LA_7.avif",
    },
  ],
  controls: [
    {
      label: "Telegram",
      type: "button",
      onClick: () => contactFunction(LA.getEmployee(), "telegram"),
      url: "#",
      icon: "telegram",
    },
    {
      label: "VK",
      type: "button",
      onClick: () => contactFunction(LA.getEmployee(), "vk"),
      url: "#",
      icon: "vk",
    },
  ],
});
export const sinelnikova: IEmployee = new Employee({
  id: 3,
  kind: "team",
  url: "sinelnikova",
  title: "Алена Синельникова",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/sinelnikova.webp",
  shortText: "PR-директор",
  extraText: "PR-директор",
  text: "Занимается продвижением как всего объединения, так и отдельных творческих проектов. Выступает продюсером театральных постановок объединения. В 2025 году окончила Финансовый университет при Правительстве по направлению «Реклама и связи с общественностью». В сфере творчества и культуры более 5 лет. Опыт коммуникации и PR включает в себя креативные индустрии, сферу моды и красоты.",
  type: "admins",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/sinelnikova.webp",
  poster:
    "https://storage.yandexcloud.net/otkter-bucket/team/posters/sinelnikova.avif",
  socials: [
    {
      id: 5,
      url: "https://t.me/si_alyo",
      type: "telegram",
    },
    {
      id: 6,
      url: "https://vk.com/blessedbyamisteryoflove",
      type: "vk",
    },
  ],
  photos: [
    {
      id: 53,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/sinelnikova_1.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/icons/sinelnikova_1.avif",
    },
    {
      id: 54,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/sinelnikova_2.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/icons/sinelnikova_2.avif",
    },
    {
      id: 55,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/sinelnikova_3.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/icons/sinelnikova_3.avif",
    },
    {
      id: 56,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/sinelnikova_4.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/icons/sinelnikova_4.avif",
    },
    {
      id: 57,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/sinelnikova_5.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/icons/sinelnikova_5.avif",
    },
    {
      id: 58,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/sinelnikova_6.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/icons/sinelnikova_6.avif",
    },
    {
      id: 59,
      source:
        "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/sinelnikova_7.avif",
      icon: "https://storage.yandexcloud.net/otkter-bucket/team/photos/sinelnikova/icons/sinelnikova_7.avif",
    },
  ],
  controls: [
    {
      label: "Telegram",
      type: "button",
      onClick: () => contactFunction(sinelnikova.getEmployee(), "telegram"),
      url: "#",
      icon: "telegram",
    },
    {
      label: "VK",
      type: "button",
      onClick: () => contactFunction(sinelnikova.getEmployee(), "vk"),
      url: "#",
      icon: "vk",
    },
  ],
  details: [
    {
      type: "media",
      url: "https://otr-online.ru/programmy/specialnyy-proekt-otr-strana-poetov/aleksandr-blok-est-igra-ostorozhno-voiti-chitaet-alena-sinelnikova-prodyuser-tvorcheskogo-obedineniya-otkrytaya-territoriya-moskva-94262.html?ysclid=mhar8iok8y582810998",
      value: {
        id: 8,
        title:
          "«Александр Блок “Есть игра: осторожно войти”. Читает Алена Синельникова»",
        shortText: "ОТР",
        image: "https://storage.yandexcloud.net/otkter-bucket/media/otr.avif",
        active: true,
      },
    },
  ],
});
export const aspek: IEmployee = new Employee({
  id: 4,
  kind: "team",
  url: "aspek",
  title: "Арсений Аспек",
  image: "https://storage.yandexcloud.net/otkter-bucket/team/main/aspek.webp",
  shortText: "Арт-директор",
  extraText: "Арт-директор",
  text: "Один из основателей «Открытой Территории», главный дизайнер, специалист в сфере айдентики и UX/UI. Закончил первый факультет Рекламы в России (Московский гуманитарный университет). Дизайнер в международном рекламном агентстве, автор множества логотипов, фирменных стилей, сайтов и мобильных приложений. Граффити-райтер, леттерист.",
  type: "admins",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/aspek.webp",
  poster:
    "https://storage.yandexcloud.net/otkter-bucket/team/posters/aspek.avif",
  socials: [
    {
      id: 7,
      url: "https://t.me/Chronostheone",
      type: "telegram",
    },
    {
      id: 8,
      url: "https://vk.com/kronosas",
      type: "vk",
    },
  ],
  controls: [
    {
      label: "Telegram",
      type: "button",
      onClick: () => contactFunction(aspek.getEmployee(), "telegram"),
      url: "#",
      icon: "telegram",
    },
    {
      label: "VK",
      type: "button",
      onClick: () => contactFunction(aspek.getEmployee(), "vk"),
      url: "#",
      icon: "vk",
    },
  ],
});
export const hrustalev: IEmployee = new Employee({
  id: 5,
  kind: "team",
  url: "hrustalev",
  title: "Артем Хрусталев",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/hrustalev.webp",
  shortText: "Технический директор",
  extraText: "Технический директор",
  text: "Занимается разработкой и поддержкой сайта Открытой Территории. Закончил факультет кибернетики по направлению: информационная безопасность (РТУ МИРЭА). Руководитель направления системной аналитики в ведущей российской металлургической компании.",
  type: "admins",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/hrustalev.webp",
  poster:
    "https://storage.yandexcloud.net/otkter-bucket/team/posters/hrustalev.avif",
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
    {
      id: 11,
      url: "https://github.com/khruartem",
      type: "github",
    },
  ],
  controls: [
    {
      label: "Telegram",
      type: "button",
      onClick: () => contactFunction(hrustalev.getEmployee(), "telegram"),
      url: "#",
      icon: "telegram",
    },
    {
      label: "VK",
      type: "button",
      onClick: () => contactFunction(hrustalev.getEmployee(), "vk"),
      url: "#",
      icon: "vk",
    },
    {
      label: "GitHub",
      type: "button",
      onClick: () => contactFunction(hrustalev.getEmployee(), "github"),
      url: "#",
      icon: "github",
    },
  ],
});

// Творцы
export const sokolovskiy: IEmployee = new Employee({
  id: 6,
  kind: "team",
  url: "not-found",
  title: "Кирилл Соколовский",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/sokolovskiy.webp",
  shortText: "Поэт",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/sokolovskiy.webp",
});
export const ivanova: IEmployee = new Employee({
  id: 7,
  kind: "team",
  url: "not-found",
  title: "Екатерина Иванова",
  image: "https://storage.yandexcloud.net/otkter-bucket/team/main/ivanova.webp",
  shortText: "Певица, артистка театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/ivanova.webp",
});
export const avramenko: IEmployee = new Employee({
  id: 8,
  kind: "team",
  url: "not-found",
  title: "Анастасия Авраменко",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/avramenko.webp",
  shortText: "Режиссёр, фотограф",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/avramenko.webp",
});
export const maltcev: IEmployee = new Employee({
  id: 9,
  kind: "team",
  url: "not-found",
  title: "Дмитрий Мальцев",
  image: "https://storage.yandexcloud.net/otkter-bucket/team/main/maltcev.webp",
  shortText: "Актёр театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/maltcev.webp",
});
export const bondareva: IEmployee = new Employee({
  id: 10,
  kind: "team",
  url: "not-found",
  title: "Анастасия Бондарева",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/bondareva.webp",
  shortText: "Поэт",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/bondareva.webp",
});
export const agafonov: IEmployee = new Employee({
  id: 11,
  kind: "team",
  url: "not-found",
  title: "Марк Агафонов",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/agafonov.webp",
  shortText: "Режиссёр, фотограф, видеограф",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/agafonov.webp",
});
export const knysh: IEmployee = new Employee({
  id: 12,
  kind: "team",
  url: "not-found",
  title: "Олег Кныш",
  image: "https://storage.yandexcloud.net/otkter-bucket/team/main/knysh.webp",
  shortText: "Актёр театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/knysh.webp",
});
export const rudnitskiy: IEmployee = new Employee({
  id: 13,
  kind: "team",
  url: "not-found",
  title: "Марат Рудницкий",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/rudnitskiy.webp",
  shortText: "Актёр, музыкант, звукотехник, инженер телецентра «Останкино»",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/rudnitskiy.webp",
});
export const strelnikov: IEmployee = new Employee({
  id: 14,
  kind: "team",
  url: "not-found",
  title: "Леонид Стрельников",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/strelnikov.webp",
  shortText: "Актёр театра у Никитских ворот и театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/strelnikov.webp",
});
export const maslovskaya: IEmployee = new Employee({
  id: 15,
  kind: "team",
  url: "not-found",
  title: "Ольга Масловская",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/maslovskaya.webp",
  shortText: "Драматург",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/maslovskaya.webp",
});
export const karaya: IEmployee = new Employee({
  id: 16,
  kind: "team",
  url: "not-found",
  title: "Мария Карая",
  image: "https://storage.yandexcloud.net/otkter-bucket/team/main/karaya.webp",
  shortText: "Актриса театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/karaya.webp",
});
export const torzhkova: IEmployee = new Employee({
  id: 17,
  kind: "team",
  url: "not-found",
  title: "Дарья Торжкова",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/torzhkova.webp",
  shortText: "Актриса",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/torzhkova.webp",
});
export const murzukova: IEmployee = new Employee({
  id: 18,
  kind: "team",
  url: "not-found",
  title: "Настя Мурзюкова",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/murzukova.webp",
  shortText: "Актриса, выпускница Московской Духовной Академии, педагог",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/murzukova.webp",
});
export const hvostikova: IEmployee = new Employee({
  id: 19,
  kind: "team",
  url: "not-found",
  title: "Юлия Хвостикова",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/hvostikova.webp",
  shortText: "Актриса",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/hvostikova.webp",
});
export const tensik: IEmployee = new Employee({
  id: 20,
  kind: "team",
  url: "not-found",
  title: "Елена Тенсик",
  image: "https://storage.yandexcloud.net/otkter-bucket/team/main/tensik.webp",
  shortText:
    "Журналист, радиоведущая, театральный критик, педагог, арт-терапевт и актриса",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/tensik.webp",
});
export const larina: IEmployee = new Employee({
  id: 21,
  kind: "team",
  url: "not-found",
  title: "Елена Ларина",
  image: "https://storage.yandexcloud.net/otkter-bucket/team/main/larina.webp",
  shortText: "Артистка хора театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/larina.webp",
});
export const medvedev: IEmployee = new Employee({
  id: 22,
  kind: "team",
  url: "not-found",
  title: "Андрей Медведев",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/medvedev.webp",
  shortText: "Поэт",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/medvedev.webp",
});
export const maksimova: IEmployee = new Employee({
  id: 23,
  kind: "team",
  url: "not-found",
  title: "Арина Максимова",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/maksimova.webp",
  shortText: "Композитор, исполнитель",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/maksimova.webp",
});
export const kizenkov: IEmployee = new Employee({
  id: 24,
  kind: "team",
  url: "not-found",
  title: "Алексей Кизенков",
  image:
    "https://storage.yandexcloud.net/otkter-bucket/team/main/kizenkov.webp",
  shortText: "Актер театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: "https://storage.yandexcloud.net/otkter-bucket/team/icons/kizenkov.webp",
});

// Команды в разделе "Команда"
export const teams: TEmployee[] = [
  yakovlev.getEmployee(),
  LA.getEmployee(),
  sinelnikova.getEmployee(),
  aspek.getEmployee(),
  hrustalev.getEmployee(),
  sokolovskiy.getEmployee(),
  ivanova.getEmployee(),
  avramenko.getEmployee(),
  maltcev.getEmployee(),
  bondareva.getEmployee(),
  agafonov.getEmployee(),
  knysh.getEmployee(),
  rudnitskiy.getEmployee(),
  strelnikov.getEmployee(),
  maslovskaya.getEmployee(),
  karaya.getEmployee(),
  torzhkova.getEmployee(),
  murzukova.getEmployee(),
  hvostikova.getEmployee(),
  tensik.getEmployee(),
];
