import { FC, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { SliderSectionUI } from "../../components/ui/sections/slider-section";

import { useScrollOnMount } from "../../hooks/useScrollOnMount";

import { TTeamRef, TTeamViewRef } from "../../utils/types";

export const Teams: FC = () => {
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

  useScrollOnMount();

  return (
    <SliderSectionUI
      id={"team"}
      type={"team"}
      sectionRefs={teamsRefs}
      sectionViewRefs={teamsViewRefs}
    />
  );
};
