import { TTeamSocials } from "../../features/socials/socialsSlice";
import { IEmployee, Employee } from "../../model/teamData";
import { TControls } from "../../features/controls/controlsSlice";
import { contactFunction } from "../contactFunction";

// Фото команды (основные)
// Админы
import yakovlevPhoto from "../../assets/team/yakovlev.avif";
import LAPhoto from "../../assets/team/LA.avif";
import sinelnikovaPhoto from "../../assets/team/sinelnikova.webp";
import aspekPhoto from "../../assets/team/aspek.webp";
import hrustalevPhoto from "../../assets/team/hrustalev.webp";
// Творцы
import rudnitskiyPhoto from "../../assets/team/rudnitskiy.webp";
import torzhkovaPhoto from "../../assets/team/torzhkova.webp";
import murzukovaPhoto from "../../assets/team/murzukova.webp";
import agafonovPhoto from "../../assets/team/agafonov.webp";
import sokolovskiyPhoto from "../../assets/team/sokolovskiy.webp";
import ivanovaPhoto from "../../assets/team/ivanova.webp";
import avramenkoPhoto from "../../assets/team/avramenko.webp";
import maltcevPhoto from "../../assets/team/maltcev.webp";
import bondarevaPhoto from "../../assets/team/bondareva.webp";
import knyshPhoto from "../../assets/team/knysh.webp";
import strelnikovPhoto from "../../assets/team/strelnikov.webp";
import maslovskayaPhoto from "../../assets/team/maslovskaya.webp";
import karayaPhoto from "../../assets/team/karaya.webp";
import hvostikovaPhoto from "../../assets/team/hvostikova.webp";
import tensikPhoto from "../../assets/team/tensik.webp";
import larinaPhoto from "../../assets/team/larina.webp";
// import unknownPhoto from "../../assets/team/unknown.webp";
import medvedevPhoto from "../../assets/team/medvedev.webp";
import maksimovaPhoto from "../../assets/team/maksimova.webp";
import kizenkovPhoto from "../../assets/team/kizenkov.webp";

// Иконки команды
// Иконки админов
import yakovlevIcon from "../../assets/team/icons/yakovlev.avif";
import LAIcon from "../../assets/team/icons/LA.avif";
import sinelnikovaIcon from "../../assets/team/icons/sinelnikova.webp";
import aspekIcon from "../../assets/team/icons/aspek.webp";
import hrustalevIcon from "../../assets/team/icons/hrustalev.webp";
// Иконки творцов
import rudnitskiyIcon from "../../assets/team/icons/rudnitskiy.webp";
import torzhkovaIcon from "../../assets/team/icons/torzhkova.webp";
import murzukovaIcon from "../../assets/team/icons/murzukova.webp";
import agafonovIcon from "../../assets/team/icons/agafonov.webp";
import sokolovskiyIcon from "../../assets/team/icons/sokolovskiy.webp";
import ivanovaIcon from "../../assets/team/icons/ivanova.webp";
import avramenkoIcon from "../../assets/team/icons/avramenko.webp";
import maltcevIcon from "../../assets/team/icons/maltcev.webp";
import bondarevaIcon from "../../assets/team/icons/bondareva.webp";
import knyshIcon from "../../assets/team/icons/knysh.webp";
import strelnikovIcon from "../../assets/team/icons/strelnikov.webp";
import maslovskayaIcon from "../../assets/team/icons/maslovskaya.webp";
import karayaIcon from "../../assets/team/icons/karaya.webp";
import hvostikovaIcon from "../../assets/team/icons/hvostikova.webp";
import tensikIcon from "../../assets/team/icons/tensik.webp";
import larinaIcon from "../../assets/team/icons/larina.webp";
// import unknownIcon from "../../assets/team/icons/unknown.webp";
import medvedevIcon from "../../assets/team/icons/medvedev.webp";
import maksimovaIcon from "../../assets/team/icons/maksimova.webp";
import kizenkovIcon from "../../assets/team/icons/kizenkov.webp";
import { TEmployees, TTeamTabMode } from "../types";
import { TPhotos } from "../../features/photos/photosSlice";

