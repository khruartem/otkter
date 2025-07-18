import { FC } from "react";
import clsx from "clsx";

// import { ImageUI } from "../../../image";
import { Button } from "../../../button";
import { Text } from "../../../text";

import { TAboutUIProps } from "./types";
import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";
import { Colors } from "../../../../utils/types";

import aboutOval1 from "../../../../assets/sections-photo/about_oval_1.webp";
import aboutOval2 from "../../../../assets/sections-photo/about_oval_2.webp";
import aboutOrb from "../../../../assets/sections-photo/about_orb.webp";

import styles from "./about.module.css";

export const AboutUI: FC<TAboutUIProps> = (props) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <section
      id="about"
      className={clsx(
        styles.about,
        (isLarge || isDesktop) && [
          styles.about_rowed,
          styles["about_border-radius-large"],
        ],
        (isLaptop || isTablet || isMobile) && [
          styles.about_columned,
          styles["about_border-radius-small"],
        ],
        isLarge && styles["about_large-screen"],
        isDesktop && styles.about_desktop,
        isLaptop && styles.about_laptop,
        isTablet && styles.about_tablet,
        isMobile && styles.about_mobile
      )}
    >
      {(isLarge || isDesktop) && <LargeResolution {...props} />}
      {(isLaptop || isTablet || isMobile) && <SmallResolution {...props} />}
    </section>
  );
};

const LargeResolution: FC<TAboutUIProps> = ({ onButtonClick }) => {
  const { isLarge, isDesktop } = useGetMediaQuery();

  return (
    <>
      <div
        className={clsx(
          styles["about__image-wrapper"],
          styles["about__image-wrapper_columned"],
          styles["about__image-wrapper_aligned-end"],
          styles["about__image-wrapper_large-gap"]
        )}
      >
        <img
          loading="lazy"
          width={clsx(isLarge && "20vw", isDesktop && "19.77vw")}
          height={clsx(isLarge && "30.21vw", isDesktop && "29.87vw")}
          className={clsx(
            styles.about__image,
            styles.about__image_oval,
            isLarge && styles["about__image_oval_large-screen"],
            isDesktop && styles.about__image_oval_desktop
          )}
          src={aboutOval1}
          alt="Декоративное фото"
        />
        {/* <ImageUI
          src={aboutOval1}
          alt="Декоративное фото"
          width={clsx(isLarge && "20vw", isDesktop && "19.77vw")}
          height={clsx(isLarge && "30.21vw", isDesktop && "29.87vw")}
          className={clsx(
            styles.about__image,
            styles.about__image_oval,
            isLarge && styles["about__image_oval_large-screen"],
            isDesktop && styles.about__image_oval_desktop
          )}
          wrapperClassName={clsx(
            isLarge && styles["about__image_oval_large-screen"],
            isDesktop && styles.about__image_oval_desktop
          )}
        /> */}
        <img
          loading="lazy"
          width={clsx(isLarge && "12.92vw", isDesktop && "12.59vw")}
          height={clsx(isLarge && "12.92vw", isDesktop && "12.59vw")}
          className={clsx(
            styles.about__image,
            styles.about__image_orb,
            isLarge && styles["about__image_orb_large-screen"],
            isDesktop && styles.about__image_orb_desktop
          )}
          src={aboutOrb}
          alt="Декоративное фото"
        />
        {/* <ImageUI
          src={aboutOrb}
          alt="Декоративное фото"
          width={clsx(isLarge && "12.92vw", isDesktop && "12.59vw")}
          height={clsx(isLarge && "12.92vw", isDesktop && "12.59vw")}
          className={clsx(
            styles.about__image,
            styles.about__image_orb,
            isLarge && styles["about__image_orb_large-screen"],
            isDesktop && styles.about__image_orb_desktop
          )}
          wrapperClassName={clsx(
            isLarge && styles["about__image_orb_large-screen"],
            isDesktop && styles.about__image_orb_desktop
          )}
        /> */}
      </div>
      <div
        className={clsx(
          styles["about__text-wrapper"],
          styles["about__text-wrapper_large-gap"]
        )}
      >
        <Text
          as="h2"
          fontFamily="Unbounded"
          textAlign="center"
          fontSize={56}
          fontWeight={700}
          lineHeight={80}
          textTransform="uppercase"
          color={Colors.Navy}
          decorated
          padding={"6.4px 26.4px"}
          width={"fit-content"}
        >
          {"о нас"}
        </Text>
        <Text
          as="p"
          fontFamily="Roboto"
          textAlign="center"
          fontSize={clsx(isLarge && "20px", isDesktop && "16px")}
          fontWeight={400}
          lineHeight={clsx(isLarge && "32px", isDesktop && "28px")}
          textTransform="none"
          color={Colors.Dark100}
        >
          {
            "«Открытая Территория» — объединение творческих людей из разных сфер. Наша миссия — дать шанс всем реализовать свои идеи. Мы соединяем образ желаемого проекта с реальными людьми — нашими резидентами. Широкая сеть контактов помогает организовать мероприятия любой сложности и собрать команду, подходящую для конкретного проекта."
          }
        </Text>
        <Button
          type="button"
          disabled={false}
          onClick={onButtonClick}
          margin={clsx(isLarge && "60px 0 0", isDesktop && "20px 0 0")}
        >
          {"Смотреть презентацию"}
        </Button>
      </div>
      <img
        loading="lazy"
        width={clsx(isLarge && "20vw", isDesktop && "19.77vw")}
        height={clsx(isLarge && "30.21vw", isDesktop && "29.87vw")}
        className={clsx(
          styles.about__image,
          styles.about__image_oval,
          isLarge && styles["about__image_oval_large-screen"],
          isDesktop && styles.about__image_oval_desktop
        )}
        src={aboutOval2}
        alt="Декоративное фото"
      />
      {/* <ImageUI
        src={aboutOval2}
        alt="Декоративное фото"
        width={clsx(isLarge && "20vw", isDesktop && "19.77vw")}
        height={clsx(isLarge && "30.21vw", isDesktop && "29.87vw")}
        className={clsx(
          styles.about__image,
          styles.about__image_oval,
          isLarge && styles["about__image_oval_large-screen"],
          isDesktop && styles.about__image_oval_desktop
        )}
        wrapperClassName={clsx(
          isLarge && styles["about__image_oval_large-screen"],
          isDesktop && styles.about__image_oval_desktop
        )}
      /> */}
    </>
  );
};

