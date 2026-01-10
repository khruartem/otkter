import { IEmployee, Employee } from "../model/teamData";
import { contactFunction } from "../contactFunction";
import { TEmployee } from "../types/team";

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
  kind: "team",
  url: "yakovlev",
  title: "Сергей Яковлев",
  image: yakovlevPhoto,
  shortText: "Глава творческого объединения",
  extraText: "Глава творческого объединения",
  text: "Один из основателей «Открытой Территории», главный режиссёр. Директор детско-юношеской театральной студии «Открытое Море». В 2013 закончил ВТУ им. М. С. Щепкина (курс Бэйлиса-Иванова). В труппе театра «Ленком Марка Захарова» с 2015 года, актёр Театра Наций – с 2023. В «Ленкоме»: Голубков – «Бег» и др. В Театре Наций: Вронский – «Каренина. Процесс» В Театре Эстрады: Диего-Маурисьо – «Ложь во спасение».",
  type: "admins",
  main: true,
  active: true,
  icon: yakovlevIcon,
  poster: yakovlevPoster,
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
  controls: [
    {
      label: "Telegram",
      type: "button",
      onClick: () => contactFunction(yakovlev, "telegram"),
      url: "#",
      icon: "telegram",
    },
    {
      label: "VK",
      type: "button",
      onClick: () => contactFunction(yakovlev, "vk"),
      url: "#",
      icon: "vk",
    },
  ],
});
export const LA: IEmployee = new Employee({
  id: 2,
  kind: "team",
  url: "LA",
  title: "Людмила Яковлева",
  image: LAPhoto,
  shortText: "Художественный руководитель",
  extraText: "Художественный руководитель",
  text: "Одна из основателей «Открытой Территорией». Помимо художественного руководства творческим объединением, руководит детско-юношеской театральной студией «Открытое Море» («КаЛиТка»), которую основала в 1995 году, и театром «ЛАМП». Преподаватель актерского мастерства, автор и ведущая актерско-психологических тренингов. Режиссер театральных постановок, автор рассказов в жанре фантастического реализма.",
  type: "admins",
  main: true,
  active: true,
  icon: LAIcon,
  poster: LAPoster,
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
  controls: [
    {
      label: "Telegram",
      type: "button",
      onClick: () => contactFunction(LA, "telegram"),
      url: "#",
      icon: "telegram",
    },
    {
      label: "VK",
      type: "button",
      onClick: () => contactFunction(LA, "vk"),
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
  image: sinelnikovaPhoto,
  shortText: "PR-директор",
  extraText: "PR-директор",
  text: "Занимается продвижением как всего объединения, так и отдельных творческих проектов. Выступает продюсером театральных постановок объединения. В 2025 году окончила Финансовый университет при Правительстве по направлению «Реклама и связи с общественностью». В сфере творчества и культуры более 5 лет. Опыт коммуникации и PR включает в себя креативные индустрии, сферу моды и красоты.",
  type: "admins",
  main: true,
  active: true,
  icon: sinelnikovaIcon,
  poster: sinelnikovaPoster,
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
  controls: [
    {
      label: "Telegram",
      type: "button",
      onClick: () => contactFunction(sinelnikova, "telegram"),
      url: "#",
      icon: "telegram",
    },
    {
      label: "VK",
      type: "button",
      onClick: () => contactFunction(sinelnikova, "vk"),
      url: "#",
      icon: "vk",
    },
  ],
});
export const aspek: IEmployee = new Employee({
  id: 4,
  kind: "team",
  url: "aspek",
  title: "Арсений Аспек",
  image: aspekPhoto,
  shortText: "Арт-директор",
  extraText: "Арт-директор",
  text: "Один из основателей «Открытой Территории», главный дизайнер, специалист в сфере айдентики и UX/UI. Закончил первый факультет Рекламы в России (Московский гуманитарный университет). Дизайнер в международном рекламном агентстве, автор множества логотипов, фирменных стилей, сайтов и мобильных приложений. Граффити-райтер, леттерист.",
  type: "admins",
  main: true,
  active: true,
  icon: aspekIcon,
  poster: aspekPoster,
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
      onClick: () => contactFunction(aspek, "telegram"),
      url: "#",
      icon: "telegram",
    },
    {
      label: "VK",
      type: "button",
      onClick: () => contactFunction(aspek, "vk"),
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
  image: hrustalevPhoto,
  shortText: "Технический директор",
  extraText: "Технический директор",
  text: "Занимается разработкой и поддержкой сайта Открытой Территории. Закончил факультет кибернетики по направлению: информационная безопасность (РТУ МИРЭА). Руководитель направления системной аналитики в ведущей российской металлургической компании.",
  type: "admins",
  main: true,
  active: true,
  icon: hrustalevIcon,
  poster: hrustslevPoster,
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
  controls: [
    {
      label: "Telegram",
      type: "button",
      onClick: () => contactFunction(hrustalev, "telegram"),
      url: "#",
      icon: "telegram",
    },
    {
      label: "VK",
      type: "button",
      onClick: () => contactFunction(hrustalev, "vk"),
      url: "#",
      icon: "vk",
    },
  ],
});

// Творцы
export const sokolovskiy: IEmployee = new Employee({
  id: 6,
  kind: "team",
  url: "not-found",
  title: "Кирилл Соколовский",
  image: sokolovskiyPhoto,
  shortText: "Поэт",
  type: "artists",
  main: true,
  active: true,
  icon: sokolovskiyIcon,
});
export const ivanova: IEmployee = new Employee({
  id: 7,
  kind: "team",
  url: "not-found",
  title: "Екатерина Иванова",
  image: ivanovaPhoto,
  shortText: "Певица, артистка театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: ivanovaIcon,
});
export const avramenko: IEmployee = new Employee({
  id: 8,
  kind: "team",
  url: "not-found",
  title: "Анастасия Авраменко",
  image: avramenkoPhoto,
  shortText: "Режиссёр, фотограф",
  type: "artists",
  main: true,
  active: true,
  icon: avramenkoIcon,
});
export const maltcev: IEmployee = new Employee({
  id: 9,
  kind: "team",
  url: "not-found",
  title: "Дмитрий Мальцев",
  image: maltcevPhoto,
  shortText: "Актёр театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: maltcevIcon,
});
export const bondareva: IEmployee = new Employee({
  id: 10,
  kind: "team",
  url: "not-found",
  title: "Анастасия Бондарева",
  image: bondarevaPhoto,
  shortText: "Поэт",
  type: "artists",
  main: true,
  active: true,
  icon: bondarevaIcon,
});
export const agafonov: IEmployee = new Employee({
  id: 11,
  kind: "team",
  url: "not-found",
  title: "Марк Агафонов",
  image: agafonovPhoto,
  shortText: "Режиссёр, фотограф, видеограф",
  type: "artists",
  main: true,
  active: true,
  icon: agafonovIcon,
});
export const knysh: IEmployee = new Employee({
  id: 12,
  kind: "team",
  url: "not-found",
  title: "Олег Кныш",
  image: knyshPhoto,
  shortText: "Актёр театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: knyshIcon,
});
export const rudnitskiy: IEmployee = new Employee({
  id: 13,
  kind: "team",
  url: "not-found",
  title: "Марат Рудницкий",
  image: rudnitskiyPhoto,
  shortText: "Актёр, музыкант, звукотехник, инженер телецентра «Останкино»",
  type: "artists",
  main: true,
  active: true,
  icon: rudnitskiyIcon,
});
export const strelnikov: IEmployee = new Employee({
  id: 14,
  kind: "team",
  url: "not-found",
  title: "Леонид Стрельников",
  image: strelnikovPhoto,
  shortText: "Актёр театра у Никитских ворот и театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: strelnikovIcon,
});
export const maslovskaya: IEmployee = new Employee({
  id: 15,
  kind: "team",
  url: "not-found",
  title: "Ольга Масловская",
  image: maslovskayaPhoto,
  shortText: "Драматург",
  type: "artists",
  main: true,
  active: true,
  icon: maslovskayaIcon,
});
export const karaya: IEmployee = new Employee({
  id: 16,
  kind: "team",
  url: "not-found",
  title: "Мария Карая",
  image: karayaPhoto,
  shortText: "Актриса театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: karayaIcon,
});
export const torzhkova: IEmployee = new Employee({
  id: 17,
  kind: "team",
  url: "not-found",
  title: "Дарья Торжкова",
  image: torzhkovaPhoto,
  shortText: "Актриса",
  type: "artists",
  main: true,
  active: true,
  icon: torzhkovaIcon,
});
export const murzukova: IEmployee = new Employee({
  id: 18,
  kind: "team",
  url: "not-found",
  title: "Настя Мурзюкова",
  image: murzukovaPhoto,
  shortText: "Актриса, выпускница Московской Духовной Академии, педагог",
  type: "artists",
  main: true,
  active: true,
  icon: murzukovaIcon,
});
export const hvostikova: IEmployee = new Employee({
  id: 19,
  kind: "team",
  url: "not-found",
  title: "Юлия Хвостикова",
  image: hvostikovaPhoto,
  shortText: "Актриса",
  type: "artists",
  main: true,
  active: true,
  icon: hvostikovaIcon,
});
export const tensik: IEmployee = new Employee({
  id: 20,
  kind: "team",
  url: "not-found",
  title: "Елена Тенсик",
  image: tensikPhoto,
  shortText:
    "Журналист, радиоведущая, театральный критик, педагог, арт-терапевт и актриса",
  type: "artists",
  main: true,
  active: true,
  icon: tensikIcon,
});
export const larina: IEmployee = new Employee({
  id: 21,
  kind: "team",
  url: "not-found",
  title: "Елена Ларина",
  image: larinaPhoto,
  shortText: "Артистка хора театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: larinaIcon,
});
export const medvedev: IEmployee = new Employee({
  id: 22,
  kind: "team",
  url: "not-found",
  title: "Андрей Медведев",
  image: medvedevPhoto,
  shortText: "Поэт",
  type: "artists",
  main: true,
  active: true,
  icon: medvedevIcon,
});
export const maksimova: IEmployee = new Employee({
  id: 23,
  kind: "team",
  url: "not-found",
  title: "Арина Максимова",
  image: maksimovaPhoto,
  shortText: "Композитор, исполнитель",
  type: "artists",
  main: true,
  active: true,
  icon: maksimovaIcon,
});
export const kizenkov: IEmployee = new Employee({
  id: 24,
  kind: "team",
  url: "not-found",
  title: "Алексей Кизенков",
  image: kizenkovPhoto,
  shortText: "Актер театра «Ленком Марка Захарова»",
  type: "artists",
  main: true,
  active: true,
  icon: kizenkovIcon,
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
