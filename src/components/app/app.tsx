import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { ScrollToTop } from "../scroll-to-top";
import { Main } from "../../pages/main";
import { AllProjects } from "../../pages/all-projects";
import { Modal } from "../modal";
import { PhotoSlider } from "../photo-slider";
import { Project } from "../../pages/project";
import { Service } from "../../pages/service";
import { Employee } from "../../pages/employee";
import { NotFound404 } from "../../pages/not-found-404";
import { Merch } from "../../pages/merch";
import { MerchItem } from "../../pages/merch-item";

export function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleCloseModal = () => {
    return location.state?.url
      ? navigate(`${location.state?.url}`)
      : navigate("/");
  };

  return (
    <ScrollToTop>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path="/projects/all" element={<AllProjects />} />
        <Route path="/merch" element={<Merch />} />
        <Route path={"/projects/:code"} element={<Project />} />
        <Route path={"/services/:code"} element={<Service />} />
        <Route path={"/team/admins/:code"} element={<Employee />} />
        <Route path={"/merch/:type/:code"} element={<MerchItem />} />
        <Route
          path={"/projects/:code/:photoId"}
          element={
            <Modal type="close" onClose={handleCloseModal}>
              <PhotoSlider type="projects" />
            </Modal>
          }
        />
        <Route
          path={"/services/:code/:photoId"}
          element={
            <Modal type="close" onClose={handleCloseModal}>
              <PhotoSlider type="services" />
            </Modal>
          }
        />
        <Route
          path={"/team/admins/:code/:photoId"}
          element={
            <Modal type="close" onClose={handleCloseModal}>
              <PhotoSlider type="team" />
            </Modal>
          }
        />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
