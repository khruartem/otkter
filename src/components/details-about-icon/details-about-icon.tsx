import { FC } from "react";

import { Organizers, Partners, Address, Price, Phone, Date } from "../icons";

import { TDetailsAboutIconProps } from "./types";
import { Colors } from "../../utils/types";

export const DetailsAboutIcon: FC<TDetailsAboutIconProps> = ({ icon }) => {
  return (
    <>
      {icon === "organizers" && <Organizers mainColor={Colors.Nephritis120} />}
      {icon === "partners" && <Partners mainColor={Colors.Nephritis120} />}
      {icon === "date" && <Date mainColor={Colors.Nephritis120} />}
      {icon === "address" && <Address mainColor={Colors.Nephritis120} />}
      {icon === "price" && <Price mainColor={Colors.Nephritis120} />}
      {icon === "contacts" && <Phone mainColor={Colors.Nephritis120} />}
    </>
  );
};
