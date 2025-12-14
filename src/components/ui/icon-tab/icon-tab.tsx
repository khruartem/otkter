import React, { SyntheticEvent } from "react";
import { Text } from "../../text";
import { Colors, ItemOTType } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { TIconTabUIProps } from "./types";
// import React from "react";
import styles from "./icon-tab.module.css";
import clsx from "clsx";
import { TItemOTType } from "../../../utils/types/common";

// export const IconTabUI: FC<TIconTabUIProps> = ({
//   children,
//   type,
//   tab,
//   current,
//   ref,
//   onClick,
//   isMainPage,
//   onMouseEnter,
//   onMouseLeave,
// }) => {
export const IconTabUI = React.forwardRef<HTMLLIElement, TIconTabUIProps>(
  (
    { tab, titled, current, onClick, children, onMouseEnter, onMouseLeave },
    ref
  ) => {
    const { isLarge, isMobile } = useGetMediaQuery();

    const renderTab = (screenResolution?: boolean) => {
      if (screenResolution === undefined) {
        return renderIconTab();
      } else {
        return screenResolution ? renderLabeledTab() : renderIconTab();
      }
    };

    const renderIconTab = () => {
      return (
        <li
          ref={ref}
          className={clsx(styles.tab, current && styles.tab_active)}
          onClick={onClick}
          onMouseEnter={(e: SyntheticEvent) => {
            onMouseEnter(e, styles["tab_active"], styles["tab_hover"]);
          }}
          onMouseLeave={(e: SyntheticEvent) => {
            onMouseLeave(e, styles["tab_hover"]);
          }}
        >
          {children}
        </li>
      );
    };

    const renderLabeledTab = () => {
      return (
        <div
          className={clsx(
            styles["tab-wrapper"],
            // styles.tab_labeled,
            current && [styles["tab-wrapper_active"], styles.tab_active]
          )}
          onClick={onClick}
          onMouseEnter={(e: SyntheticEvent) => {
            onMouseEnter(
              e,
              styles["tab-wrapper_active"],
              styles["tab-wrapper_hover"]
            );
          }}
          onMouseLeave={(e: SyntheticEvent) => {
            onMouseLeave(e, styles["tab-wrapper_hover"]);
          }}
        >
          {children}
          <Text
            as="label"
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={18}
            fontWeight={500}
            lineHeight={28}
            textTransform="none"
            color={current ? Colors.Navy : Colors.Nephritis100}
            decorated={false}
          >
            {ItemOTType[tab as TItemOTType]}
          </Text>
        </div>
      );
    };

    if (titled === true) {
      return renderTab(!isMobile);
    } else if (titled === false) {
      return renderTab();
    } else {
      return renderTab(isLarge);
    }
  }
);

// return titled ? (
//   <div
//     className={clsx(
//       styles["tab-wrapper"],
//       styles.tab_labeled,
//       current && [styles["tab-wrapper_active"], styles.tab_active]
//     )}
//     onClick={onClick}
//     onMouseEnter={(e: SyntheticEvent) => {
//       onMouseEnter(
//         e,
//         styles["tab-wrapper_active"],
//         styles["tab-wrapper_hover"]
//       );
//     }}
//     onMouseLeave={(e: SyntheticEvent) => {
//       onMouseLeave(e, styles["tab-wrapper_hover"]);
//     }}
//   >
//     {children}
//     <Text
//       as="label"
//       fontFamily="Unbounded"
//       textAlign="center"
//       fontSize={18}
//       fontWeight={500}
//       lineHeight={28}
//       textTransform="none"
//       color={current ? Colors.Navy : Colors.Nephritis100}
//       decorated={false}
//     >
//       {CardType[tab]}
//     </Text>
//   </div>
// ) : (
//   <li
//     ref={ref}
//     className={clsx(current && styles.tab_active)}
//     onClick={onClick}
//     onMouseEnter={(e: SyntheticEvent) => {
//       onMouseEnter(e, styles["tab_active"], styles["tab_hover"]);
//     }}
//     onMouseLeave={(e: SyntheticEvent) => {
//       onMouseLeave(e, styles["tab_hover"]);
//     }}
//   >
//     {children}
//   </li>
// );
