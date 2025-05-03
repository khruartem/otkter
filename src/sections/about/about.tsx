import { DecorImage } from "../../components/decor-image";
import { Text } from "../../components/text";
import { Container } from "../../components/container";
import { Button } from "../../components/button";
import { Layout } from "../../components/layout";

import aboutOval1 from "../../assets/sections-photo/about_oval_1.png";
import aboutOval2 from "../../assets/sections-photo/about_oval_2.png";
import aboutOrb from "../../assets/sections-photo/about_orb.png";
import { Colors } from "../../utils/types";
import presentation from "../../assets/presentation.pdf";
import { FC } from "react";
// import { TSectionProps } from "../types";

export const About: FC = () => {
  return (
    <>
      <LargeScreen />
      <Desktop />
      <Laptop />
      <Tablet />
      <Mobile />
    </>
  );
};

const LargeScreen = () => {
  return (
    <Layout type="large">
      <Container
        id="about"
        flexDirection={"row"}
        as={"section"}
        bordered={"bottom"}
        borderRadius={200}
        backgroundColor={Colors.Light60}
        alignItems={"center"}
        justifyContent={"flex-start"}
        padding={"0 8.13vw 4.79vw"}
        gap={"8.33vw"}
      >
        <Container
          flexDirection={"column"}
          gap={"20px"}
          alignItems={"flex-end"}
        >
          <DecorImage
            height={"30.21vw"}
            width={"20vw"}
            borderRadius={400}
            backgroundUrl={aboutOval1}
            type="oval"
          />
          <DecorImage
            height={"12.92vw"}
            width={"12.92vw"}
            borderRadius={400}
            backgroundUrl={aboutOrb}
            type="orb"
          />
        </Container>
        <Container flexDirection={"column"} gap={"40px"}>
          <Text
            as="h2"
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={"clamp(2.25rem, 0.0278rem + 4.6296vw, 3.5rem)"}
            fontWeight={700}
            lineHeight={80}
            textTransform="uppercase"
            color={Colors.Navy}
            decorated={true}
            padding={"6.5px 26.2px"}
          >
            {"о нас"}
          </Text>
          <Text
            as="p"
            fontFamily="Roboto"
            textAlign="center"
            fontSize={"clamp(1rem, 0.375rem + 0.8333vw, 1.25rem)"}
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
            onClick={() => {
              window.open(presentation, "_blank");
            }}
            margin={"60px 0 0"}
          >
            {"Смотреть презентацию"}
          </Button>
        </Container>
        <Container flexDirection="column">
          <DecorImage
            height={"30.21vw"}
            width={"20vw"}
            borderRadius={400}
            backgroundUrl={aboutOval2}
            type="oval"
          />
        </Container>
      </Container>
    </Layout>
  );
};

const Desktop = () => {
  return (
    <Layout type="desktop">
      <Container
        id="about"
        flexDirection={"row"}
        as={"section"}
        bordered={"bottom"}
        borderRadius={200}
        backgroundColor={Colors.Light60}
        alignItems={"center"}
        justifyContent={"flex-start"}
        padding={"0 7.83vw 1.46vw"}
        gap={"8.93vw"}
      >
        <Container
          flexDirection={"column"}
          gap={"20px"}
          alignItems={"flex-end"}
        >
          <DecorImage
            height={"29.87vw"}
            width={"19.77vw"}
            borderRadius={400}
            backgroundUrl={aboutOval1}
            type="oval"
          />
          <DecorImage
            height={"12.59vw"}
            width={"12.59vw"}
            borderRadius={400}
            backgroundUrl={aboutOrb}
            type="orb"
          />
        </Container>
        <Container flexDirection={"column"} gap={"40px"}>
          <Text
            as="h2"
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={"clamp(2.25rem, 0.0278rem + 4.6296vw, 3.5rem)"}
            fontWeight={700}
            lineHeight={80}
            textTransform="uppercase"
            color={Colors.Navy}
            decorated={true}
            margin={"20px 0 0"}
            padding={"6.5px 26.2px"}
          >
            {"о нас"}
          </Text>
          <Text
            as="p"
            fontFamily="Roboto"
            textAlign="center"
            fontSize={"clamp(1rem, 0.375rem + 0.8333vw, 1.25rem)"}
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
            onClick={() => {
              window.open(presentation, "_blank");
            }}
            margin={"20px 0 0"}
          >
            {"Смотреть презентацию"}
          </Button>
        </Container>
        <Container flexDirection="column">
          <DecorImage
            height={"29.87vw"}
            width={"19.77vw"}
            borderRadius={400}
            backgroundUrl={aboutOval2}
            type="oval"
          />
        </Container>
      </Container>
    </Layout>
  );
};

