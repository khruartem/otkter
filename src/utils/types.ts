import React, { SyntheticEvent } from "react";

// export type TCategoryName =
//   | "Спектакль"
//   | "Конкурс"
//   | "Мастер класс"
//   | "Короткий метр"
//   | "В ролях"
//   | "Руководители"
//   | "Информация";

export type TCategoryName = string;

export type TCategory = {
  name: TCategoryName;
  type: TCategoryType;
  id: TCategoryId;
};

export type TCategoryType = "main" | "attention" | "extra";

export type TCategoryId =
  | "play"
  | "contest"
  | "master-class"
  | "short-film"
  | "admins"
  | "artists"
  | "info"
  | "circle";

export type TDetails = "events" | "employees" | "services";

export type TEventType =
  | "organizers"
  | "partners"
  | "date"
  | "address"
  | "price"
  | "contacts";

export type TSectionType = Extract<TCardType, "services" | "projects" | "team">;

export type TSliderSectionType = Extract<
  TCardType,
  "services" | "team" | "projects"
>;

export type TEventDetails = {
  type: TEventType;
  label: string;
  value: string | string[];
};

export type TControlsLocation = "main" | "info";

type TControlsType = "button" | "link";

export type TControlsItem = {
  label: string;
  type: TControlsType;
  located: TControlsLocation;
  onClick: () => void;
  url: string;
  state?: object;
  icon?: string;
};

export type TEmployees = {
  artists?: TEmployeeGroup[];
  administrators?: TEmployeeGroup;
};

export type TEmployeeGroup = {
  name?: string;
  employees: TEmployee[];
};

export type TEmployeesType = "admins" | "artists";

export type TProjectInfo = {
  role?: TEmployeesType;
  text?: string | string[];
  photos?: string[];
  eventDetails: TEventDetails;
  employees?: TEmployees;
  controls?: TControlsItem;
};

export type TProjectsUrl =
  | "unique-chronicle"
  | "friendship"
  | "open-play"
  | "mastership"
  | "nikolay"
  | "two-in-world"
  | "esenin"
  | "amplitude";

export type TMapping = {
  [key in TProjectsUrl | TServicesUrl | TAdminsUrl | "not-found"]: number;
};

export type TServicesUrl =
  | "master-class"
  | "open-sea"
  | "events"
  | "design"
  | "content"
  | "lamp"
  | "smm";

export type TAdminsUrl =
  | "yakovlev"
  | "LA"
  | "sinelnikova"
  | "aspek"
  | "hrustalev";

export type TCardType =
  | "projects"
  | "team"
  | "services"
  | "main"
  | TServicesTabMode
  | TProjectTabMode
  | TTeamTabMode;

export enum CardType {
  "open-sea" = "Открытое море",
  "master-class" = "Мастер-класс",
  "events" = "Организация мероприятий",
  "design" = "Студия дизайна «Открытый Глаз»",
  "content" = "Контент и производство видеоматериалов",
  "lamp" = "ЛАМП",
  "smm" = "SMM, PR и продвижение",
  "all" = "Все",
  "play" = "Спектакль",
  "contest" = "Конкурс",
  "short-film" = "Короткий метр",
  "admins" = "Руководители",
  "artists" = "Творцы",
  "projects" = "Проекты",
  "team" = "Команда",
  "services" = "Услуги",
  "main" = "Главная",
}

export type TTabsGap = "large" | "middle" | "small" | "none" | string;

export type TContenSliderPadding = "large" | "middle" | "small";

// export type TContenSliderHeaderStyle = "rowed" | "columned";
export type TTabBarStyle = "rowed" | "columned";

export type TSectionPadding = "block" | "inline" | "none" | "all" | "top";

export type TSectionDecoration = "full" | "half" | "only-color";

export type TSectionContentDirection = "row" | "column";

export type TCard = {
  id: number;
  url: TProjectsUrl | TServicesUrl | TAdminsUrl | "not-found";
  type: TCardType;
  title: string;
  categoryList?: TCategory[];
  attention?: boolean;
  image: string;
  icon: string;
  shortText: string;
  social?: Social[];
  projectInfo?: TProjectInfo;
  isMain?: boolean;
  isActive?: boolean;
  order?: number;
  name: string;
  photo: string;
  occupation: string;
  occupationExtra?: string;
  biography?: string;
};

export type TProject = Pick<
  TCard,
  | "id"
  | "url"
  | "type"
  | "image"
  | "attention"
  | "categoryList"
  | "title"
  | "shortText"
  | "projectInfo"
  | "isMain"
  | "isActive"
  | "order"
  | "icon"
>;

export type TEmployee = Pick<
  TCard,
  | "id"
  | "name"
  | "occupation"
  | "occupationExtra"
  | "photo"
  | "icon"
  | "image"
  | "url"
  | "biography"
  | "type"
>;

export type TService = Pick<
  TCard,
  | "id"
  | "url"
  | "type"
  | "title"
  | "image"
  | "shortText"
  | "order"
  | "isMain"
  | "icon"
>;

export type TModalType = "back" | "close";

export type TPhotoType = "small" | "large";

export type TServicesTabMode =
  | "open-sea"
  | "events"
  | "design"
  | "content"
  | "master-class"
  | "lamp"
  | "smm";

export type TServiceRef = {
  type: TServicesTabMode;
  ref: React.RefObject<HTMLDivElement>;
};

