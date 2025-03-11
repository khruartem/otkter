import React, { ElementType, SyntheticEvent } from "react";

export type TCategoryName =
  | "Спектакль"
  | "Конкурс"
  | "Мастер класс"
  | "Короткий метр"
  | "В ролях"
  | "Руководители"
  | "Информация";

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
  | "info";

export type TDetails = "events" | "employees" | "services";

export type TEventType =
  | "organizers"
  | "partners"
  | "date"
  | "address"
  | "price"
  | "contacts";

  export type TSectionType = Extract<TCardType, "services" | "projects">;
  
  export type TSliderSectionType = Extract<TCardType, "services" | "team">;

export type TEventDetails = {
  type: TEventType;
  label: string;
  value: string | string[];
};

export type TControls = {
  buttons: TButton[];
  links: TLink[];
};

export type TButton = {
  label: string;
  onClick: () => void;
};

export type TLink = {
  label: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  state?: object;
};

export type TEmployees = {
  artists?: TEmployee[];
  administrators?: TEmployee[];
};

export type TEmployee = {
  id?: number;
  name: string;
  occupation: string;
  photo: string;
};

export type TRole = "admins" | "artists";

export type TProjectInfo = {
  role?: TRole;
  text?: string;
  photos?: string[];
  eventDetails: TEventDetails;
  employees?: TEmployees;
  controls?: TControls;
};

export type TCardType = "projects" | "team" | "services" | TServicesTabMode;

export type TCard = {
  projectId?: number;
  teamId?: number;
  serviceId?: number;
  type: TCardType;
  title: string;
  categoryList?: TCategory[];
  attention?: boolean;
  image: string;
  shortText: string;
  social?: Social[];
  projectInfo?: TProjectInfo;
};

export type TProject = Pick<
  TCard,
  | "projectId"
  | "type"
  | "image"
  | "attention"
  | "categoryList"
  | "title"
  | "shortText"
  | "projectInfo"
>;

// export type TTeammate = Pick<
//   TCard,
//   "teamId" | "image" | "title" | "shortText" | "social"
// >;

export type TService = Pick<
  TCard,
  "serviceId" | "type" | "title" | "image" | "shortText"
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
export type FontWeights = 0 | 400 | 500 | 700 | "inherit";
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

export type IconType = {
  as?: Extract<ElementType, "a" | "button">;
  icon: string;
  id: string;
  url?: string;
};

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

export type SocialTypes = "vk" | "telegram";

export type Social = {
  id: number;
  url: string;
  type: SocialTypes;
};
