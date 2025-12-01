import { useEffect, useRef, useState } from "react";

import { HeroUI } from "../../components/ui/sections/hero-2-season";

import { useGetProjects } from "../../hooks/projects/useGetProjects";

export const Hero = () => {
  const heroProjects = useGetProjects("hero");

  const cardsRef = useRef<HTMLUListElement>(null);
  const cardWidth: number = 232;

  // const defineIncriment = useGetIncriment(cardsRef, cardWidth, heroProjects);
  const defineIncriment = () => {
    const cardsContainerWidth = cardsRef.current?.clientWidth || 0;
    // console.log(cardsContainerWidth)
    return Math.floor(cardsContainerWidth / cardWidth);
  };

  const [currentPaginatorIndex, setCurrentPaginatorIndex] = useState<number>(0);
  const [paginatorLength, setPaginatorLength] = useState<number>(0);

  useEffect(() => {
    const handlePaginatorLength = () => {
      setPaginatorLength(Math.ceil(heroProjects.length / defineIncriment()));
    };

    handlePaginatorLength();

    window.addEventListener("resize", handlePaginatorLength);
    return () => {
      window.removeEventListener("resize", handlePaginatorLength);
    };
  });

  const onSwitch: (
    index: number,
    currentPaginatorIndex: number,
    inView: boolean
  ) => void = (
    index: number,
    currentPaginatorIndex: number,
    inView: boolean
  ) => {
    if (inView && index % defineIncriment() === 0) {
      const paginatorIndex = Math.floor(index / defineIncriment());

      if (paginatorIndex !== currentPaginatorIndex) {
        setCurrentPaginatorIndex(paginatorIndex);
      }
    }
  };

  const onClickLeft = () => {
    if (cardsRef.current)
      cardsRef.current.scrollLeft -= cardWidth * defineIncriment();
  };
  const onClickRight = () => {
    if (cardsRef.current)
      cardsRef.current.scrollLeft += cardWidth * defineIncriment();
  };

  return (
    <HeroUI
      items={heroProjects}
      // currentItemIndex={currentItemIndex}
      currentPaginatorIndex={currentPaginatorIndex}
      paginatorLength={paginatorLength}
      onClickLeft={onClickLeft}
      onClickRight={onClickRight}
      cardWidth={cardWidth}
      onSwitch={onSwitch}
      ref={cardsRef}
    />
  );
};
