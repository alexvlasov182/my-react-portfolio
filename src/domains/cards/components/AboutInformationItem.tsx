import React from "react";
import styles from "../../../pages/Pages.module.scss";

const AboutInformationList: React.FC = () => {
  return (
    <div className={styles.informationBlock}>
      <h1 className={styles.mainTitle}>A little bit about myself 💬</h1>
      <h3 className={styles.subtitle}>
        <span className={styles.name}></span> Front-End Engineer
      </h3>
      <p className={styles.description}>
        As a junior React Developer, I am at the beginning of an exciting
        journey in web development, driven by a passion for creating dynamic and
        user-friendly web applications. I am currently focused on mastering
        React and its ecosystem, including tools like Redux for state management
        and React Hooks for building efficient, reusable components.
      </p>

      <p className={styles.description}>
        Though I’m early in my career, I’ve already gained hands-on experience
        through various projects and personal learning initiatives. I’m actively
        building projects to solidify my understanding of React and enhance my
        problem-solving skills in real-world scenarios.
      </p>

      <p className={styles.description}>
        Currently, I’m expanding my knowledge into full-stack development by
        learning Node.js, with the goal of becoming proficient in both front-end
        and back-end technologies. This will allow me to build complete web
        applications and contribute more holistically to any development team.
      </p>
      <p className={styles.description}>
        My development approach is centered on writing clean, maintainable code
        and continuously improving my workflow by learning new tools and best
        practices. I am committed to staying updated with the latest trends in
        web development and am eager to apply my growing skills in a
        professional setting.
      </p>
      <p className={styles.description}>
        I’m enthusiastic about the potential of web development to create
        impactful digital experiences and am motivated by the opportunity to
        learn and grow within the industry. I am looking forward to contributing
        to innovative projects and collaborating with experienced developers to
        bring ideas to life.
      </p>
    </div>
  );
};

export default AboutInformationList;
