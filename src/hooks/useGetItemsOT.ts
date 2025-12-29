import { useGetMerchItems } from "./merch/useGetMerchItems";
import { useGetProjects } from "./projects/useGetProjects";
import { useGetServices } from "./services/useGetServices";
import { useGetTeams } from "./team/useGetTeams";

export const useGetItemsOT = () => {
  const projects = useGetProjects();
  const services = useGetServices();
  const admins = useGetTeams("admins");
  const merch = useGetMerchItems();

  return [...projects, ...services, ...admins, ...merch];
};