// Фото команды (для биографии)
// Админы
// Яковлев
import yakovlevPhoto1 from "../../assets/team-photos/yakovlev/yakovlev_1.avif";
import yakovlevPhoto2 from "../../assets/team-photos/yakovlev/yakovlev_2.avif";
import yakovlevPhoto3 from "../../assets/team-photos/yakovlev/yakovlev_3.avif";
import yakovlevPhoto4 from "../../assets/team-photos/yakovlev/yakovlev_4.avif";
import yakovlevPhoto5 from "../../assets/team-photos/yakovlev/yakovlev_5.avif";
import yakovlevPhoto6 from "../../assets/team-photos/yakovlev/yakovlev_6.avif";
import yakovlevPhoto7 from "../../assets/team-photos/yakovlev/yakovlev_7.avif";
// ЛА
import LAPhoto1 from "../../assets/team-photos/LA/LA_1.avif";
import LAPhoto2 from "../../assets/team-photos/LA/LA_2.avif";
import LAPhoto3 from "../../assets/team-photos/LA/LA_3.avif";
import LAPhoto4 from "../../assets/team-photos/LA/LA_4.avif";
import LAPhoto5 from "../../assets/team-photos/LA/LA_5.avif";
import LAPhoto6 from "../../assets/team-photos/LA/LA_6.avif";
import LAPhoto7 from "../../assets/team-photos/LA/LA_7.avif";
// Синельникова
import sinelnikovaPhoto1 from "../../assets/team-photos/sinelnikova/sinelnikova_1.avif";
import sinelnikovaPhoto2 from "../../assets/team-photos/sinelnikova/sinelnikova_2.avif";
import sinelnikovaPhoto3 from "../../assets/team-photos/sinelnikova/sinelnikova_3.avif";
import sinelnikovaPhoto4 from "../../assets/team-photos/sinelnikova/sinelnikova_4.avif";
import sinelnikovaPhoto5 from "../../assets/team-photos/sinelnikova/sinelnikova_5.avif";
import sinelnikovaPhoto6 from "../../assets/team-photos/sinelnikova/sinelnikova_6.avif";
import sinelnikovaPhoto7 from "../../assets/team-photos/sinelnikova/sinelnikova_7.avif";

// Иконки фото команды (для биографии)
// Админы
// Яковлев
import yakovlevPhotoIcon1 from "../../assets/team-photos/yakovlev/icons/yakovlev_1.avif";
import yakovlevPhotoIcon2 from "../../assets/team-photos/yakovlev/icons/yakovlev_2.avif";
import yakovlevPhotoIcon3 from "../../assets/team-photos/yakovlev/icons/yakovlev_3.avif";
import yakovlevPhotoIcon4 from "../../assets/team-photos/yakovlev/icons/yakovlev_4.avif";
import yakovlevPhotoIcon5 from "../../assets/team-photos/yakovlev/icons/yakovlev_5.avif";
import yakovlevPhotoIcon6 from "../../assets/team-photos/yakovlev/icons/yakovlev_6.avif";
import yakovlevPhotoIcon7 from "../../assets/team-photos/yakovlev/icons/yakovlev_7.avif";
// ЛА
import LAPhotoIcon1 from "../../assets/team-photos/LA/icons/LA_1.avif";
import LAPhotoIcon2 from "../../assets/team-photos/LA/icons/LA_2.avif";
import LAPhotoIcon3 from "../../assets/team-photos/LA/icons/LA_3.avif";
import LAPhotoIcon4 from "../../assets/team-photos/LA/icons/LA_4.avif";
import LAPhotoIcon5 from "../../assets/team-photos/LA/icons/LA_5.avif";
import LAPhotoIcon6 from "../../assets/team-photos/LA/icons/LA_6.avif";
import LAPhotoIcon7 from "../../assets/team-photos/LA/icons/LA_7.avif";
// Синельникова
import sinelnikovaPhotoIcon1 from "../../assets/team-photos/sinelnikova/icons/sinelnikova_1.avif";
import sinelnikovaPhotoIcon2 from "../../assets/team-photos/sinelnikova/icons/sinelnikova_2.avif";
import sinelnikovaPhotoIcon3 from "../../assets/team-photos/sinelnikova/icons/sinelnikova_3.avif";
import sinelnikovaPhotoIcon4 from "../../assets/team-photos/sinelnikova/icons/sinelnikova_4.avif";
import sinelnikovaPhotoIcon5 from "../../assets/team-photos/sinelnikova/icons/sinelnikova_5.avif";
import sinelnikovaPhotoIcon6 from "../../assets/team-photos/sinelnikova/icons/sinelnikova_6.avif";
import sinelnikovaPhotoIcon7 from "../../assets/team-photos/sinelnikova/icons/sinelnikova_7.avif";

