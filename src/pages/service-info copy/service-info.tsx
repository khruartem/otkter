import { FC } from "react";

import { InfoRenderer } from "../info-renderer";
import { Info } from "../info";

import { useGetService } from "../../hooks/services/useGetService";

export const ServiceInfo: FC = () => {
  const service = useGetService();

  return (
    <InfoRenderer
      currentItem={service}
      render={(currentItem) => <Info currentItem={currentItem} />}
    />
  );
};
