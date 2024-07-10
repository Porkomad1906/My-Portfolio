import React from "react";

import styles from "./Hero.module.css";
import { getImageurl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey! What's Up?, I'm Justin</h1>
        <p className={styles.description}>
          I'm not a robot, but I can create anything you can imagine. Thanks for your attention!
        </p>
        <a href="mailto:justinmora599@gmail.com.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageurl("hero/JustinHero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};