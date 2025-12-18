import { FC } from "react";
import clsx from "clsx";

import { InfoTitleUI } from "../../info-title";
import { InfoNavigationUI } from "../../info-navigation";
import { InfoTextUI } from "../../info-text";
import { InfoPosterUI } from "../../info-poster";
import { Controls } from "../../../controls copy";
import { MainLayout } from "../../../../layouts/main-layout";
import { PhotoList } from "../../../photo-list";
import { DetailsGrid } from "../../../details-grid";
import { CtaUI } from "../../cta";
import { ShowHistoryPreview } from "../../../show-history-preview";

import { TInfoUIProps } from "./types";

import { TEmployee } from "../../../../utils/types/team";
import { TProject } from "../../../../utils/types/projects";
import { TService } from "../../../../utils/types/services";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./info.module.css";

export const InfoUI: FC<TInfoUIProps> = ({
  currentItem,
  currentIndex,
  items,
  color,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const renderInfoCTA = (item: TProject | TService | TEmployee) => {
    if (item.kind === "projects") {
      if (item?.controls && !item?.showHistory) {
        return <Controls controls={item.controls} kind={item.kind} />;
      } else if (item?.controls && item?.showHistory) {
        return (
          <CtaUI controls={item.controls} kind={item.kind}>
            <ShowHistoryPreview
              history={item.showHistory}
              controls={item.controls}
            />
          </CtaUI>
        );
      } else if (!item?.controls && !item?.showHistory) {
        return undefined;
      }
    } else {
      if (item?.controls) {
        return <Controls controls={item.controls} kind={item.kind} />;
      } else {
        return undefined;
      }
    }
  };

  return (
    <MainLayout
      className={clsx(
        !currentItem?.details &&
          (isLaptop || isDesktop) &&
          styles["main_info-details"]
      )}
    >
      <InfoNavigationUI
        currentItem={currentItem}
        currentIndex={currentIndex}
        items={items}
        tabsGap={clsx(
          isLarge && "1.012vw",
          isDesktop && "0.857vw",
          isLaptop && "1.0635vw",
          isTablet && "6.0274vw",
          isMobile && "1.69vw"
        )}
      />
      <div
        className={clsx(
          styles["info-content"],
          (isLarge || isDesktop) && styles["info-content_middle-gap"],
          isLaptop && styles["info-content_small-gap"],
          (isTablet || isMobile) && styles["info-content_large-gap"]
        )}
      >
        <div
          className={clsx(
            styles["info-about"],
            isLaptop && styles["info-about_laptop"],
            (isTablet || isMobile) && styles["info-about_small-resolution"]
          )}
        >
          <div
            className={clsx(
              styles["info-core"],
              isLarge && styles["info-core_lagre"],
              isDesktop && styles["info-core_desktop"],
              isLaptop && styles["info-core_laptop"],
              isLaptop &&
                !currentItem?.poster &&
                styles["info-core_laptop_spaned"],
              isTablet && styles["info-core_tablet"],
              isMobile && styles["info-core_mobile"]
            )}
          >
            <div
              className={clsx(
                styles["info-description"],
                isLarge
                  ? styles["info-description_large-resolution"]
                  : styles["info-description_small-resolution"]
              )}
            >
              <InfoTitleUI
                title={currentItem.title}
                extraTitle={currentItem.extraText}
                color={color}
              />
              {currentItem?.text ? (
                <InfoTextUI text={currentItem.text} />
              ) : (
                <InfoTextUI text={currentItem.shortText} />
              )}
              {currentItem?.photos && (
                <PhotoList
                  itemKind={currentItem.kind}
                  photos={currentItem.photos}
                />
              )}
            </div>
            {!isLaptop && renderInfoCTA(currentItem)}
          </div>
          {currentItem?.poster && (
            <InfoPosterUI
              poster={currentItem.poster}
              className={clsx(
                currentItem.kind === "services" &&
                  styles["info-poster_services"]
              )}
            />
          )}
          {isLaptop && renderInfoCTA(currentItem)}
        </div>
        {currentItem?.details && currentItem?.categories && (
          <DetailsGrid
            details={currentItem.details}
            categories={currentItem.categories}
          />
        )}
      </div>
    </MainLayout>
  );
};
