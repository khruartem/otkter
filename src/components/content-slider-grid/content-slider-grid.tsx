// import { FC, SyntheticEvent } from "react";

// import { TContentSliderGridProps } from "./types";
// import { ContentSliderGridUI } from "../ui/content-slider-grid";

// export const ContentSliderGrid: FC<TContentSliderGridProps> = ({
//   tabs,
//   currentTab,
//   currentIndex,
//   previousIndex,
//   setCurrentTab,
//   setCurrentIndex,
//   setPreviousIndex,
//   renderItem,
// }) => {
//   const onScrollItem = (e: SyntheticEvent) => {
//     const { scrollLeft, clientWidth } = e.currentTarget;

//     let index = 0;
//     while (index <= tabs.length) {
//       // console.log(scrollLeft, clientWidth * index, clientWidth * (index + 1));
//       if (
//         scrollLeft >= clientWidth * index &&
//         scrollLeft <= clientWidth * (index + 1)
//       ) {
//         if (currentTab === tabs[previousIndex] && currentTab !== tabs[index]) {
//           setPreviousIndex(index);
//           setCurrentTab(tabs[index]);
//           setCurrentIndex(index);
//         } else {
//           setPreviousIndex(index);
//         }
//         // console.log(currentTab, tabs[index], tabs[previousIndex]);
//         break;
//       } else index++;
//     }
//   };

//   return (
//     <ContentSliderGridUI
//       tabs={tabs}
//       currentTab={currentTab}
//       currentIndex={currentIndex}
//       previousIndex={previousIndex}
//       setCurrentTab={setCurrentTab}
//       setCurrentIndex={setCurrentIndex}
//       renderItem={renderItem}
//       onScrollItem={onScrollItem}
//     />
//   );
// };

import { FC } from "react";

import { ContentSliderGridUI } from "../ui/content-slider-grid";

import { useContentSliderContext } from "../../hooks/contexts/useContentSliderContext";

export const ContentSliderGrid: FC = () => {
  const { tabs, onScrollItem } = useContentSliderContext();

  return <ContentSliderGridUI tabs={tabs} onScrollItem={onScrollItem} />;
};
