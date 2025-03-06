import React from "react";
import clsx from "clsx";

import {
  Admins,
  Artists,
  Content,
  Design,
  Events,
  Lamp,
  MasterClasses,
  OpenSea,
  SMM,
} from "../../icons/icons";
import { Text } from "../../text";

import { TTabUIProps } from "./types";
import { Colors } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import stylesIcon from "../../icons/icons.module.css";
import stylesTab from "./tab.module.css";

export const TabUI = React.forwardRef<HTMLLIElement, TTabUIProps>(
  ({ tab, current, onClick }, ref) => {
    const { isTablet, isMobile } = useGetMediaQuery();

    return (
      <li ref={ref}>
        {tab === "open-sea" && (
          <OpenSea
            className={clsx(current && stylesIcon.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
          />
        )}
        {tab === "events" && (
          <Events
            className={clsx(current && stylesIcon.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
          />
        )}
        {tab === "design" && (
          <Design
            className={clsx(current && stylesIcon.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
          />
        )}
        {tab === "content" && (
          <Content
            className={clsx(current && stylesIcon.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
          />
        )}
        {tab === "master-class" && (
          <MasterClasses
            className={clsx(current && stylesIcon.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
          />
        )}
        {tab === "lamp" && (
          <Lamp
            className={clsx(current && stylesIcon.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
          />
        )}
        {tab === "smm" && (
          <SMM
            className={clsx(current && stylesIcon.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
          />
        )}
        {tab === "admins" &&
          (isMobile ? (
            <Admins
              className={clsx(current && stylesIcon.tab_active)}
              mainColor={Colors.Nephritis100}
              hoverColor={
                isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
              }
              activeColor={Colors.Navy}
              onClick={onClick}
            />
          ) : (
            <div
              className={clsx(
                stylesTab["tab-wrapper"],
                current && stylesTab["tab-wrapper_active"]
              )}
            >
              <Admins
                className={clsx(
                  stylesTab.tab_labeled,
                  current && stylesIcon.tab_active
                )}
                mainColor={Colors.Nephritis100}
                hoverColor={
                  isTablet || isMobile
                    ? Colors.Nephritis100
                    : Colors.Nephritis120
                }
                activeColor={Colors.Navy}
                onClick={onClick}
              />
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
                {"Руководители"}
              </Text>
            </div>
          ))}
          {tab === "artists" &&
          (isMobile ? (
            <Artists
              className={clsx(current && stylesIcon.tab_active)}
              mainColor={Colors.Nephritis100}
              hoverColor={
                isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
              }
              activeColor={Colors.Navy}
              onClick={onClick}
            />
          ) : (
            <div
              className={clsx(
                stylesTab["tab-wrapper"],
                current && stylesTab["tab-wrapper_active"]
              )}
            >
              <Artists
                className={clsx(
                  stylesTab.tab_labeled,
                  current && stylesIcon.tab_active
                )}
                mainColor={Colors.Nephritis100}
                hoverColor={
                  isTablet || isMobile
                    ? Colors.Nephritis100
                    : Colors.Nephritis120
                }
                activeColor={Colors.Navy}
                onClick={onClick}
              />
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
                {"Творцы"}
              </Text>
            </div>
          ))}
      </li>
    );
  }
);
