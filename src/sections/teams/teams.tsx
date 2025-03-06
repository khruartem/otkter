import { FC, useRef } from "react";

import { TTeamRef, TTeamViewRef } from "../../utils/types";
import { useInView } from "react-intersection-observer";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import { TSectionProps } from "../types";
import { SliderSectionUI } from "../../components/ui/sections/slider-section";

export const Teams: FC<TSectionProps> = ({ sectionRef }) => {
  const { isLaptop, isTablet, isMobile } = useGetMediaQuery();
  const smallResolution = isLaptop || isTablet || isMobile;

  const adminsRef = useRef<HTMLDivElement>(null);
  const artistsRef = useRef<HTMLDivElement>(null);

  const teamsRefs: TTeamRef[] = [
    {
      type: "admins",
      ref: adminsRef,
    },
    {
      type: "artists",
      ref: artistsRef,
    },
  ];

  const [adminsViewRef, inViewAdmins] = useInView({
    threshold: smallResolution ? 0.5 : 1,
  });
  const [artistsViewRef, inViewArtists] = useInView({
    threshold: smallResolution ? 0.5 : 1,
  });

  const teamsViewRefs: TTeamViewRef[] = [
    {
      ref: adminsViewRef,
      inView: inViewAdmins,
      type: "admins",
    },
    {
      ref: artistsViewRef,
      inView: inViewArtists,
      type: "artists",
    },
  ];

  return (
    <SliderSectionUI
      type={"team"}
      sectionRefs={teamsRefs}
      sectionViewRefs={teamsViewRefs}
      ref={sectionRef}
    />
  );
};
