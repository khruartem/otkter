import React, { SyntheticEvent } from "react";
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

import styles from "./tab.module.css";

export const TabUI = React.forwardRef<HTMLLIElement, TTabUIProps>(
  ({ tab, current, onClick, onMouseEnter, onMouseLeave }, ref) => {
    const { isTablet, isMobile } = useGetMediaQuery();

    return (
      <li ref={ref}>
        {tab === "open-sea" && (
          <OpenSea
            className={clsx(current && styles.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
            onMouseEnter={(e: SyntheticEvent) => {
              onMouseEnter(e, styles["tab_active"], styles["tab_hover"]);
            }}
            onMouseLeave={(e: SyntheticEvent) => {
              onMouseLeave(e, styles["tab_hover"]);
            }}
          />
        )}
        {tab === "events" && (
          <Events
            className={clsx(current && styles.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
            onMouseEnter={(e: SyntheticEvent) => {
              onMouseEnter(e, styles["tab_active"], styles["tab_hover"]);
            }}
            onMouseLeave={(e: SyntheticEvent) => {
              onMouseLeave(e, styles["tab_hover"]);
            }}
          />
        )}
        {tab === "design" && (
          <Design
            className={clsx(current && styles.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
            onMouseEnter={(e: SyntheticEvent) => {
              onMouseEnter(e, styles["tab_active"], styles["tab_hover"]);
            }}
            onMouseLeave={(e: SyntheticEvent) => {
              onMouseLeave(e, styles["tab_hover"]);
            }}
          />
        )}
        {tab === "content" && (
          <Content
            className={clsx(current && styles.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
            onMouseEnter={(e: SyntheticEvent) => {
              onMouseEnter(e, styles["tab_active"], styles["tab_hover"]);
            }}
            onMouseLeave={(e: SyntheticEvent) => {
              onMouseLeave(e, styles["tab_hover"]);
            }}
          />
        )}
        {tab === "master-class" && (
          <MasterClasses
            className={clsx(current && styles.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
            onMouseEnter={(e: SyntheticEvent) => {
              onMouseEnter(e, styles["tab_active"], styles["tab_hover"]);
            }}
            onMouseLeave={(e: SyntheticEvent) => {
              onMouseLeave(e, styles["tab_hover"]);
            }}
          />
        )}
        {tab === "lamp" && (
          <Lamp
            className={clsx(current && styles.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
            onMouseEnter={(e: SyntheticEvent) => {
              onMouseEnter(e, styles["tab_active"], styles["tab_hover"]);
            }}
            onMouseLeave={(e: SyntheticEvent) => {
              onMouseLeave(e, styles["tab_hover"]);
            }}
          />
        )}
        {tab === "smm" && (
          <SMM
            className={clsx(current && styles.tab_active)}
            mainColor={Colors.Nephritis100}
            hoverColor={
              isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
            }
            activeColor={Colors.Navy}
            onClick={onClick}
            onMouseEnter={(e: SyntheticEvent) => {
              onMouseEnter(e, styles["tab_active"], styles["tab_hover"]);
            }}
            onMouseLeave={(e: SyntheticEvent) => {
              onMouseLeave(e, styles["tab_hover"]);
            }}
          />
        )}
        {tab === "admins" &&
          (isMobile ? (
            <Admins
              className={clsx(current && styles.tab_active)}
              mainColor={Colors.Nephritis100}
              hoverColor={
                isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
              }
              activeColor={Colors.Navy}
              onClick={onClick}
              onMouseEnter={(e: SyntheticEvent) => {
                onMouseEnter(e, styles["tab_active"], styles["tab_hover"]);
              }}
              onMouseLeave={(e: SyntheticEvent) => {
                onMouseLeave(e, styles["tab_hover"]);
              }}
            />
          ) : (
            <div
              className={clsx(
                styles["tab-wrapper"],
                current && styles["tab-wrapper_active"]
              )}
              onClick={onClick}
              onMouseEnter={(e: SyntheticEvent) => {
                onMouseEnter(e, styles["tab-wrapper_active"], styles["tab-wrapper_hover"]);
              }}
              onMouseLeave={(e: SyntheticEvent) => {
                onMouseLeave(e, styles["tab-wrapper_hover"]);
              }}
            >
              <Admins
                className={clsx(
                  styles.tab_labeled,
                  current && styles.tab_active
                )}
                mainColor={Colors.Nephritis100}
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
              className={clsx(current && styles.tab_active)}
              mainColor={Colors.Nephritis100}
              hoverColor={
                isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
              }
              // hoverColor={
              //   Colors.Nephritis120
              // }
              activeColor={Colors.Navy}
              onClick={onClick}
              onMouseEnter={(e: SyntheticEvent) => {
                onMouseEnter(e, styles["tab_active"], styles["tab_hover"]);
              }}
              onMouseLeave={(e: SyntheticEvent) => {
                onMouseLeave(e, styles["tab_hover"]);
              }}
            />
          ) : (
            <div
              className={clsx(
                styles["tab-wrapper"],
                current && styles["tab-wrapper_active"]
              )}
              onClick={onClick}
              onMouseEnter={(e: SyntheticEvent) => {
                onMouseEnter(e, styles["tab-wrapper_active"], styles["tab-wrapper_hover"]);
              }}
              onMouseLeave={(e: SyntheticEvent) => {
                onMouseLeave(e, styles["tab-wrapper_hover"]);
              }}
            >
              <Artists
                className={clsx(
                  styles.tab_labeled,
                  current && styles.tab_active
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
