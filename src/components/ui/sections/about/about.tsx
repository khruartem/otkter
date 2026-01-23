import { FC } from "react";
import clsx from "clsx";

import { Section } from "../../../section";
import { Button } from "../../../button";
import { Text } from "../../../text";
import { Title } from "../../../title";

import { TAboutUIProps } from "./types";
import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";
import { Colors } from "../../../../utils/types";

import styles from "./about.module.css";

export const AboutUI: FC<TAboutUIProps> = (props) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <Section
      id="about"
      decoration="half"
      className={clsx(
        styles.about,
        (isLarge || isDesktop) && styles.about_rowed,
        (isLaptop || isTablet || isMobile) && styles.about_columned,
        isLarge && styles.about_large,
        isDesktop && styles.about_desktop,
        isLaptop && styles.about_laptop,
        isTablet && styles.about_tablet,
        isMobile && styles.about_mobile,
      )}
      unsetDefaultStyle
    >
      {(isLarge || isDesktop) && <LargeResolution {...props} />}
      {(isLaptop || isTablet || isMobile) && <SmallResolution {...props} />}
    </Section>
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
          styles["about__image-wrapper_large-gap"],
        )}
      >
        <img
          loading="lazy"
          width={clsx(isLarge && "20vw", isDesktop && "19.77vw")}
          height={clsx(isLarge && "30.21vw", isDesktop && "29.87vw")}
          className={clsx(
            styles.about__image,
            styles.about__image_oval,
            isLarge && styles.about__image_oval_large,
            isDesktop && styles.about__image_oval_desktop,
          )}
          src={
            "https://storage.yandexcloud.net/otkter-bucket/about/about_oval_1.webp"
          }
          alt="Декоративное фото"
        />
        <img
          loading="lazy"
          width={clsx(isLarge && "12.92vw", isDesktop && "12.59vw")}
          height={clsx(isLarge && "12.92vw", isDesktop && "12.59vw")}
          className={clsx(
            styles.about__image,
            styles.about__image_orb,
            isLarge && styles.about__image_orb_large,
            isDesktop && styles.about__image_orb_desktop,
          )}
          src={
            "https://storage.yandexcloud.net/otkter-bucket/about/about_orb.webp"
          }
          alt="Декоративное фото"
        />
      </div>
      <div
        className={clsx(
          styles["about__text-wrapper"],
          styles["about__text-wrapper_large-gap"],
        )}
      >
        <Title text="о нас" />
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
          isLarge && styles.about__image_oval_large,
          isDesktop && styles.about__image_oval_desktop,
        )}
        src={
          "https://storage.yandexcloud.net/otkter-bucket/about/about_oval_2.webp"
        }
        alt="Декоративное фото"
      />
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
          styles["about__image-wrapper_aligned-center"],
        )}
      >
        <img
          loading="lazy"
          width={clsx(
            isLaptop && "16.80vw",
            isTablet && "22.40vw",
            isMobile && "41.55vw",
          )}
          height={clsx(
            isLaptop && "16.80vw",
            isTablet && "22.40vw",
            isMobile && "41.55vw",
          )}
          className={clsx(
            styles.about__image,
            styles.about__image_orb,
            isLaptop && styles.about__image_orb_laptop,
            isTablet && styles.about__image_orb_tablet,
            isMobile && styles.about__image_orb_mobile,
          )}
          src={
            "https://storage.yandexcloud.net/otkter-bucket/about/about_orb.webp"
          }
          alt="Декоративное фото"
        />
        <div
          className={clsx(
            styles["about__image-wrapper"],
            styles["about__image-wrapper_rowed"],
            isLaptop && styles["about__image-wrapper_large-gap"],
            (isTablet || isMobile) && styles["about__image-wrapper_small-gap"],
          )}
        >
          <img
            loading="lazy"
            width={clsx(
              isLaptop && "29.30vw",
              isTablet && "37.50vw",
              isMobile && "44.69vw",
            )}
            height={clsx(
              isLaptop && "43.75vw",
              isTablet && "55.99vw",
              isMobile && "66.67vw",
            )}
            className={clsx(
              styles.about__image,
              styles.about__image_oval,
              isLaptop && styles.about__image_oval_laptop,
              isTablet && styles.about__image_oval_tablet,
              isMobile && styles.about__image_oval_mobile,
            )}
            src={
              "https://storage.yandexcloud.net/otkter-bucket/about/about_oval_2.webp"
            }
            alt="Декоративное фото"
          />
          <img
            loading="lazy"
            width={clsx(
              isLaptop && "29.30vw",
              isTablet && "55.99vw",
              isMobile && "66.67vw",
            )}
            height={clsx(
              isLaptop && "43.75vw",
              isTablet && "37.50vw",
              isMobile && "44.69vw",
            )}
            className={clsx(
              styles.about__image,
              styles.about__image_oval,
              isLaptop && styles.about__image_oval_laptop,
              isTablet && styles.about__image_oval_tablet,
              isMobile && styles.about__image_oval_mobile,
            )}
            src={
              "https://storage.yandexcloud.net/otkter-bucket/about/about_oval_1.webp"
            }
            alt="Декоративное фото"
          />
        </div>
      </div>
      <div
        className={clsx(
          styles["about__text-wrapper"],
          styles["about__text-wrapper_aligned"],
          isLaptop && styles["about__text-wrapper_large-gap"],
          (isTablet || isMobile) && styles["about__text-wrapper_small-gap"],
        )}
      >
        <Title text="о нас" />
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
