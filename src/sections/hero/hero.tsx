import { Container } from "../../components/container";
import { Layout } from "../../components/layout";
import { Text } from "../../components/text";
import { Video } from "../../components/video";

import { Colors } from "../../utils/types";

export const Hero = () => {
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
        as={"section"}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor={Colors.Light60}
        padding="0 0 0 8.13vw"
      >
        <Container flexDirection="column" gap="20px" alignItems="flex-start">
          <Text
            as={"h2"}
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={18}
            fontWeight={500}
            lineHeight={28}
            textTransform="uppercase"
            color={Colors.Navy}
            decorated
            padding="0.43vw 1.15vw"
          >
            {"наша миссия"}
          </Text>
          <Text
            as={"h1"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={72}
            fontWeight={700}
            lineHeight={100}
            textTransform="uppercase"
            color={Colors.Navy}
            width="min-content"
          >
            {"объединять творческих людей"}
          </Text>
          <Container flexDirection="row" gap="52px" margin="60px 0 0">
            <Container
              flexDirection="column"
              gap="4px"
              justifyContent="flex-start"
            >
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={36}
                fontWeight={700}
                lineHeight={44}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {"~200"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={18}
                fontWeight={400}
                lineHeight={28}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"проектов и мероприятий"}
              </Text>
            </Container>
            <Container
              flexDirection="column"
              gap="4px"
              justifyContent="flex-start"
            >
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={36}
                fontWeight={700}
                lineHeight={44}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {">9 лет"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={18}
                fontWeight={400}
                lineHeight={28}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"занимаемся искусством"}
              </Text>
            </Container>
            <Container
              flexDirection="column"
              gap="4px"
              justifyContent="flex-start"
            >
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={36}
                fontWeight={700}
                lineHeight={44}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {"87%"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={18}
                fontWeight={400}
                lineHeight={28}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"довольных клиентов"}
              </Text>
            </Container>
          </Container>
        </Container>
        <Video />
      </Container>
    </Layout>
  );
};

