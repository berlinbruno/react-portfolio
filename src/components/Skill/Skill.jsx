import React from "react";

import styles from "./Skill.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skill = () => {
  return (
    <section className={styles.container} id="skill">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <h1>Front End</h1>
          <div className={styles.skills}>
          {skills.frontend.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        </div>
        <div className={styles.innerContent}> 
        <h1>Back End</h1>
          <div className={styles.skills}>
          {skills.backend.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        </div>
        <div className={styles.innerContent}> 
        <h1>Database</h1>
          <div className={styles.skills}>
          {skills.database.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        </div>
        <div className={styles.innerContent}> 
        <h1>Others</h1>
          <div className={styles.skills}>
          {skills.others.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};