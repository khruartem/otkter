import { FC } from "react";

import { InfoRenderer } from "../info-renderer";
import { Info } from "../info";

import { useGetEmployee } from "../../hooks/team/useGetEmployee";

export const EmployeeInfo: FC = () => {
  const employee = useGetEmployee();

  return (
    <InfoRenderer
      currentItem={employee}
      render={(currentItem) => <Info currentItem={currentItem} />}
    />
  );
};
