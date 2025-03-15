import { FC, useRef } from "react";

import { TTeamRef, TTeamViewRef } from "../../utils/types";
import { useInView } from "react-intersection-observer";
import { TSectionProps } from "../types";
import { SliderSectionUI } from "../../components/ui/sections/slider-section";
//import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

export const Teams: FC<TSectionProps> = ({ sectionRef }) => {
  const adminsRef = useRef<HTMLDivElement>(null);
  const artistsRef = useRef<HTMLDivElement>(null);
  //const { isMobile } = useGetMediaQuery();

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
    threshold: 0,
  });
  const [artistsViewRef, inViewArtists] = useInView({
    threshold: 0,
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
