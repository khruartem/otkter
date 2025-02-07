import { FC } from "react";

import { EmployeeListUI } from "../ui/employee-list";

import { useGetProjectId } from "../../hooks/useGetProjectId";
import { useGetEmployees } from "../../hooks/useGetEmployees";

export const EmployeeList: FC = () => {
  const projectId = useGetProjectId();
  const employees = useGetEmployees(projectId);

  return <EmployeeListUI employees={employees!}/>;
};
