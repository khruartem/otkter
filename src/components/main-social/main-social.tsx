import { FC } from "react";

import { SocialUI } from "../ui/social";

import { useGetMainSocials } from "../../hooks/useGetMainSocials";

export const MainSocial: FC = () => {
  const socials = useGetMainSocials();

  return <SocialUI socials={socials} />;
};

/* export const Social = ({ socials }: SocialProps) => {
  return (
    <div className={styles.socialbar}>
      {socials.map(({ id, url, type, icon }) => {
        return (
          <Icon
            key={id}
            icon={icon}
            url={url}
            id={type}
            width={32}
            height={32}
            mainColor={Colors.Nephritis100}
            hoverColor={Colors.Nephritis120}
            activeColor={Colors.Navy}
          />
        );
      })}
    </div>
  );
}; */
