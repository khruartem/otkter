// import { FC, useState } from "react";
// import { TCardType } from "../../utils/types";
// import { TContentSliderProps } from "./types";
// import { onlyUnique } from "../../utils/onlyUnique";
// import { ContentSliderUI } from "../ui/content-slider copy";

// export const ContentSlider: FC<TContentSliderProps> = ({
//   id,
//   items,
//   title,
//   firstTab,
//   lastTab,
//   renderItem,
//   renderTab,
// }) => {
//   const tabsUnsorted = items.map((item) => {
//     return item.type;
//   });

//   const tabs = tabsUnsorted.filter(onlyUnique);

//   if (firstTab) tabs.unshift(firstTab);
//   if (lastTab) tabs.push(lastTab);

//   // const itemsUnique = items.filter(onlyUnique);
//   // console.log(tabs);
//   // console.log(items)

//   const [currentTab, setCurrentTab] = useState<TCardType>(tabs[0]);
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [previousIndex, setPreviousIndex] = useState<number>(0);

//   // console.log(currentTab, currentIndex)

//   const onSwitch: (index: number) => void = (index: number) => {
//     setPreviousIndex(currentIndex);

//     if (index > tabs.length - 1) {
//       setCurrentIndex(0);
//       setCurrentTab(tabs[0]);
//     } else if (index < 0) {
//       setCurrentIndex(tabs.length - 1);
//       setCurrentTab(tabs[tabs.length - 1]);
//     } else {
//       setCurrentIndex(index);
//       setCurrentTab(tabs[index]);
//     }
//   };

//   return (
//     <ContentSliderUI
//       id={id}
//       tabs={tabs}
//       title={title}
//       onSwitch={onSwitch}
//       currentTab={currentTab}
//       currentIndex={currentIndex}
//       previousIndex={previousIndex}
//       setCurrentTab={setCurrentTab}
//       setCurrentIndex={setCurrentIndex}
//       setPreviousIndex={setPreviousIndex}
//       renderTab={renderTab}
//       renderItem={renderItem}
//     />
//   );
// };

import { FC, useState } from "react";

import { ContentSliderUI } from "../ui/content-slider copy";

import { TContentSliderProps } from "./types";

import { TCardType } from "../../utils/types";
import { onlyUnique } from "../../utils/onlyUnique";

export const ContentSlider: FC<TContentSliderProps> = ({
  // id,
  items,
  // title,
  firstTab,
  lastTab,
  renderItem,
  renderTabBar,
  // paddingedTop,
  // decorated,
  // headerStyle,
  children,
}) => {
  const tabsUnsorted = items.map((item) => {
    return item.type;
  });

  const tabs = tabsUnsorted.filter(onlyUnique);

  if (firstTab) tabs.unshift(firstTab);
  if (lastTab) tabs.push(lastTab);

  const [currentTab, setCurrentTab] = useState<TCardType>(tabs[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [previousIndex, setPreviousIndex] = useState<number>(0);

  return (
    <ContentSliderUI
      // id={id}
      tabs={tabs}
      // title={title}
      items={items}
      currentTab={currentTab}
      currentIndex={currentIndex}
      previousIndex={previousIndex}
      setCurrentTab={setCurrentTab}
      setCurrentIndex={setCurrentIndex}
      setPreviousIndex={setPreviousIndex}
      renderTabBar={renderTabBar}
      renderItem={renderItem}
      // paddingedTop={paddingedTop}
      // decorated={decorated}
      // headerStyle={headerStyle}
      children={children}
    />
  );
};
