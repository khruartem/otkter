import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderUI } from "../../components/ui/sections/header";

export const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickLogo = () => {
    if (location.state?.type) {
      switch (location.state?.type) {
        case "projects":
          navigate(`/#projects-${location.state?.id}`);
          break;
        case "all-projects":
          navigate("/projects/all");
          break;
        case "services":
          navigate(`/#services`);
          break;
        default:
          navigate("/");
          window.scrollTo({ top: 0, behavior: "instant" });
          break;
      }
    } else {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  useEffect(() => {
    location.state = { ...location.state };
  });

  return <HeaderUI onClickLogo={onClickLogo} />;
};
