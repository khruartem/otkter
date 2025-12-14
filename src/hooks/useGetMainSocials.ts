import { TSocials } from "../utils/types/common";

export const useGetMainSocials = (telegramUrl?: string, vkUrl?: string) => {
  const mainSocials: TSocials[] = [
    {
      id: 1,
      url: telegramUrl || "https://t.me/otkterr",
      type: "telegram",
    },
    {
      id: 2,
      url: vkUrl || "https://vk.com/otkter",
      type: "vk",
    },
  ];
  return mainSocials;
};
