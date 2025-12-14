import { useParams } from "react-router-dom"

export const useGetCode = () => {
  const { code } = useParams();

  return code || "not-found";
}