// Фото-постеры команды (для биографии)
// Админы
import yakovlevPoster from "../../assets/team/posters/yafovlev.avif";
import LAPoster from "../../assets/team/posters/LA.avif";
import sinelnikovaPoster from "../../assets/team/posters/sinelnikova.avif";
import aspekPoster from "../../assets/team/posters/aspek.avif";
import hrustslevPoster from "../../assets/team/posters/hrustalev.avif";

// Список команды
// Админы
export const yakovlev: IEmployee = new Employee({
  id: 1,
  name: "Сергей Яковлев",
  type: "admins",
  photo: yakovlevPhoto,
  icon: yakovlevIcon,
  image: yakovlevPoster,
  url: "yakovlev",
  biography:
    "Один из основателей «Открытой Территории», главный режиссёр. Директор детско-юношеской театральной студии «Открытое Море». В 2013 закончил ВТУ им. М. С. Щепкина (курс Бэйлиса-Иванова). В труппе театра «Ленком Марка Захарова» с 2015 года, актёр Театра Наций – с 2023. В «Ленкоме»: Голубков – «Бег» и др. В Театре Наций: Вронский – «Каренина. Процесс» В Театре Эстрады: Диего-Маурисьо – «Ложь во спасение».",
});
export const LA: IEmployee = new Employee({
  id: 2,
  name: "Людмила Яковлева",
  type: "admins",
  photo: LAPhoto,
  icon: LAIcon,
  image: LAPoster,
  url: "LA",
  biography:
    "Одна из основателей «Открытой Территорией». Помимо художественного руководства творческим объединением, руководит детско-юношеской театральной студией «Открытое Море» («КаЛиТка»), которую основала в 1995 году, и театром «ЛАМП». Преподаватель актерского мастерства, автор и ведущая актерско-психологических тренингов. Режиссер театральных постановок, автор рассказов в жанре фантастического реализма.",
});
export const sinelnikova: IEmployee = new Employee({
  id: 3,
  name: "Алена Синельникова",
  type: "admins",
  photo: sinelnikovaPhoto,
  icon: sinelnikovaIcon,
  image: sinelnikovaPoster,
  url: "sinelnikova",
  biography:
    "Занимается продвижением как всего объединения, так и отдельных творческих проектов. Выступает продюсером театральных постановок объединения. В 2025 году окончила Финансовый университет при Правительстве по направлению «Реклама и связи с общественностью». В сфере творчества и культуры более 5 лет. Опыт коммуникации и PR включает в себя креативные индустрии, сферу моды и красоты.",
});
export const aspek: IEmployee = new Employee({
  id: 4,
  name: "Арсений Аспек",
  type: "admins",
  photo: aspekPhoto,
  icon: aspekIcon,
  image: aspekPoster,
  url: "aspek",
  biography:
    "Один из основателей «Открытой Территории», главный дизайнер, специалист в сфере айдентики и UX/UI. Закончил первый факультет Рекламы в России (Московский гуманитарный университет). Дизайнер в международном рекламном агентстве, автор множества логотипов, фирменных стилей, сайтов и мобильных приложений. Граффити-райтер, леттерист.",
});
export const hrustalev: IEmployee = new Employee({
  id: 5,
  name: "Артем Хрусталев",
  type: "admins",
  photo: hrustalevPhoto,
  icon: hrustalevIcon,
  image: hrustslevPoster,
  url: "hrustalev",
  biography:
    "Занимается разработкой и поддержкой сайта Открытой Территории. Закончил факультет кибернетики по направлению: информационная безопасность (РТУ МИРЭА). Руководитель направления системной аналитики в ведущей российской металлургической компании.",
});