const Desktop = () => {
  return (
    <Layout type="desktop">
      <Container
        as={"section"}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor={Colors.Light60}
        padding="0 0 0 7.83vw"
      >
        <Container flexDirection="column" gap="20px" alignItems="flex-start">
          <Text
            as={"h2"}
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={18}
            fontWeight={500}
            lineHeight={28}
            textTransform="uppercase"
            color={Colors.Navy}
            decorated
            padding="0.62vw 1.62vw"
          >
            {"наша миссия"}
          </Text>
          <Text
            as={"h1"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={56}
            fontWeight={700}
            lineHeight={80}
            textTransform="uppercase"
            color={Colors.Navy}
            width="min-content"
          >
            {"объединять творческих людей"}
          </Text>
          <Container flexDirection="row" gap="24px" margin="20px 0 0">
            <Container flexDirection="column" justifyContent="flex-start">
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={28}
                fontWeight={700}
                lineHeight={36}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {"~200"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={14}
                fontWeight={400}
                lineHeight={24}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"проектов и мероприятий"}
              </Text>
            </Container>
            <Container flexDirection="column" justifyContent="flex-start">
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={28}
                fontWeight={700}
                lineHeight={36}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {">9 лет"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={14}
                fontWeight={400}
                lineHeight={24}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"занимаемся искусством"}
              </Text>
            </Container>
            <Container flexDirection="column" justifyContent="flex-start">
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={28}
                fontWeight={700}
                lineHeight={36}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {"87%"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={14}
                fontWeight={400}
                lineHeight={24}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"довольных клиентов"}
              </Text>
            </Container>
          </Container>
        </Container>
        <Video />
      </Container>
    </Layout>
  );
};

const Laptop = () => {
  return (
    <Layout type="laptop">
      <Container
        as={"section"}
        flexDirection="column"
        gap="7.81vw"
        justifyContent="flex-start"
        alignItems="center"
        backgroundColor={Colors.Light60}
        padding="12px 4.10vw 7.81vw"
        position="relative"
        zIndex={-2}
      >
        <Video />

        <Container
          flexDirection="column"
          gap="20px"
          alignItems="flex-start"
          alignSelf="flex-start"
        >
          <Text
            as={"h2"}
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={18}
            fontWeight={500}
            lineHeight={28}
            textTransform="uppercase"
            color={Colors.Navy}
            decorated
            padding="0.82vw 2.16vw"
          >
            {"наша миссия"}
          </Text>
          <Text
            as={"h1"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={72}
            fontWeight={700}
            lineHeight={100}
            textTransform="uppercase"
            color={Colors.Navy}
            width="min-content"
          >
            {"объединять творческих людей"}
          </Text>
          <Container flexDirection="row" gap="50px" margin="20px 0 0">
            <Container
              flexDirection="column"
              justifyContent="flex-start"
              gap="5px"
            >
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={36}
                fontWeight={700}
                lineHeight={44}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {"~200"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={18}
                fontWeight={400}
                lineHeight={28}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"проектов и мероприятий"}
              </Text>
            </Container>
            <Container
              flexDirection="column"
              justifyContent="flex-start"
              gap="5px"
            >
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={36}
                fontWeight={700}
                lineHeight={44}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {">9 лет"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={18}
                fontWeight={400}
                lineHeight={28}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"занимаемся искусством"}
              </Text>
            </Container>
            <Container
              flexDirection="column"
              justifyContent="flex-start"
              gap="5px"
            >
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={36}
                fontWeight={700}
                lineHeight={44}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {"87%"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={18}
                fontWeight={400}
                lineHeight={28}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"довольных клиентов"}
              </Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </Layout>
  );
};

const Tablet = () => {
  return (
    <Layout type="tablet">
      <Container
        as={"section"}
        flexDirection="column"
        gap="7.81vw"
        justifyContent="flex-start"
        alignItems="center"
        backgroundColor={Colors.Light60}
        padding="12px 3.91vw 9.38vw"
        position="relative"
        zIndex={-2}
      >
        <Video />

        <Container
          flexDirection="column"
          gap="20px"
          alignItems="flex-start"
          alignSelf="flex-start"
        >
          <Text
            as={"h2"}
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={18}
            fontWeight={500}
            lineHeight={32}
            textTransform="uppercase"
            color={Colors.Navy}
            decorated
            padding="1.09vw 2.88vw"
          >
            {"наша миссия"}
          </Text>
          <Text
            as={"h1"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={56}
            fontWeight={700}
            lineHeight={80}
            textTransform="uppercase"
            color={Colors.Navy}
            width="min-content"
          >
            {"объединять творческих людей"}
          </Text>
          <Container flexDirection="row" gap="70px" margin="20px 0 0">
            <Container flexDirection="column" justifyContent="flex-start">
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={28}
                fontWeight={700}
                lineHeight={36}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {"~200"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={14}
                fontWeight={400}
                lineHeight={24}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"проектов и мероприятий"}
              </Text>
            </Container>
            <Container flexDirection="column" justifyContent="flex-start">
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={28}
                fontWeight={700}
                lineHeight={36}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {">9 лет"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={14}
                fontWeight={400}
                lineHeight={24}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"занимаемся искусством"}
              </Text>
            </Container>
            <Container flexDirection="column" justifyContent="flex-start">
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={28}
                fontWeight={700}
                lineHeight={36}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {"87%"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={14}
                fontWeight={400}
                lineHeight={24}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"довольных клиентов"}
              </Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </Layout>
  );
};

const Mobile = () => {
  return (
    <Layout type="mobile">
      <Container
        as={"section"}
        flexDirection="column"
        gap="9.66vw"
        justifyContent="flex-start"
        alignItems="center"
        backgroundColor={Colors.Light60}
        padding="12px 3.86vw 3.86vw"
        position="relative"
        zIndex={-2}
      >
        <Video />

        <Container
          flexDirection="column"
          gap="12px"
          alignItems="flex-start"
          alignSelf="flex-start"
        >
          <Text
            as={"h2"}
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={18}
            fontWeight={500}
            lineHeight={32}
            textTransform="uppercase"
            color={Colors.Navy}
            decorated
            padding="2.03vw 5.33vw"
          >
            {"наша миссия"}
          </Text>
          <Text
            as={"h1"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={36}
            fontWeight={700}
            lineHeight={44}
            textTransform="uppercase"
            color={Colors.Navy}
            width="min-content"
          >
            {"объединять творческих людей"}
          </Text>
          <Container flexDirection="column" gap="20px" margin="28px 0 0">
            <Container flexDirection="column" justifyContent="flex-start">
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={28}
                fontWeight={700}
                lineHeight={36}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {"~200"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={14}
                fontWeight={400}
                lineHeight={24}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"проектов и мероприятий"}
              </Text>
            </Container>
            <Container flexDirection="column" justifyContent="flex-start">
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={28}
                fontWeight={700}
                lineHeight={36}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {">9 лет"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={14}
                fontWeight={400}
                lineHeight={24}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"занимаемся искусством"}
              </Text>
            </Container>
            <Container flexDirection="column" justifyContent="flex-start">
              <Text
                as={"p"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={28}
                fontWeight={700}
                lineHeight={36}
                textTransform="none"
                color={Colors.Nephritis100}
              >
                {"87%"}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={14}
                fontWeight={400}
                lineHeight={24}
                textTransform="none"
                color={Colors.Dark100}
              >
                {"довольных клиентов"}
              </Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </Layout>
  );
};
