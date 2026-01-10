import { TItemOTKind } from "../utils/types/item-ot";
import { useGetMerchItems } from "./merch/useGetMerchItems";
import { useGetProjects } from "./projects/useGetProjects";
import { useGetServices } from "./services/useGetServices";
import { useGetTeams } from "./team/useGetTeams";
import { useSortAsc } from "./useSortAsc";

export const useGetItemsOT = (kind?: TItemOTKind) => {
  const projects = useGetProjects();
  const sortedProjects = useSortAsc(projects, "order");

  const services = useGetServices();
  const sortedServices = useSortAsc(services, "order");

  const admins = useGetTeams("admins");
  const merch = useGetMerchItems();
  const itemsOT = [...projects, ...services, ...admins, ...merch];

  if (!kind) {
    return itemsOT;
  } else {
    switch (kind) {
      case "projects":
        return sortedProjects;
      case "services":
        return sortedServices;
      case "team":
        return admins;
      case "merch":
        return merch;
      default:
        return itemsOT;
    }
  }
};
