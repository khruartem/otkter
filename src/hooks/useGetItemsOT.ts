import { TItemOTKind } from "../utils/types/common";
import { useGetMerchItems } from "./merch/useGetMerchItems";
import { useGetProjects } from "./projects/useGetProjects";
import { useGetServices } from "./services/useGetServices";
import { useGetTeams } from "./team/useGetTeams";

export const useGetItemsOT = (kind?: TItemOTKind) => {
  const projects = useGetProjects();
  const services = useGetServices();
  const admins = useGetTeams("admins");
  const merch = useGetMerchItems();
  const itemsOT = [...projects, ...services, ...admins, ...merch];

  if (!kind) {
    return itemsOT;
  } else {
    switch (kind) {
      case "projects":
        return projects;
      case "services":
        return services;
      case "team":
        return admins;
      case "merch":
        return merch;
      default:
        return itemsOT;
    }
  }
};
