import { Route, Routes, useNavigate } from "react-router-dom";
import { Main } from "../../pages/main";
import { Modal } from "../modal";
import { ProjectInfoUI } from "../ui/project-info";
import { Slider } from "../slider";

export function App() {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path={"/otkter"} element={<Main />} />
        <Route
          path={"/otkter/projects/:id"}
          element={<Modal type="back" onClose={() => navigate("/otkter")}><ProjectInfoUI /></Modal>}
        />
        <Route
          path={"/otkter/projects/:id/:photoId"}
          element={<Modal type="close" onClose={() => navigate(-1)}><Slider /></Modal>}
        />
      </Routes>
    </>
  );
}

export default App;
