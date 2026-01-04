import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { HeaderUI } from "../../components/ui/sections/header";
import { THeaderProps } from "./types";

export const Header: FC<THeaderProps> = ({ animation }) => {
  const location = useLocation();

  const headerRef = useRef<HTMLHeadingElement>(null);

  const [url, setUrl] = useState("");

  useEffect(() => {
    // location.state = { ...location.state };
    switch (location.state?.type) {
      case "projects":
        if (location.state?.id) {
          setUrl(`/#projects-${location.state?.id}`);
        } else {
          setUrl(`/#projects`);
        }
        break;
      case "all-projects":
        setUrl("/projects/all");
        break;
      case "services":
        setUrl("/#services");
        break;
      case "team":
        setUrl("/#team");
        break;
      default:
        setUrl("/");
        break;
    }
  }, [location, url]);

  const onClickLogo = () => {
    if (url === "/" || url === "/projects/all" || url === "") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <HeaderUI
      url={url}
      headerRef={headerRef}
      onClickLogo={onClickLogo}
      animation={animation}
    />
  );
};