const Laptop = () => {
  return (
    <Layout type="laptop">
      <Container
        id="about"
        flexDirection={"column"}
        as={"section"}
        bordered={"bottom"}
        borderRadius={200}
        backgroundColor={Colors.Light60}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"9.77vw"}
        padding={"7.81vw 12.7vw"}
      >
        <Container flexDirection={"column"}>
          <Container flexDirection={"row"} justifyContent={"center"}>
            <DecorImage
              height={"16.80vw"}
              width={"16.80vw"}
              borderRadius={400}
              backgroundUrl={aboutOrb}
              type="orb"
            />
          </Container>
          <Container flexDirection={"row"} gap={"20px"}>
            <DecorImage
              height={"43.75vw"}
              width={"29.30vw"}
              borderRadius={400}
              backgroundUrl={aboutOval2}
              type="oval"
            />
            <DecorImage
              height={"43.75vw"}
              width={"29.30vw"}
              borderRadius={400}
              backgroundUrl={aboutOval1}
              type="oval"
            />
          </Container>
        </Container>
        <Container flexDirection={"column"} gap={"40px"} alignItems={"center"}>
          <Text
            as="h2"
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={36}
            fontWeight={700}
            lineHeight={44}
            textTransform="uppercase"
            color={Colors.Navy}
            decorated={true}
            padding={"10.4px 22.15px"}
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
            onClick={() => {
              window.open(presentation, "_blank");
            }}
            margin={"20px 0 0"}
          >
            {"Смотреть презентацию"}
          </Button>
        </Container>
      </Container>
    </Layout>
  );
};

const Tablet = () => {
  return (
    <Layout type="tablet">
      <Container
        id="about"
        flexDirection={"column"}
        as={"section"}
        bordered={"bottom"}
        borderRadius={100}
        backgroundColor={Colors.Light60}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"7.81vw"}
        padding="0 0 7.55vw"
      >
        <Container flexDirection={"column"}>
          <Container flexDirection={"row"} justifyContent={"center"}>
            <DecorImage
              height={"22.40vw"}
              width={"22.40vw"}
              borderRadius={400}
              backgroundUrl={aboutOrb}
              type="orb"
            />
          </Container>
          <Container flexDirection={"row"} gap={"20px"}>
            <DecorImage
              height={"55.99vw"}
              width={"37.50vw"}
              borderRadius={400}
              backgroundUrl={aboutOval2}
              type="oval"
            />
            <DecorImage
              height={"55.99vw"}
              width={"37.50vw"}
              borderRadius={400}
              backgroundUrl={aboutOval1}
              type="oval"
            />
          </Container>
        </Container>
        <Container flexDirection={"column"} gap={"20px"} alignItems={"center"}>
          <Text
            as="h2"
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={36}
            fontWeight={700}
            lineHeight={44}
            textTransform="uppercase"
            color={Colors.Navy}
            decorated={true}
            padding={"10.4px 22.15px"}
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
            padding="0 11.72vw"
          >
            {
              "«Открытая Территория» — объединение творческих людей из разных сфер. Наша миссия — дать шанс всем реализовать свои идеи. Мы соединяем образ желаемого проекта с реальными людьми — нашими резидентами. Широкая сеть контактов помогает организовать мероприятия любой сложности и собрать команду, подходящую для конкретного проекта."
            }
          </Text>
          <Button
            type="button"
            disabled={false}
            onClick={() => {
              window.open(presentation, "_blank");
            }}
            margin={"20px 0 0"}
          >
            {"Смотреть презентацию"}
          </Button>
        </Container>
      </Container>
    </Layout>
  );
};

const Mobile = () => {
  return (
    <Layout type="mobile">
      <Container
        id="about"
        flexDirection={"column"}
        as={"section"}
        bordered={"bottom"}
        borderRadius={100}
        backgroundColor={Colors.Light60}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"14.49vw"}
        padding="9.66vw 0 13.86vw"
      >
        <Container flexDirection={"column"}>
          <Container flexDirection={"row"} justifyContent={"center"}>
            <DecorImage
              height={"41.55vw"}
              width={"41.55vw"}
              borderRadius={400}
              backgroundUrl={aboutOrb}
              type="orb"
            />
          </Container>
          <Container flexDirection={"row"} gap={"20px"}>
            <DecorImage
              height={"66.67vw"}
              width={"44.69vw"}
              borderRadius={400}
              backgroundUrl={aboutOval2}
              type="oval"
            />
            <DecorImage
              height={"66.67vw"}
              width={"44.69vw"}
              borderRadius={400}
              backgroundUrl={aboutOval1}
              type="oval"
            />
          </Container>
        </Container>
        <Container flexDirection={"column"} gap={"20px"} alignItems={"center"}>
          <Text
            as="h2"
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={36}
            fontWeight={700}
            lineHeight={44}
            textTransform="uppercase"
            color={Colors.Navy}
            decorated={true}
            padding={"10.4px 22.15px"}
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
            padding="0 7.91vw"
          >
            {
              "«Открытая Территория» — объединение творческих людей из разных сфер. Наша миссия — дать шанс всем реализовать свои идеи. Мы соединяем образ желаемого проекта с реальными людьми — нашими резидентами. Широкая сеть контактов помогает организовать мероприятия любой сложности и собрать команду, подходящую для конкретного проекта."
            }
          </Text>
          <Button
            type="button"
            disabled={false}
            onClick={() => {
              window.open(presentation, "_blank");
            }}
            margin={"20px 0 0"}
          >
            {"Смотреть презентацию"}
          </Button>
        </Container>
      </Container>
    </Layout>
  );
};