// Творцы
export const sokolovskiy: IEmployee = new Employee({
  id: 6,
  name: "Кирилл Соколовский",
  type: "artists",
  photo: sokolovskiyPhoto,
  icon: sokolovskiyIcon,
  image: sokolovskiyPhoto,
  url: "not-found",
});
export const ivanova: IEmployee = new Employee({
  id: 7,
  name: "Екатерина Иванова",
  type: "artists",
  photo: ivanovaPhoto,
  icon: ivanovaIcon,
  image: ivanovaPhoto,
  url: "not-found",
});
export const avramenko: IEmployee = new Employee({
  id: 8,
  name: "Анастасия Авраменко",
  type: "artists",
  photo: avramenkoPhoto,
  image: avramenkoPhoto,
  icon: avramenkoIcon,
  url: "not-found",
});
export const maltcev: IEmployee = new Employee({
  id: 9,
  name: "Дмитрий Мальцев",
  type: "artists",
  photo: maltcevPhoto,
  icon: maltcevIcon,
  image: maltcevPhoto,
  url: "not-found",
});
export const bondareva: IEmployee = new Employee({
  id: 10,
  name: "Анастасия Бондарева",
  type: "artists",
  photo: bondarevaPhoto,
  icon: bondarevaIcon,
  image: bondarevaPhoto,
  url: "not-found",
});
export const agafonov: IEmployee = new Employee({
  id: 11,
  name: "Марк Агафонов",
  type: "artists",
  photo: agafonovPhoto,
  icon: agafonovIcon,
  image: agafonovPhoto,
  url: "not-found",
});
export const knysh: IEmployee = new Employee({
  id: 12,
  name: "Олег Кныш",
  type: "artists",
  photo: knyshPhoto,
  icon: knyshIcon,
  image: knyshPhoto,
  url: "not-found",
});
export const rudnitskiy: IEmployee = new Employee({
  id: 13,
  name: "Марат Рудницкий",
  type: "artists",
  photo: rudnitskiyPhoto,
  icon: rudnitskiyIcon,
  image: rudnitskiyPhoto,
  url: "not-found",
});
export const strelnikov: IEmployee = new Employee({
  id: 14,
  name: "Леонид Стрельников",
  type: "artists",
  photo: strelnikovPhoto,
  icon: strelnikovIcon,
  image: strelnikovPhoto,
  url: "not-found",
});
export const maslovskaya: IEmployee = new Employee({
  id: 15,
  name: "Ольга Масловская",
  type: "artists",
  photo: maslovskayaPhoto,
  icon: maslovskayaIcon,
  image: maslovskayaPhoto,
  url: "not-found",
});
export const karaya: IEmployee = new Employee({
  id: 16,
  name: "Мария Карая",
  type: "artists",
  photo: karayaPhoto,
  icon: karayaIcon,
  image: karayaPhoto,
  url: "not-found",
});
export const torzhkova: IEmployee = new Employee({
  id: 17,
  name: "Дарья Торжкова",
  type: "artists",
  photo: torzhkovaPhoto,
  icon: torzhkovaIcon,
  image: torzhkovaPhoto,
  url: "not-found",
});
export const murzukova: IEmployee = new Employee({
  id: 18,
  name: "Настя Мурзюкова",
  type: "artists",
  photo: murzukovaPhoto,
  icon: murzukovaIcon,
  image: murzukovaPhoto,
  url: "not-found",
});
export const hvostikova: IEmployee = new Employee({
  id: 19,
  name: "Юлия Хвостикова",
  type: "artists",
  photo: hvostikovaPhoto,
  icon: hvostikovaIcon,
  image: hvostikovaPhoto,
  url: "not-found",
});
export const tensik: IEmployee = new Employee({
  id: 20,
  name: "Елена Тенсик",
  type: "artists",
  photo: tensikPhoto,
  icon: tensikIcon,
  image: tensikPhoto,
  url: "not-found",
});
export const larina: IEmployee = new Employee({
  id: 21,
  name: "Елена Ларина",
  type: "artists",
  photo: larinaPhoto,
  icon: larinaIcon,
  image: larinaPhoto,
  url: "not-found",
});
export const medvedev: IEmployee = new Employee({
  id: 22,
  name: "Андрей Медведев",
  type: "artists",
  photo: medvedevPhoto,
  icon: medvedevIcon,
  image: medvedevPhoto,
  url: "not-found",
});
export const maksimova: IEmployee = new Employee({
  id: 23,
  name: "Арина Максимова",
  type: "artists",
  photo: maksimovaPhoto,
  icon: maksimovaIcon,
  image: maksimovaPhoto,
  url: "not-found",
});
export const kizenkov: IEmployee = new Employee({
  id: 24,
  name: "Алексей Кизенков",
  type: "artists",
  photo: kizenkovPhoto,
  icon: kizenkovIcon,
  image: kizenkovPhoto,
  url: "not-found",
});

