import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { Main } from "../../pages/main";
import { AllProjects } from "../../pages/all-projects";
import { Modal } from "../modal";
import { Slider } from "../slider";
import { ProjectInfo } from "../../pages/project-info";
import { ServiceInfo } from "../../pages/service-info";
import { NotFound404 } from "../../pages/not-found-404";
import { TeamInfo } from "../../pages/team-info";

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path="/projects/all" element={<AllProjects />} />
        <Route path={"/projects/:code"} element={<ProjectInfo />} />
        <Route path={"/services/:code"} element={<ServiceInfo />} />
        <Route path={"/team/admins/:code"} element={<TeamInfo />} />
        <Route
          path={"/projects/:code/:photoId"}
          element={
            <Modal
              type="close"
              onClose={() => {
                if (location.state?.url) {
                  navigate(`/projects/${location.state?.url}`, {
                    state: { ...location.state },
                  });
                } else {
                  navigate("/");
                }
              }}
            >
              <Slider type="projects" />
            </Modal>
          }
        />
        <Route
          path={"/services/:code/:photoId"}
          element={
            <Modal
              type="close"
              onClose={() => {
                if (location.state?.url) {
                  navigate(`/services/${location.state?.url}`, {
                    state: { ...location.state },
                  });
                } else {
                  navigate("/");
                }
              }}
            >
              <Slider type="services" />
            </Modal>
          }
        />
        <Route
          path={"/team/admins/:code/:photoId"}
          element={
            <Modal
              type="close"
              onClose={() => {
                if (location.state?.url) {
                  navigate(`/team/admins/${location.state?.url}`, {
                    state: { ...location.state },
                  });
                } else {
                  navigate("/");
                }
              }}
            >
              <Slider type="team" />
            </Modal>
          }
        />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