export type TServiceViewRef = {
  type: TServicesTabMode;
  inView: boolean;
  ref: (node?: Element | null) => void;
};

export type TServiceIconRef = {
  type: TServicesTabMode;
  ref: React.RefObject<HTMLLIElement>;
};

export type TTeamTabMode = "admins" | "artists";

export type TTeamRef = {
  type: TTeamTabMode;
  ref: React.RefObject<HTMLDivElement>;
};

export type TTeamViewRef = {
  type: TTeamTabMode;
  inView: boolean;
  ref: (node?: Element | null) => void;
};

export type TTeamIconRef = {
  type: TTeamTabMode;
  ref: React.RefObject<HTMLLIElement>;
};

export type TProjectTabMode =
  | "all"
  | Extract<TCategoryId, "play" | "contest" | "master-class" | "short-film">;

export type TProjectRef = {
  type: TProjectTabMode;
  ref: React.RefObject<HTMLDivElement>;
};

export type TProjectViewRef = {
  type: TProjectTabMode;
  inView: boolean;
  ref: (node?: Element | null) => void;
};

export type TProjectsIconRef = {
  type: TProjectTabMode;
  ref: React.RefObject<HTMLLIElement>;
};

export type TTabItem = {
  id: number;
  type: TSectionType;
  image: string;
};

export enum Colors {
  Navy = "#0B3954",
  Nephritis100 = "#2ECC71",
  Nephritis120 = "#21AA58",
  Dark100 = "#4F4F4F",
  Dark80 = "#939393",
  Light100 = "#FFFFFF",
  Light80 = "#F7F7F7",
  Light60 = "#FDFDFD",
  Light30 = "#E6E6E6",
  Light20 = "#BFBFBF",
  Orange100 = "#FB8200",
  None = "transparent",
}

export type TCategoryColors = {
  categoryIconColor?: Colors;
  categotyBackgroundColor: Colors;
  categotyTextColor: Colors;
};

export type FlexDirections = "row" | "column";
export type FlexAligns =
  | "center"
  | "flex-end"
  | "flex-start"
  | "unset"
  | "space-around"
  | "space-between";
export type Borders = "full" | "bottom" | null;
export type Positions =
  | ""
  | "relative"
  | "absolute"
  | "sticky"
  | "static"
  | "unset";

export type TRadii = 0 | 40 | 100 | 200 | 400 | 500 | 800 | "none";

export type Fonts = "" | "Unbounded" | "Roboto" | "inherit";
export type textAligns = "center" | "left" | "right";
export type FontSizes = 0 | 14 | 16 | 18 | 20 | 28 | 32 | 36 | 56 | 72;
export type FontWeights = 0 | 400 | 500 | 600 | 700 | "inherit";
export type lineHeights =
  | 0
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 80
  | 100
  | "inherit";
export type TextTransforms = "uppercase" | "lowcase" | "none";

export type TNavLink = {
  id: number;
  name: string;
  url: string;
};
export type TNavLinks = TNavLink[];

export type ApperanceType = {
  mainColor?: Colors;
  hoverColor?: Colors;
  activeColor?: Colors;
  textColor?: Colors;
  disabledColor?: Colors;
  backgroundColor?: Colors;
  backgroundUrl?: string;
};

export type onClickType =
  | (() => void)
  | ((e: SyntheticEvent) => void)
  | undefined;

export type BoxModelType = {
  margin?: string;
  padding?: string;
  width?: number | string;
  height?: number | string;
  display?: "inline" | "block" | "inline-block";
};

export type FlexType = {
  flexDirection: FlexDirections;
  alignContent?: FlexAligns;
  justifyContent?: FlexAligns;
  alignItems?: FlexAligns;
  alignSelf?: FlexAligns;
  gap?: string;
};

export type Id = string;

export type PositionType = {
  positon?: Positions;
  inset?: number | string;
  left?: number | string;
  top?: number | string;
};

export type BorderType = {
  borderType?: Borders;
  borderRadius?: TRadii;
  borderRadiusTopLeft?: TRadii;
  borderRadiusTopRight?: TRadii;
  borderRadiusBottomLeft?: TRadii;
  borderRadiusBottomRight?: TRadii;
};

export type TIconType =
  | "logo"
  | "telegram"
  | "vk"
  | "open-navigation"
  | "close-navigation"
  | "close-modal"
  | "arrow-left"
  | "arrow-right"
  | "copy"
  | "play"
  | "contest"
  | "master-class"
  | "short-film"
  | "admins"
  | "artists"
  | "all"
  | "info"
  | "circle"
  | "attention"
  | "organizers"
  | "partners"
  | "date"
  | "address"
  | "price"
  | "contacts"
  | "open-sea"
  | "events"
  | "design"
  | "content"
  | "master-class"
  | "lamp"
  | "smm"
  | "error";

export type LinkType = {
  url: string;
  target?: string;
};

export type FontType = {
  fontFamily?: Fonts;
  textAlign?: textAligns;
  fontSize?: FontSizes;
  fontWeight?: FontWeights;
  lineHeight?: lineHeights;
  textTransform?: TextTransforms;
  color?: Colors;
  decorated?: boolean;
};

export type SocialTypes = "vk" | "telegram" | "copy";

export type Social = {
  id: number;
  url: string;
  type: SocialTypes;
  onClick?: (arg?: string) => void;
};
