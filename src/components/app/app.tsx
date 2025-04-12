import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { Main } from "../../pages/main";
import { AllProjects } from "../../pages/all-projects";
import { Modal } from "../modal";
import { Slider } from "../slider";
import { ProjectInfo } from "../project-info";
import { ServiceInfo } from "../service-info";
import { NotFound404 } from "../../pages/not-found-404";

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Main />} />
        {/* <Route path="/otkter/projects/all/" element={<AllProjects />} /> */}
        <Route path="/projects/all/" element={<AllProjects />} />
        <Route
          // path={"/otkter/projects/:id"}
          path={"/projects/:id"}
          element={
            <Modal
              type="back"
              onClose={() => {
                if (location.state?.from) {
                  navigate(
                    //location.state?.from === "/otkter/"
                    location.state?.from === "/"
                      ? `${location.state?.from}#projects-${location.state?.id}`
                      : `${location.state?.from}`
                  );
                } else {
                  navigate("/");
                }
              }}
            >
              <ProjectInfo />
            </Modal>
          }
        />
        <Route
          // path={"/otkter/services/:id"}
          path={"/services/:id"}
          element={
            <Modal
              type="back"
              onClose={() => {
                // navigate("/otkter/#services", { state: { from: "services" } });
                navigate("/#services", { state: { from: "services" } });
              }}
            >
              <ServiceInfo />
            </Modal>
          }
        />
        <Route
          // path={"/otkter/projects/:id/:photoId"}
          path={"/projects/:id/:photoId"}
          element={
            <Modal
              type="close"
              onClose={() => {
                // navigate(`otkter/projects/${location.state?.id}`, { state: {...location.state }});
                if (location.state?.id) {
                  navigate(`/projects/${location.state?.id}`, {
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
          // path={"/otkter/services/:id/:photoId"}
          path={"/services/:id/:photoId"}
          element={
            <Modal
              type="close"
              onClose={() => {
                //navigate(`otkter/services/${location.state?.id}`);
                if (location.state?.id) {
                  navigate(`/services/${location.state?.id}`, {
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
          path="*"
          element={<NotFound404 />}
        />
      </Routes>
    </>
  );
}

export default App;