const SmallResolution: FC<TAboutUIProps> = ({ onButtonClick }) => {
  const { isLaptop, isTablet, isMobile } = useGetMediaQuery();

  return (
    <>
      <div
        className={clsx(
          styles["about__image-wrapper"],
          styles["about__image-wrapper_columned"],
          styles["about__image-wrapper_aligned-center"]
        )}
      >
        <img
          loading="lazy"
          width={clsx(
            isLaptop && "16.80vw",
            isTablet && "22.40vw",
            isMobile && "41.55vw"
          )}
          height={clsx(
            isLaptop && "16.80vw",
            isTablet && "22.40vw",
            isMobile && "41.55vw"
          )}
          className={clsx(
            styles.about__image,
            styles.about__image_orb,
            isLaptop && styles.about__image_orb_laptop,
            isTablet && styles.about__image_orb_tablet,
            isMobile && styles.about__image_orb_mobile
          )}
          src={aboutOrb}
          alt="Декоративное фото"
        />
        {/* <ImageUI
          src={aboutOrb}
          alt="Декоративное фото"
          width={clsx(
            isLaptop && "16.80vw",
            isTablet && "22.40vw",
            isMobile && "41.55vw"
          )}
          height={clsx(
            isLaptop && "16.80vw",
            isTablet && "22.40vw",
            isMobile && "41.55vw"
          )}
          className={clsx(
            styles.about__image,
            styles.about__image_orb,
            isLaptop && styles.about__image_orb_laptop,
            isTablet && styles.about__image_orb_tablet,
            isMobile && styles.about__image_orb_mobile
          )}
          wrapperClassName={clsx(
            isLaptop && styles.about__image_orb_laptop,
            isTablet && styles.about__image_orb_tablet,
            isMobile && styles.about__image_orb_mobile
          )}
        /> */}
        <div
          className={clsx(
            styles["about__image-wrapper"],
            styles["about__image-wrapper_rowed"],
            isLaptop && styles["about__image-wrapper_large-gap"],
            (isTablet || isMobile) && styles["about__image-wrapper_small-gap"]
          )}
        >
          <img
            loading="lazy"
            width={clsx(
              isLaptop && "29.30vw",
              isTablet && "37.50vw",
              isMobile && "44.69vw"
            )}
            height={clsx(
              isLaptop && "43.75vw",
              isTablet && "55.99vw",
              isMobile && "66.67vw"
            )}
            className={clsx(
              styles.about__image,
              styles.about__image_oval,
              isLaptop && styles.about__image_oval_laptop,
              isTablet && styles.about__image_oval_tablet,
              isMobile && styles.about__image_oval_mobile
            )}
            src={aboutOval2}
            alt="Декоративное фото"
          />
          {/* <ImageUI
            src={aboutOval2}
            alt="Декоративное фото"
            width={clsx(
              isLaptop && "29.30vw",
              isTablet && "37.50vw",
              isMobile && "44.69vw"
            )}
            height={clsx(
              isLaptop && "43.75vw",
              isTablet && "55.99vw",
              isMobile && "66.67vw"
            )}
            className={clsx(
              styles.about__image,
              styles.about__image_oval,
              isLaptop && styles.about__image_oval_laptop,
              isTablet && styles.about__image_oval_tablet,
              isMobile && styles.about__image_oval_mobile
            )}
            wrapperClassName={clsx(
              isLaptop && styles.about__image_oval_laptop,
              isTablet && styles.about__image_oval_tablet,
              isMobile && styles.about__image_oval_mobile
            )}
          /> */}
          <img
            loading="lazy"
            width={clsx(
              isLaptop && "29.30vw",
              isTablet && "55.99vw",
              isMobile && "66.67vw"
            )}
            height={clsx(
              isLaptop && "43.75vw",
              isTablet && "37.50vw",
              isMobile && "44.69vw"
            )}
            className={clsx(
              styles.about__image,
              styles.about__image_oval,
              isLaptop && styles.about__image_oval_laptop,
              isTablet && styles.about__image_oval_tablet,
              isMobile && styles.about__image_oval_mobile
            )}
            src={aboutOval1}
            alt="Декоративное фото"
          />
          {/* <ImageUI
            src={aboutOval1}
            alt="Декоративное фото"
            width={clsx(
              isLaptop && "29.30vw",
              isTablet && "55.99vw",
              isMobile && "66.67vw"
            )}
            height={clsx(
              isLaptop && "43.75vw",
              isTablet && "37.50vw",
              isMobile && "44.69vw"
            )}
            className={clsx(
              styles.about__image,
              styles.about__image_oval,
              isLaptop && styles.about__image_oval_laptop,
              isTablet && styles.about__image_oval_tablet,
              isMobile && styles.about__image_oval_mobile
            )}
            wrapperClassName={clsx(
              isLaptop && styles.about__image_oval_laptop,
              isTablet && styles.about__image_oval_tablet,
              isMobile && styles.about__image_oval_mobile
            )}
          /> */}
        </div>
      </div>
      <div
        className={clsx(
          styles["about__text-wrapper"],
          styles["about__text-wrapper_aligned"],
          isLaptop && styles["about__text-wrapper_large-gap"],
          (isTablet || isMobile) && styles["about__text-wrapper_small-gap"]
        )}
      >
        <Text
          as="h2"
          fontFamily="Unbounded"
          textAlign="center"
          fontSize={36}
          fontWeight={700}
          lineHeight={44}
          textTransform="uppercase"
          color={Colors.Navy}
          decorated
          padding={"10.4px 22.4px"}
          width={"fit-content"}
        >
          {"о нас"}
        </Text>
        <Text
          as="p"
          fontFamily="Roboto"
          textAlign="center"
          fontSize={16}
          fontWeight={400}
          lineHeight={28}
          textTransform="none"
          color={Colors.Dark100}
        >
          {
            "«Открытая Территория» — объединение творческих людей из разных сфер. Наша миссия — дать шанс всем реализовать свои идеи. Мы соединяем образ желаемого проекта с реальными людьми — нашими резидентами. Широкая сеть контактов помогает организовать мероприятия любой сложности и собрать команду, подходящую для конкретного проекта."
          }
        </Text>
        <Button
          type="button"
          disabled={false}
          onClick={onButtonClick}
          margin={"20px 0 0"}
          className={clsx(isMobile && styles.about__button)}
        >
          {"Смотреть презентацию"}
        </Button>
      </div>
    </>
  );
};
