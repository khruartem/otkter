import clsx from "clsx";

// import { ImageUI } from "../../components/image";

import nagatino from "../../assets/partners/nagatino.png";
import uao from "../../assets/partners/uao.png";
import cao from "../../assets/partners/cao.png";
import nicolai from "../../assets/partners/nicolai.png";
import prosvet from "../../assets/partners/prosvet.png";
import vershyna from "../../assets/partners/vershyna.png";
import minpros from "../../assets/partners/minpros.png";

import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

import styles from "./partners.module.css";
import { Section } from "../../components/section";

export const Partners = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <Section id="partners">
      <ul
        className={clsx(
          styles.partners,
          isLarge && styles.partners_large,
          isDesktop && styles.partners_desktop,
          isLaptop && styles.partners_laptop,
          isTablet && styles.partners_tablet,
          isMobile && styles.partners_mobile
        )}
      >
        <li>
          {/* <ImageUI
            src={nagatino}
            alt="Логотип Нагатино"
            width={160}
            height={56}
          /> */}
          <img
            loading="lazy"
            width={160}
            height={56}
            src={nagatino}
            alt="Логотип Нагатино"
          />
        </li>
        <li>
          {/* <ImageUI src={uao} alt="Логотип ОКЦ ЮАО" width={60} height={56} /> */}
          <img
            loading="lazy"
            width={60}
            height={56}
            src={uao}
            alt="Логотип ОКЦ ЮАО"
          />
        </li>
        <li>
          {/* <ImageUI src={cao} alt="Логотип ОКЦ ЦАО" width={60} height={56} /> */}
          <img
            loading="lazy"
            width={60}
            height={56}
            src={cao}
            alt="Логотип ОКЦ ЦАО"
          />
        </li>
        <li>
          {/* <ImageUI
            src={vershyna}
            alt="Логотип Центра Вершина"
            width={92}
            height={56}
          /> */}
          <img
            loading="lazy"
            width={92}
            height={56}
            src={vershyna}
            alt="Логотип Центра Вершина"
          />
        </li>
        <li>
          {/* <ImageUI
            src={nicolai}
            alt="Логотип музея Николая второго"
            width={72}
            height={56}
          /> */}
          <img
            loading="lazy"
            width={72}
            height={56}
            src={nicolai}
            alt="Логотип музея Николая второго"
          />
        </li>
        <li>
          {/* <ImageUI
            src={prosvet}
            alt="Логотип Гос. университета просвещения (ПРОСВЕТ)"
            width={68}
            height={56}
          /> */}
          <img
            loading="lazy"
            width={68}
            height={56}
            src={prosvet}
            alt="Логотип Гос. университета просвещения (ПРОСВЕТ)"
          />
        </li>
        <li>
          {/* <ImageUI
            src={minpros}
            alt="Логотип Мин. просвещения РФ"
            width={73}
            height={56}
          /> */}
          <img
            loading="lazy"
            width={73}
            height={56}
            src={minpros}
            alt="Логотип Мин. просвещения РФ"
          />
        </li>
      </ul>
    </Section>
  );
};
