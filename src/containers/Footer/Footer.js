import React from "react";
import { motion } from "framer-motion";
import Button from "components/Button/Button";
import EmailIcon from '@material-ui/icons/Email';
import Icon from "@mdi/react";
import { mdiChevronUp } from "@mdi/js";
import LinkedinLogo from "assets/LinkedinLogo.png";

import styles from "./Style.module.scss";

const Footer = props => {
  const backToTop = () => window.scrollTo(0, 0);

  const hoverScale = 1.2;
  const tapScale = 0.8;

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.tooltip}>
        <span className={styles.tooltiptext}>Email Aidan</span>
        <a href="mailto:dev@aidanlowson.com">
          <EmailIcon fontSize="large"/>
        </a>
      </div>
      <div className={styles.tooltip}>
        <span className={styles.tooltiptext}>Linkedin Profile</span>
        <a
          href="https://www.linkedin.com/in/aidanlowson1/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <motion.img
            src={LinkedinLogo}
            alt="LinkedIn Logo"
            width="50"
            height="50"
            whileHover={{ scale: hoverScale }}
            whileTap={{ scale: tapScale }}
            className={styles.socialMedia}
          />
        </a>
      </div>
      <motion.div
        onClick={backToTop}
        className={styles.backToTopWrapper}
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: tapScale }}
      >
        <Button footer>Back to top</Button>
        <Icon
          path={mdiChevronUp}
          size={1}
          color={"white"}
          className={styles.mobileOnly}
        />
      </motion.div>
    </div>
  );
};

export default Footer;
