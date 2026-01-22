import Image from "next/image";
import SocialMediaBox from "../../components/LinkPages/SocialMediaBox";
import { SocialMediasObject } from "../../interfaces/socialLinksInterfaces";
import { verifiedImg } from "../../lib/constants";

import styles from "./style.module.scss";

export interface ISocialMediaLinksContainerProps {
  imgSrc: string;
  fullName: string;
  socialLinks: SocialMediasObject[];
}

export const SocialMediaLinksContainer = ({
  imgSrc,
  fullName,
  socialLinks,
}: ISocialMediaLinksContainerProps) => {
  return (
    <div className={styles.linksWrapper}>
      <div className={styles.avatarImg}>
        <Image
          alt={`${fullName}'s avatar/profile picture`}
          src={imgSrc}
          width={175}
          height={175}
        />
      </div>
      <div className={styles.avatarText}>
        <h1>{fullName}</h1>
        <Image
          src={verifiedImg}
          alt="Verified profile"
          data-testid="verificationTick"
          width={16}
          height={36}
        />
      </div>
      <div className={styles.boxWrappers}>
        {socialLinks.map((social, idx) => (
          <SocialMediaBox
            backgroundImage={social.img}
            tag={social.tag}
            link={social.link}
            key={`${social.img}__${idx}`}
          />
        ))}
      </div>
    </div>
  );
};
