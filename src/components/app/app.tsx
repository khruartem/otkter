import { Route, Routes, useNavigate } from "react-router-dom";
import { Main } from "../../pages/main";
import { Modal } from "../modal";

export function App() {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path={"/otkter"} element={<Main />} />
        <Route
          path={"/otkter/projects/:id"}
          element={<Modal onClose={() => navigate("/otkter#projects")}>Test</Modal>}
        />
      </Routes>
    </>
  );
}

export default App;
