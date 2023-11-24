import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.webp")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>B.Sc Computer Science</p>
              <p>Master of Computer Application</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Passionate learner with Good knowledge in Web development, Unity
                game development and .NET MAUI application development eager to
                contribute to the software development industry. Focusing on
                innovation, hands-on learning, and proactive behavior. I embrace
                challenges and technology with enthusiasm, positioning myself as
                a dynamic asset.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
