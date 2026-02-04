export type TSocialsType =
  | "telegram"
  | "vk"
  | "github"
  | "kinopoisk"
  | "film-toolz";

export type TSocials = {
  id: number;
  url: string;
  type: TSocialsType;
  onClick?: () => void;
};
