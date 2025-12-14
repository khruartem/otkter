// import { FC } from "react";
// import { TContentSliderUIProps } from "./types";
// import { TabBarUI } from "../../ui/tab-bar copy";
// import { ContentGrid } from "../../groups-list";
// import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

// import styles from "./content-slider.module.css";
// import clsx from "clsx";
// import { Title } from "../../title/title";

// export const ContentSliderUI: FC<TContentSliderUIProps> = ({
//   tabs,
//   id,
//   title,
//   renderItem,
//   renderTab,
//   onSwitch,
//   currentTab,
//   setCurrentTab,
//   currentIndex,
//   setCurrentIndex,
//   previousIndex,
//   setPreviousIndex,
// }) => {
//   const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
//     useGetMediaQuery();

//   return (
//     <section
//       id={id}
//       className={clsx(
//         styles["content-slider"],
//         (isDesktop || isTablet || isMobile) &&
//           styles["content-slider_small-gap"],
//         (isLarge || isLaptop) && styles["content-slider_large-gap"],
//         isLarge && styles["content-slider_large-screen"]
//       )}
//     >
//       {title ? (
//         <div
//           className={clsx(
//             styles["content-slider__header"],
//             isLarge && [
//               styles["content-slider__header_rowed"],
//               styles["content-slider__header_large"],
//             ]
//           )}
//           // className={clsx(
//           //   styles["content-slider__header"],
//           //   styles["content-slider__header_columned"],
//           //   isLarge && styles["content-slider__header_large"],
//           //   isDesktop && styles["content-slider__header_desktop"],
//           //   isLaptop && styles["content-slider__header_laptop"],
//           //   isTablet && styles["content-slider__header_tablet"],
//           //   isMobile && styles["content-slider__header_mobile"],
//           //   (isLarge || isLaptop) && styles["content-slider__header_large-gap"],
//           //   (isDesktop || isTablet || isMobile) && styles["content-slider__header_middle-gap"],
//           // )}
//         >
//           <Title text={title} />
//           <TabBarUI
//             tabs={tabs}
//             currentTab={currentTab}
//             setCurrentTab={setCurrentTab}
//             currentIndex={currentIndex}
//             setCurrentIndex={setCurrentIndex}
//             setPreviousIndex={setPreviousIndex}
//             onSwitch={onSwitch}
//             renderTab={renderTab}
//           />
//         </div>
//       ) : (
//         <TabBarUI
//           tabs={tabs}
//           currentTab={currentTab}
//           setCurrentTab={setCurrentTab}
//           currentIndex={currentIndex}
//           setCurrentIndex={setCurrentIndex}
//           setPreviousIndex={setPreviousIndex}
//           onSwitch={onSwitch}
//           renderTab={renderTab}
//         />
//       )}
//       <ContentGrid
//         tabs={tabs}
//         currentTab={currentTab}
//         currentIndex={currentIndex}
//         previousIndex={previousIndex}
//         setCurrentTab={setCurrentTab}
//         setCurrentIndex={setCurrentIndex}
//         setPreviousIndex={setPreviousIndex}
//         renderItem={renderItem}
//       />
//     </section>
//   );
// };

// import { FC } from "react";
// import clsx from "clsx";

// // import { Title } from "../../title/title";
// import { ContentSliderGrid } from "../../content-slider-grid";
// // import { Button } from "../../button";

// import { TContentSliderUIProps } from "./types";
// // import { contactFunction } from "../../../utils/contactFunction";

// import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

// import styles from "./content-slider.module.css";
// // import { Section } from "../../section";

// export const ContentSliderUI: FC<TContentSliderUIProps> = (props) => {
//   const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
//     useGetMediaQuery();

//   const {
//     // id,
//     // title,
//     renderTabBar,
//     renderItem,
//     // paddingedTop,
//     // decorated,
//     // headerStyle,
//     children,
//     ...tabBarProps
//   } = props;

//   const {
//     tabs,
//     currentTab,
//     currentIndex,
//     previousIndex,
//     setCurrentTab,
//     setCurrentIndex,
//     setPreviousIndex,
//   } = tabBarProps;

