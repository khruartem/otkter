export type TSocialsType = "telegram" | "vk" | "github";
export type TSocials = {
  id: number;
  url: string;
  type: TSocialsType;
  onClick?: () => void;
};