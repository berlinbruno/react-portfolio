import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

import Resume from "../../../assets/Resume.pdf"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Berlin Bruno</h1>
        <p className={styles.description}>
          I'm a full-stack developer
        </p>
        <div className={styles.btnContainer}>
          <a href="#contact" className={styles.contactBtn}>
          Contact Info
        </a>
        <a href={Resume} className={styles.contactBtn}>
          Resume
        </a>
        </div>
        
      </div>
      <img
        src={getImageUrl("hero/heroImage.webp")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
