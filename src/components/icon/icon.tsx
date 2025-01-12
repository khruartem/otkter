import { CSSProperties } from "react";
//import { useState } from "react";
import { Colors } from "../../utils/types";
//import { Container } from "../container";
//import { Text } from "../text";

import { IconProps, SVGProps } from "./types";

import styles from "./icon.module.css";

/*export const Icon = ({
  width,
  height,
  mainColor,
  icon,
  id,
  hoverColor = Colors.None,
  activeColor = Colors.None,
}: IconProps) => {
  const [color, setColor] = useState(mainColor);
  const [hover, setHover] = useState(hoverColor);
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setColor(activeColor);
    setHover(activeColor);
    setCopied(true);
    setTimeout(() => {
      setColor(mainColor);
      setHover(hoverColor);
      setCopied(false);
    }, 1000);
  };

  return (
    <Container flexDirection="row" gap="5px" alignItems="flex-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        mainColor={color}
        viewBox={`0 0 ${width} ${height}`}
        className={styles.icon}
        onClick={handleClick}
        style={
          {
            "--width": `${width}px`,
            "--height": `${height}px`,
            "--hover-color": hover,
          } as CSSProperties
        }
      >
        <use xlinkHref={`${icon}#${id}`}></use>
      </svg>
      {copied && (
        <Text
          as={"p"}
          fontFamily="Unbounded"
          textAlign="left"
          fontSize={14}
          fontWeight={400}
          lineHeight={24}
          textTransform="none"
          color={Colors.Nephritis100}
        >
          {"Скопировано"}
        </Text>
      )}
    </Container>
  );
};*/

export const Icon = ({
  as = "a",
  width,
  height,
  mainColor = Colors.Nephritis100,
  icon,
  id,
  hoverColor = Colors.Nephritis120,
  activeColor = Colors.Navy,
  url = "",
  onClick = undefined,
  margin = "0",
  padding = "0"
}: IconProps) => {
  const Button = as || "button";
  const Link = as || "a";

  return (
    <>
      {as === "a" ? (
        <Link
          href={url}
          target={url ? "_blank" : undefined}
          className={styles.icon}
          onClick={onClick}
          style={
            {
              "--width": `${width}px`,
              "--height": `${height}px`,
              "--hover-color": hoverColor,
              "--active-color": activeColor,
              "--margin": margin,
              "--padding": padding,
            } as CSSProperties
          }
        >
          <SVG mainColor={mainColor} width={width} height={height} icon={icon} id={id} />
        </Link>
      ) : (
        <Button
          type="button"
          className={styles.icon}
          onClick={onClick}
          style={
            {
              "--width": `${width}px`,
              "--height": `${height}px`,
              "--hover-color": hoverColor,
              "--active-color": activeColor,
              "--margin": margin,
              "--padding": padding,
            } as CSSProperties
          }
        >
          <SVG mainColor={mainColor} width={width} height={height} icon={icon} id={id} />
        </Button>
      )}
    </>
  );
};

const SVG = ({ mainColor, width, height, icon, id }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={mainColor}
      viewBox={`0 0 ${width} ${height}`}
    >
      <use href={`${icon}#${id}`}></use>
    </svg>
  );
};

/*const SVG = ({ mainColor, width, height, icon, id }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={mainColor}
      viewBox="0 0 25 25"
    >
      <use xlinkHref={`${icon}#${id}`}></use>
    </svg>
  );
};*/
