// import { FC } from "react";
// import { useLocation } from "react-router-dom";

// import { Modal } from "../modal";
// import { ShowHistoryUI } from "../ui/show-history";

// import { TShowHistoryProps } from "./types";

// export const ShowHistory: FC<TShowHistoryProps> = ({ history, controls }) => {
//   const location = useLocation();

//   const pastShows = history.filter((item) => !item.current);
//   const currentShow = history.find((item) => item.current)!;

//   const handleCloseModal = () => {
//     console.log(location);
//   };

//   return (
//     <Modal type={"close"} onClose={handleCloseModal}>
//       <ShowHistoryUI
//         pastShows={pastShows}
//         currentShow={currentShow}
//         controls={controls}
//       />
//     </Modal>
//   );
// };

import { FC } from "react";

import { ShowHistoryUI } from "../ui/show-history";

import { TShowHistoryProps } from "./types";

export const ShowHistory: FC<TShowHistoryProps> = ({ history, controls }) => {
  const pastShows = history.filter((item) => !item.current);
  const currentShow = history.find((item) => item.current)!;

  return (
    <ShowHistoryUI
      pastShows={pastShows}
      currentShow={currentShow}
      controls={controls}
    />
  );
};
