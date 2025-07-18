import { useNavigate, useLocation } from "react-router-dom";
import { TEmployee, TProject, TService, TSliderSectionType } from "../utils/types";

export const useGetOnSwitch = <T extends TProject | TService | TEmployee>(
  arr: T[],
  setIndex: (value: React.SetStateAction<number>) => void,
  setCurrent: (value: React.SetStateAction<T>) => void,
  type: TSliderSectionType
) => {
  const navigate = useNavigate();
  const location = useLocation();
  const baseUrl = type === "team" ? "team/admins" : type;

  const onSwitch: (arg: number) => void = (index: number) => {
    if (index > arr.length - 1) {
      setIndex(0);
      setCurrent(arr[0]);
      navigate(`/${baseUrl}/${arr[0].url}/`, {
        state: {
          ...location.state,
          id: arr[0].id,
          url: arr[0].url,
        },
      });
    } else if (index < 0) {
      setIndex(arr.length - 1);
      setCurrent(arr[arr.length - 1]);
      navigate(`/${baseUrl}/${arr[arr.length - 1].url}/`, {
        state: {
          ...location.state,
          id: arr[arr.length - 1].id,
          url: arr[arr.length - 1].url,
        },
      });
    } else {
      setIndex(index);
      setCurrent(arr[index]);
      navigate(`/${baseUrl}/${arr[index].url}/`, {
        state: {
          ...location.state,
          id: arr[index].id,
          url: arr[index].url,
        },
      });
    }
  };

  return onSwitch;
};
