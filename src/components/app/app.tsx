import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Main } from "../../pages/main";
import { Modal } from "../modal";
import { ProjectInfoUI } from "../ui/project-info";
import { Slider } from "../slider";

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path={"/otkter"} element={<Main />} />
        <Route
          path={"/otkter/projects/:id"}
          //element={<Modal type="back" onClose={() => navigate("/otkter")}><ProjectInfoUI /></Modal>}
          element={<Modal type="back" onClose={() => {
            // window.location.pathname = '/'
            window.location.assign('/#projects');
          }}><ProjectInfoUI /></Modal>}
        />
        <Route
          path={"/otkter/projects/:id/:photoId"}
          element={<Modal type="close" onClose={() => {
            navigate(`otkter/projects/${location.state?.projectId}`);
          }}><Slider /></Modal>}
        />
      </Routes>
    </>
  );
}

export default App;