//   // const rowedStyle = clsx(
//   //   styles["content-slider__header"],
//   //   (isLarge || isDesktop || isLaptop) &&
//   //     styles["content-slider__header_rowed"],
//   //   (isTablet || isMobile) && [
//   //     styles["content-slider__header_columned"],
//   //     styles["content-slider__header_small-gap"],
//   //   ],
//   //   isLarge && styles["content-slider__header_large"],
//   //   isDesktop && styles["content-slider__header_desktop"],
//   //   isLaptop && styles["content-slider__header_laptop"],
//   //   isTablet && styles["content-slider__header_tablet"],
//   //   isMobile && styles["content-slider__header_mobile"]
//   // );

//   // const columnedStyle = clsx(
//   //   styles["content-slider__header"],
//   //   styles["content-slider__header_columned"],
//   //   isLarge && styles["content-slider__header_large"],
//   //   isDesktop && styles["content-slider__header_desktop"],
//   //   isLaptop && styles["content-slider__header_laptop"],
//   //   isTablet && styles["content-slider__header_tablet"],
//   //   isMobile && styles["content-slider__header_mobile"],
//   //   (isLarge || isLaptop) && styles["content-slider__header_large-gap"],
//   //   (isDesktop || isTablet || isMobile) &&
//   //     styles["content-slider__header_middle-gap"]
//   // );

//   return (
//     // <section
//     //   id={id}
//     //   className={clsx(
//     //     styles["content-slider"],
//     //     (isDesktop || isTablet || isMobile) &&
//     //       styles["content-slider_small-gap"],
//     //     (isLarge || isLaptop) && styles["content-slider_large-gap"],
//     //     padding === "large" && styles["content-slider_large-padding"],
//     //     padding === "middle" && styles["content-slider_middle-padding"],
//     //     padding === "small" && styles["content-slider_small-padding"]
//     //   )}
//     // >
//     // <Section
//     //   id={id}
//     //   decoration={decorated ? "half" : undefined}
//     //   padding={paddingedTop ? "top" : "block"}
//     //   className={clsx(
//     //     styles["content-slider"],
//     //     (isDesktop || isTablet || isMobile) &&
//     //       styles["content-slider_small-gap"],
//     //     (isLarge || isLaptop) && styles["content-slider_large-gap"]
//     //   )}
//     // >
//     <div
//       className={clsx(
//         styles["content-slider"],
//         (isDesktop || isTablet || isMobile) &&
//           styles["content-slider_small-gap"],
//         (isLarge || isLaptop) && styles["content-slider_large-gap"]
//       )}
//     >
//       {/* {title ? (
//         <div
//           className={clsx(
//             headerStyle === "rowed" && rowedStyle,
//             headerStyle === "columned" && columnedStyle
//           )}
//         >
//           <Title text={title} />
//           {renderTabBar({
//             tabs,
//             items,
//             currentTab,
//             currentIndex,
//             previousIndex,
//             setCurrentTab,
//             setCurrentIndex,
//             setPreviousIndex,
//           })}
//         </div>
//       ) : (
//         renderTabBar({
//           tabs,
//           items,
//           currentTab,
//           currentIndex,
//           previousIndex,
//           setCurrentTab,
//           setCurrentIndex,
//           setPreviousIndex,
//         })
//       )} */}
//       {renderTabBar(tabBarProps)}
//       <ContentSliderGrid
//         tabs={tabs}
//         currentTab={currentTab}
//         currentIndex={currentIndex}
//         previousIndex={previousIndex}
//         setCurrentTab={setCurrentTab}
//         setCurrentIndex={setCurrentIndex}
//         setPreviousIndex={setPreviousIndex}
//         renderItem={renderItem}
//       />
//       {children}
//       {/* </Section> */}
//     </div>
//     // </section>
//   );
// };

import { FC } from "react";
import clsx from "clsx";

import { TabBar } from "../../tab-bar copy";
import { ContentSliderGrid } from "../../content-slider-grid";

import { TContentSliderUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./content-slider.module.css";

export const ContentSliderUI: FC<TContentSliderUIProps> = ({
  tabBarContextValue,
  children,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles["content-slider"],
        (isDesktop || isTablet || isMobile) &&
          styles["content-slider_small-gap"],
        (isLarge || isLaptop) && styles["content-slider_large-gap"]
      )}
    >
      <TabBar contextValue={tabBarContextValue} />
      <ContentSliderGrid />
      {children}
    </div>
  );
};
