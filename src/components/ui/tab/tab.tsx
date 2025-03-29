import React, { SyntheticEvent } from "react";
import clsx from "clsx";

import {
  Admins,
  All,
  Artists,
  Content,
  Contest,
  Design,
  Events,
  Lamp,
  MasterClass,
  OpenSea,
  Play,
  ShortFilm,
  SMM,
} from "../../icons/icons";
import { Text } from "../../text";

import { TTabUIProps } from "./types";
import { Colors } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./tab.module.css";

export const TabUI = React.forwardRef<HTMLLIElement, TTabUIProps>(
  ({ tab, isMainPage, current, onClick, onMouseEnter, onMouseLeave }, ref) => {
    const { isLarge, isTablet, isMobile } = useGetMediaQuery();

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
        {tab === "master-class" && isMainPage && (
          <MasterClass
            className={clsx(current && styles.tab_active)}
            iconType="tab"
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
        {tab === "master-class" &&
          !isMainPage &&
          (!isLarge ? (
            <MasterClass
              className={clsx(current && styles.tab_active)}
              iconType="tab"
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
              <MasterClass
                className={clsx(
                  styles.tab_labeled,
                  current && styles.tab_active
                )}
                iconType="tab"
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
                {"Мастер-класс"}
              </Text>
            </div>
          ))}
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
        {tab === "all" &&
          !isMainPage &&
          (!isLarge ? (
            <All
              className={clsx(current && styles.tab_active)}
              iconType="tab"
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
              <All
                className={clsx(
                  styles.tab_labeled,
                  current && styles.tab_active
                )}
                iconType="tab"
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
                {"Все"}
              </Text>
            </div>
          ))}
        {tab === "play" &&
          !isMainPage &&
          (!isLarge ? (
            <Play
              className={clsx(current && styles.tab_active)}
              iconType="tab"
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
              <Play
                className={clsx(
                  styles.tab_labeled,
                  current && styles.tab_active
                )}
                iconType="tab"
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
                {"Спектакль"}
              </Text>
            </div>
          ))}
        {tab === "contest" &&
          !isMainPage &&
          (!isLarge ? (
            <Contest
              className={clsx(current && styles.tab_active)}
              iconType="tab"
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
              <Contest
                className={clsx(
                  styles.tab_labeled,
                  current && styles.tab_active
                )}
                iconType="tab"
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
                {"Конкурс"}
              </Text>
            </div>
          ))}
        {tab === "short-film" &&
          !isMainPage &&
          (!isLarge ? (
            <ShortFilm
              className={clsx(current && styles.tab_active)}
              iconType="tab"
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
              <ShortFilm
                className={clsx(
                  styles.tab_labeled,
                  current && styles.tab_active
                )}
                iconType="tab"
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
                {"Короткий метр"}
              </Text>
            </div>
          ))}
      </li>
    );
  }
);
