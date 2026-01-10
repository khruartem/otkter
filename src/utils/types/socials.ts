export type TSocialsType = "telegram" | "vk";
export type TSocials = {
  id: number;
  url: string;
  type: TSocialsType;
  onClick?: () => void;
};