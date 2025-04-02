import { FC, memo, useEffect, useState } from "react";
// import { FC, memo } from "react";
import { TeamUI } from "../ui/team";
import { TTeamProps } from "./type";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import { useGetViewRefByType } from "../../hooks/useGetViewRefByType";
// import { useGetTeamColumns } from "../../hooks/useGetTeamColumns";

export const Team: FC<TTeamProps> = memo(({
  team,
  teamRef,
  teamsViewRefs,
  type,
  minTeamLength,
}) => {
  // const teamViewRef = teamsViewRefs.find(
  //   (viewRef) => viewRef.type === type
  // )?.ref;
  const teamViewRef = useGetViewRefByType(teamsViewRefs, type);

  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useGetMediaQuery();
  const [columnsCount, setColumnsCount] = useState(0);

  // const columnsCount = useGetTeamColumns(team);
  // let columnsCount = 1;
  // if (team.length < 5) {
  //   if (isLarge) return columnsCount = team.length;
  //   else if (isMobile) columnsCount = 1;
  //   else columnsCount = 2;
  // } else {
  //   if (isLarge) columnsCount = 5;
  //   else if (isDesktop) columnsCount = 3;
  //   else if (isLaptop) columnsCount = 3;
  //   else if (isTablet) columnsCount = 2;
  //   else if (isMobile) columnsCount = 1;
  // }

  const containerHeight = (minTeamLength && !isMobile)
    ? `calc(${Math.ceil(minTeamLength / columnsCount)} * 486px + ${
        Math.ceil(minTeamLength / columnsCount) - 1
      } * 24px)`
    : undefined;

  useEffect(() => {
    if (team.length < 5) {
      if (isLarge) setColumnsCount(team.length);
      else if (isMobile) setColumnsCount(1);
      else setColumnsCount(2);
    } else {
      if (isLarge) setColumnsCount(5);
      else if (isDesktop) setColumnsCount(3);
      else if (isLaptop) setColumnsCount(3);
      else if (isTablet) setColumnsCount(2);
      else if (isMobile) setColumnsCount(1);
    }
  }, [isLarge, isMobile, isDesktop, isLaptop, isTablet, team.length]);

  return (
    <TeamUI
      team={team}
      type={type}
      teamRef={teamRef}
      // columnsCount={columnsCount}
      containerHeight={containerHeight}
      ref={teamViewRef}
    />
  );
});
