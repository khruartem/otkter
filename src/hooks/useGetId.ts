import { useParams } from "react-router-dom";

export const useGetId = () => {
  const { id } = useParams<{ id: string }>();

  return Number(id);
}