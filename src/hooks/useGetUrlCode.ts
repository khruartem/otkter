import { useParams } from "react-router-dom"

export const useGetUrlCode = () => {
  const { code } = useParams();

  return code || "not-found";
}