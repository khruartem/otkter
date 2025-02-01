import { createSlice } from "@reduxjs/toolkit";
import { TControls } from "../../utils/types";

import testPhoto1 from "../../assets/testPhoto1.png";
import testPhoto2 from "../../assets/testPhoto2.png";
import testPhoto3 from "../../assets/testPhoto3.png";
import testPhoto4 from "../../assets/testPhoto4.png";
import testPhoto5 from "../../assets/testPhoto5.png";

import yakovlev from "../../assets/yakovlev.png";
import LA from "../../assets/LA.png";
import sinelnikova from "../../assets/sinelnikova.png";
import rudnitskiy from "../../assets/rudnitskiy.png";
import torzhkova from "../../assets/torzhkova.png";
import murzukova from "../../assets/murzukova.png";
import agafonov from "../../assets/agafonov.png";

type TPhoto = {
  id: number;
  source: string;
};

type TModalProject = {
  projectId: number;
  projectInfo: TProjectInfo;
  photos: TPhoto[];
  controls?: TControls;
};

type TProjectInfo = {
  text: string;
  eventDetails: TEventDetails;
  employees?: TEmployees;
};

type TEmployees = {
  actors?: TEmployee[];
  administrators?: TEmployee[];
};

type TEmployee = {
  name: string;
  occupation: string;
  photo: string;
};

type TEventDetails = {
  organizers?: string[];
  partners?: string[];
  eventDate?: string;
  address?: string;
  price?: string;
};

type TProjectsInfoState = {
  info: TModalProject[];
};

const initialState: TProjectsInfoState = {
  info: [
    {
      projectId: 1,
      projectInfo: {
        text: "В центре вечера - восстановленная плёнка, которая оживёт для вас и, как мы верим и надеемся, натолкнёт на размышления о Великой Отечественной войне. Серьёзные и важные темы дискуссии воссоединятся с песнями военных лет и стихами, посвящёнными войне.",
        eventDetails: {
          organizers: ["Творческое объединение «Открытая Территория»"],
          partners: [
            "ГБУ культуры г. Москвы «Объединение культурных центров Центрального административного округа»",
          ],
          address: "г. Москва, Сибирский пр., 2, стр. 5",
          eventDate: "3 декабря 19:00",
          price: "Вход свободный",
        },
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
      controls: {
        buttons: ["Записаться"],
        links: [],
      },
    },
    {
      projectId: 2,
      projectInfo: {
        text: "Цель проведения конкурса - популяризация патриотизма средствами театрального искусства и сохранение социокультурных, духовно-нравственных, патриотических традиций российского народа в контексте исторических событий, сохранение исторической памяти, патриотических ценностей, прославление подвигов участников СВО.",
        eventDetails: {
          organizers: [
            "Федеральное государственное автономное образовательное учреждение высшего образования «Государственный университет просвещения»",
          ],
          partners: [
            "Министерство просвещения Российской Федерации",
            "Государственный фонд поддержки участников СВО «Защитники Отечества»",
            "Творческое объединение «Открытая Территория»",
          ],
          address: "г. Москва, ул. Радио, 10А, стр. 1",
          eventDate: "-",
          price: "Вход свободный",
        },
      },
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
      controls: {
        buttons: ["Подробнее"],
        links: [],
      },
    },
    {
      projectId: 3,
      projectInfo: {
        text: "Конкурс пьес молодых драматургов направлен на выявление и поддержку современных авторов, детских театральных студий, самодеятельных и профессиональных театров.",
        eventDetails: {
          organizers: [
            "ГБУ культуры г. Москвы «Объединение культурных центров Южного административного округа»",
          ],
          partners: ["Творческое объединение «Открытая Территория»"],
          address: "г. Москва, ул. Судостроительная, д. 31, к 1",
          eventDate: "1 декабря 2024",
          price: "3000 ₽",
        },
      },
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
      controls: {
        buttons: ["Подробнее"],
        links: [],
      },
    },
    {
      projectId: 4,
      projectInfo: {
        text: "В сотрудничестве с Центром военно-патриотического воспитания «Вершина» Людмила Яковлева проводит мастер-классы по теме «Ораторское мастерство как инструмент коммуникации» в рамках программы переобучения, переподготовки и повышения квалификации обучающихся из числа участников СВО.",
        eventDetails: {
          organizers: [
            "ФГАОУ ВО «Государственный университет просвещения»",
            "Центр военно-патриотического воспитания «Вершина»",
          ],
          partners: ["Творческое объединение «Открытая Территория»"],
          address: "г. Москва, ул. Радио, 10А, стр. 1",
          eventDate: "Каждую третью субботу месяца",
        },
      },
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
      projectId: 5,
      projectInfo: {
        text: "Документальный короткометражный фильм о Николае ll. Проект находится в стадии разработки и написания сценария. Уже собрана полноценная съёмочная группа. Проект нуждается в финансировании.",
        eventDetails: {
          organizers: ["Творческое объединение «Открытая Территория»"],
          partners: [
            "Музей памяти семьи Императора Николая ll, усадьба «Белая Дача»",
          ],
          eventDate: "Весна 2025",
        },
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
      controls: {
        buttons: ["Поддержать проект"],
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
      projectInfo: {
        text: "Театр «ЛАМП» приступил к созданию спектакля о Николае ll. Проект нуждается в финансировании.",
        eventDetails: {
          organizers: ["Творческое объединение «Открытая Территория»"],
          partners: [
            "Музей памяти семьи Императора Николая ll, усадьба «Белая Дача»",
          ],
          eventDate: "Весна 2025",
        },
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
      controls: {
        buttons: ["Поддержать проект"],
        links: [
          {
            href: "",
            label: "Презентация проекта",
          },
        ],
      },
    },
  ],
};

const projectsInfoSlice = createSlice({
  name: "projectsInfo",
  initialState,
  reducers: {},
  selectors: {},
});

export const reducer = projectsInfoSlice.reducer;