// Соц. сети команды
export const teamsSocials: TTeamSocials[] = [
  {
    teamType: "admins",
    teamSocials: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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

// Табы в разделе "Команда"
export const teamsTabs: TTeamTabMode[] = ["admins", "artists"];

// Команды в разделе "Команда"
export const teams: TEmployees = {
  administrators: {
    employees: [
      yakovlev.getEmployee("Глава творческого объединения"),
      LA.getEmployee("Художественный руководитель"),
      aspek.getEmployee("Арт-директор"),
      sinelnikova.getEmployee("PR-директор"),
      hrustalev.getEmployee("Технический директор"),
    ],
  },
  artists: [
    {
      employees: [
        sokolovskiy.getEmployee("Поэт"),
        ivanova.getEmployee("Певица, артистка театра «Ленком Марка Захарова»"),
        avramenko.getEmployee("Режиссёр, фотограф"),
        maltcev.getEmployee("Актёр театра «Ленком Марка Захарова»"),
        bondareva.getEmployee("Поэт"),
        agafonov.getEmployee("Режиссёр, фотограф, видеограф"),
        knysh.getEmployee("Актёр театра «Ленком Марка Захарова»"),
        rudnitskiy.getEmployee(
          "Актёр, звукорежиссер, инженер телецентра «Останкино»"
        ),
        strelnikov.getEmployee(
          "Актёр театра у Никитских ворот и театра «Ленком Марка Захарова»"
        ),
        maslovskaya.getEmployee("Драматург"),
        karaya.getEmployee("Актриса театра «Ленком Марка Захарова»"),
        torzhkova.getEmployee("Актриса"),
        murzukova.getEmployee(
          "Актриса, выпускница Московской Духовной Академии, педагог"
        ),
        hvostikova.getEmployee("Актриса"),
        tensik.getEmployee(
          "Журналист, радиоведущая, театральный критик, педагог, арт-терапевт и актриса"
        ),
      ],
    },
  ],
};

// Списки фоток для страниц биографии
export const teamPhotos: TPhotos[] = [
  {
    id: 1,
    photos: [
      {
        id: 39,
        source: yakovlevPhoto1,
        icon: yakovlevPhotoIcon1,
      },
      {
        id: 40,
        source: yakovlevPhoto2,
        icon: yakovlevPhotoIcon2,
      },
      {
        id: 41,
        source: yakovlevPhoto3,
        icon: yakovlevPhotoIcon3,
      },
      {
        id: 42,
        source: yakovlevPhoto4,
        icon: yakovlevPhotoIcon4,
      },
      {
        id: 43,
        source: yakovlevPhoto5,
        icon: yakovlevPhotoIcon5,
      },
      {
        id: 44,
        source: yakovlevPhoto6,
        icon: yakovlevPhotoIcon6,
      },
      {
        id: 45,
        source: yakovlevPhoto7,
        icon: yakovlevPhotoIcon7,
      },
    ],
  },
  {
    id: 2,
    photos: [
      {
        id: 46,
        source: LAPhoto1,
        icon: LAPhotoIcon1,
      },
      {
        id: 47,
        source: LAPhoto2,
        icon: LAPhotoIcon2,
      },
      {
        id: 48,
        source: LAPhoto3,
        icon: LAPhotoIcon3,
      },
      {
        id: 49,
        source: LAPhoto4,
        icon: LAPhotoIcon4,
      },
      {
        id: 50,
        source: LAPhoto5,
        icon: LAPhotoIcon5,
      },
      {
        id: 51,
        source: LAPhoto6,
        icon: LAPhotoIcon6,
      },
      {
        id: 52,
        source: LAPhoto7,
        icon: LAPhotoIcon7,
      },
    ],
  },
  {
    id: 3,
    photos: [
      {
        id: 53,
        source: sinelnikovaPhoto1,
        icon: sinelnikovaPhotoIcon1,
      },
      {
        id: 54,
        source: sinelnikovaPhoto2,
        icon: sinelnikovaPhotoIcon2,
      },
      {
        id: 55,
        source: sinelnikovaPhoto3,
        icon: sinelnikovaPhotoIcon3,
      },
      {
        id: 56,
        source: sinelnikovaPhoto4,
        icon: sinelnikovaPhotoIcon4,
      },
      {
        id: 57,
        source: sinelnikovaPhoto5,
        icon: sinelnikovaPhotoIcon5,
      },
      {
        id: 58,
        source: sinelnikovaPhoto6,
        icon: sinelnikovaPhotoIcon6,
      },
      {
        id: 59,
        source: sinelnikovaPhoto7,
        icon: sinelnikovaPhotoIcon7,
      },
    ],
  },
];

// Набор управляющих кнопок для страниц биографии
// Админы
export const teamControls: TControls[] = [
  {
    id: 1,
    controls: [
      {
        label: "Telegram",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 1, "telegram"),
        url: "#",
        icon: "telegram",
      },
      {
        label: "VK",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 1, "vk"),
        url: "#",
        icon: "vk",
      },
    ],
  },
  {
    id: 2,
    controls: [
      {
        label: "Telegram",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 2, "telegram"),
        url: "#",
        icon: "telegram",
      },
      {
        label: "VK",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 2, "vk"),
        url: "#",
        icon: "vk",
      },
    ],
  },
  {
    id: 3,
    controls: [
      {
        label: "Telegram",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 4, "telegram"),
        url: "#",
        icon: "telegram",
      },
      {
        label: "VK",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 4, "vk"),
        url: "#",
        icon: "vk",
      },
    ],
  },
  {
    id: 4,
    controls: [
      {
        label: "Telegram",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 3, "telegram"),
        url: "#",
        icon: "telegram",
      },
      {
        label: "VK",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 3, "vk"),
        url: "#",
        icon: "vk",
      },
    ],
  },
  {
    id: 5,
    controls: [
      {
        label: "Telegram",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 5, "telegram"),
        url: "#",
        icon: "telegram",
      },
      {
        label: "VK",
        type: "button",
        located: "info",
        onClick: () => contactFunction("admins", 5, "vk"),
        url: "#",
        icon: "vk",
      },
    ],
  },
];
