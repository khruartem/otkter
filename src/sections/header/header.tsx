import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { HeaderUI } from "../../components/ui/sections/header";

export const Header: FC = () => {
  const location = useLocation();

  const headerRef = useRef<HTMLHeadingElement>(null);

  const [url, setUrl] = useState("");

  useEffect(() => {
    // location.state = { ...location.state };
    switch (location.state?.type) {
      case "project":
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
      location={location}
    />
  );
};
