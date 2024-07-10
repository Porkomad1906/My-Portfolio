import React from 'react'
import styles from "./Projects.module.css";
import { getImageurl } from "../../utils";

export const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.content}>
            <div className={styles.card}>
                <img className={styles.projects} src={getImageurl("projects/Project1.png")} alt="Project" />
                <h1 className={styles.title2}>To Do List</h1>
                <h3 className={styles.title3}>Tecnologías: React Native, Node Js</h3>
                <p className={styles.title4}>Source: <a href="https://github.com/Porkomad1906/To-do-List">To do Task</a></p>
            </div>
            <div className={styles.card}>
              <img className={styles.projects} src={getImageurl("projects/Project2.png")} alt="Project" />
              <h1 className={styles.title2}>To Do List</h1>
              <h3 className={styles.title3}>Tecnologías: React Native, Node Js</h3>
              <p className={styles.title4}>Source: <a href="">To do Task</a></p>
            </div>
            <div className={styles.card}>
              <img className={styles.projects} src={getImageurl("projects/Project3.png")} alt="Project" />
              <h1 className={styles.title2}>To Do List</h1>
              <h3 className={styles.title3}>Tecnologías: React Native, Node Js</h3>
              <p className={styles.title4}>Source: <a href="">To do Task</a></p>
            </div>
        </div>
    </section>
  )
}
