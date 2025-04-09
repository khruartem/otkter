import { useDesktopMediaQuery } from "../../hooks/useDesktopMediaQuery";
import { useLaptopMediaQuery } from "../../hooks/useLaptopMediaQuery";
import { useLargeScreenMediaQuery } from "../../hooks/useLargeScreenMediaQuery";
import { useMobileMediaQuery } from "../../hooks/useMobileMediaQuery";
import { useTabletMediaQuery } from "../../hooks/useTabletMediaQuery";

import nagatino from "../../assets/partner_nagatino.png";
import uao from "../../assets/partner_uao.png";
import cao from "../../assets/partner_cao.png";
import nicolai from "../../assets/partner_nicolai.png";
import prosvet from "../../assets/partner_prosvet.png";
import vershyna from "../../assets/partner_vershyna.png";
import minpros from "../../assets/partner_minpros.png";

import styles from "./partners.module.css";
import clsx from "clsx";

export const Partners = () => {
  const isLarge = useLargeScreenMediaQuery();
  const isDesktop = useDesktopMediaQuery();
  const isLaptop = useLaptopMediaQuery();
  const isTablet = useTabletMediaQuery();
  const isMobile = useMobileMediaQuery();

  return (
    <section className={styles.partners}>
      <div
        className={clsx(
          styles.partners__icons,
          isLarge && styles["partners__icons_large-screen"],
          isDesktop && styles.partners__icons_desktop,
          isLaptop && styles.partners__icons_laptop,
          isTablet && styles.partners__icons_tablet,
          isMobile && styles.partners__icons_mobile
        )}
      >
        <img loading="lazy" src={nagatino} alt="Логотип Нагатино" />
        <img loading="lazy" src={uao} alt="Логотип ОКЦ ЮАО" />
        <img loading="lazy" src={cao} alt="Логотип ОКЦ ЦАО" />
        <img loading="lazy" src={vershyna} alt="Логотип Центра Вершина" />
        <img loading="lazy" src={nicolai} alt="Логотип музея Николая второго" />
        <img
          loading="lazy"
          src={prosvet}
          alt="Логотип Гос. университета просвещения (ПРОСВЕТ)"
        />
        <img loading="lazy" src={minpros} alt="Логотип Мин. просвещения РФ" />
      </div>
    </section>
  );
};
