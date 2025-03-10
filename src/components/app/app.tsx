import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Main } from "../../pages/main";
import { Modal } from "../modal";
import { Slider } from "../slider";
import { ProjectInfo } from "../project-info";
import { ServiceInfo } from "../service-info";

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path={"/otkter"} element={<Main />} />
        <Route
          path={"/otkter/projects/:id"}
          element={
            <Modal
              type="back"
              onClose={() => {
                navigate(`/otkter/#projects-${location.state?.id}`);
              }}
            >
              <ProjectInfo />
            </Modal>
          }
        />
        <Route
          path={"/otkter/services/:id"}
          element={
            <Modal
              type="back"
              onClose={() => {
                navigate("/otkter/#services", {state: {from: "services"}});
              }}
            >
              <ServiceInfo />
            </Modal>
          }
        />
        <Route
          path={"/otkter/projects/:id/:photoId"}
          element={
            <Modal
              type="close"
              onClose={() => {
                navigate(`otkter/projects/${location.state?.id}`);
              }}
            >
              <Slider type="projects" />
            </Modal>
          }
        />
        <Route
          path={"/otkter/services/:id/:photoId"}
          element={
            <Modal
              type="close"
              onClose={() => {
                navigate(`otkter/services/${location.state?.id}`);
              }}
            >
              <Slider type="services" />
            </Modal>
          }
        />
      </Routes>
    </>
  );
}

export default App;
