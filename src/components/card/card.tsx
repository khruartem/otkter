import clsx from "clsx";
import { DecorImage } from "../decor-image";
import styles from "./card.module.css";
import { useLargeScreenMediaQuery } from "../../hooks/useLargeScreenMediaQuery";

export const Card = () => {
  const isLarge = useLargeScreenMediaQuery();
  
  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        <DecorImage
          width={clsx(
            isLarge && "25.42vw"
          )}
          height={clsx(
            isLarge && "14.38vw"
          )}
          
        />
      </div>
      <div className={styles.card__bottom}>

      </div>
    </div>
  )
} 