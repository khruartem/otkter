import { FC } from "react";

import { SectionUI } from "../ui/section";

import { TSectionProps } from "./types";

export const Section: FC<TSectionProps> = ({
  id,
  children,
  decoration,
  padding,
  className,
  contentDirection,
  unsetDefaultStyle
}) => {
  return (
    <SectionUI
      id={id}
      decoration={decoration}
      padding={padding}
      children={children}
      className={className}
      contentDirection={contentDirection}
      unsetDefaultStyle={unsetDefaultStyle}
    />
  );
};
