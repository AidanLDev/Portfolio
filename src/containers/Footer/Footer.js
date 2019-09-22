import React from "react";
import Button from "components/Button/Button";
import Icon from "@mdi/react";
import { mdiChevronUp } from "@mdi/js";
import LinkedinLogo from "assets/LinkedinLogo.png";
import sslImg from "assets/positivessl_trust_seal_md_167x42.png";

import styles from "./Style";

const Footer = props => {
  const backToTop = () => window.scrollTo(0, 0);

  return (
    <div className={styles.footerWrapper}>
      <img
        src={sslImg}
        alt="SSL Certificate"
        className={styles.sslImg}
        width="167"
        height="42"
      />
      <a
        href="https://www.linkedin.com/in/aidanlowson1/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={LinkedinLogo} alt="LinkedIn Logo" width="50" height="50" />
      </a>
      <div onClick={backToTop} className={styles.backToTopWrapper}>
        <Button>Back to top</Button>
        <Icon path={mdiChevronUp} size={1} color={"white"} />
      </div>
    </div>
  );
};

export default Footer;
