import { useNavigate } from "react-router-dom";

export const useToMain = () => {
  const navigate = useNavigate();

  return () => navigate("/");
};
