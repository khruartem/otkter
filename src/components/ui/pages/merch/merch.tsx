import { FC } from "react";
import clsx from "clsx";

import { Page } from "../../../page";
import { MerchItemList } from "../../../merch-item-list";
import { Title } from "../../../title";
import { Section } from "../../../section";

import { TMerchUIProps } from "./types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./merch.module.css";

export const MerchUI: FC<TMerchUIProps> = ({ pageProps }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const { seo, layout } = pageProps;

  return (
    <Page
      seo={seo}
      layout={{
        ...layout,
        className: clsx(
          (isLarge || isLaptop) && styles["main_large-margin"],
          (isDesktop || isTablet || isMobile) && styles["main_small-margin"]
        ),
      }}
    >
      <Section
        decoration={"half"}
        padding={"inline"}
        className={clsx(
          styles["section_merch"],
          (isLarge || isLaptop) && styles["section_large-gap"],
          (isDesktop || isTablet || isMobile) && styles["section_small-gap"]
        )}
      >
        <Title text="мерч" />
        <MerchItemList type="all" />
      </Section>
    </Page>
  );
};
