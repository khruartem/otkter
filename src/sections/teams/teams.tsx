import { FC, useRef } from "react";

import { TTeamRef, TTeamViewRef } from "../../utils/types";
import { useInView } from "react-intersection-observer";
import { TSectionProps } from "../types";
import { SliderSectionUI } from "../../components/ui/sections/slider-section";

export const Teams: FC<TSectionProps> = ({ sectionRef }) => {
  const adminsRef = useRef<HTMLUListElement>(null);
  const artistsRef = useRef<HTMLUListElement>(null);

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
    threshold: 0.5,
    trackVisibility: false,
  });
  const [artistsViewRef, inViewArtists] = useInView({
    threshold: 0.5,
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
