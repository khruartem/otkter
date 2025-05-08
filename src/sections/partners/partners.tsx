import clsx from "clsx";

import { ImageUI } from "../../components/image";
import nagatino from "../../assets/partners/nagatino.png";
import uao from "../../assets/partners/uao.png";
import cao from "../../assets/partners/cao.png";
import nicolai from "../../assets/partners/nicolai.png";
import prosvet from "../../assets/partners/prosvet.png";
import vershyna from "../../assets/partners/vershyna.png";
import minpros from "../../assets/partners/minpros.png";

import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

import styles from "./partners.module.css";

export const Partners = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile} = useGetMediaQuery();

  return (
    <section className={styles.partners}>
      <ul
        className={clsx(
          styles.partners__icons,
          isLarge && styles["partners__icons_large-screen"],
          isDesktop && styles.partners__icons_desktop,
          isLaptop && styles.partners__icons_laptop,
          isTablet && styles.partners__icons_tablet,
          isMobile && styles.partners__icons_mobile
        )}
      >
        {/* <img loading="lazy" src={nagatino} alt="Логотип Нагатино" />
        <img loading="lazy" src={uao} alt="Логотип ОКЦ ЮАО" />
        <img loading="lazy" src={cao} alt="Логотип ОКЦ ЦАО" />
        <img loading="lazy" src={vershyna} alt="Логотип Центра Вершина" />
        <img loading="lazy" src={nicolai} alt="Логотип музея Николая второго" />
        <img
          loading="lazy"
          src={prosvet}
          alt="Логотип Гос. университета просвещения (ПРОСВЕТ)"
        />
        <img loading="lazy" src={minpros} alt="Логотип Мин. просвещения РФ" /> */}
        <li>
          <ImageUI
            src={nagatino}
            alt="Логотип Нагатино"
            width={160}
            height={56}
          />
        </li>
        <li>
          <ImageUI src={uao} alt="Логотип ОКЦ ЮАО" width={60} height={56} />
        </li>
        <li>
          <ImageUI src={cao} alt="Логотип ОКЦ ЦАО" width={60} height={56} />
        </li>
        <li>
          <ImageUI
            src={vershyna}
            alt="Логотип Центра Вершина"
            width={92}
            height={56}
          />
        </li>
        <li>
          <ImageUI
            src={nicolai}
            alt="Логотип музея Николая второго"
            width={72}
            height={56}
          />
        </li>
        <li>
          <ImageUI
            src={prosvet}
            alt="Логотип Гос. университета просвещения (ПРОСВЕТ)"
            width={68}
            height={56}
          />
        </li>
        <li>
          <ImageUI
            src={minpros}
            alt="Логотип Мин. просвещения РФ"
            width={73}
            height={56}
          />
        </li>
      </ul>
    </section>
  );
};
