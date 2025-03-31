import {
  FaJava,
  FaReact,
  FaDatabase,
  FaDocker,
  FaCode,
  FaJs,
  FaHtml5,
  FaCss3,
  FaCloud,
  FaToolbox,
  FaCodeBranch,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiJenkins,
  SiGooglecloud,
  SiTypescript,
  SiRedux,
  SiMysql,
  SiOracle,
  SiJunit5,
  SiDynatrace,
  SiPostman,
} from "react-icons/si";
import styles from "./skills.module.scss";
import Navbar from "../components/Navbar/Navbar";

const Skills = () => {
  const skills = [
    {
      category: "Backend Development",
      icon: <FaJava className={styles.icon} />,
      items: [
        { name: "Java 17+", icon: <FaJava className={styles.skillIcon} /> },
        {
          name: "Spring Boot",
          icon: <SiSpringboot className={styles.skillIcon} />,
        },
        { name: "REST APIs", icon: <FaCode className={styles.skillIcon} /> },
        {
          name: "Microservices",
          icon: <FaDocker className={styles.skillIcon} />,
        },
        { name: "JPA", icon: <FaDatabase className={styles.skillIcon} /> },
      ],
    },
    {
      category: "Frontend Development",
      icon: <FaReact className={styles.icon} />,
      items: [
        { name: "React 18", icon: <FaReact className={styles.skillIcon} /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className={styles.skillIcon} />,
        },
        { name: "Redux", icon: <SiRedux className={styles.skillIcon} /> },
        { name: "JavaScript", icon: <FaJs className={styles.skillIcon} /> },
        {
          name: "HTML5 & CSS3",
          icon: (
            <>
              <FaHtml5 className={styles.skillIcon} />
              <FaCss3 className={styles.skillIcon} />
            </>
          ),
        },
      ],
    },
    {
      category: "Database & DevOps",
      icon: <FaDatabase className={styles.icon} />,
      items: [
        { name: "MySQL", icon: <SiMysql className={styles.skillIcon} /> },
        { name: "Oracle", icon: <SiOracle className={styles.skillIcon} /> },
        { name: "PCF", icon: <FaCloud className={styles.skillIcon} /> },
        { name: "ASAP", icon: <FaToolbox className={styles.skillIcon} /> },
        {
          name: "Dynatrace",
          icon: <SiDynatrace className={styles.skillIcon} />,
        },
      ],
    },
    {
      category: "Cloud & Tools",
      icon: <SiGooglecloud className={styles.icon} />,
      items: [
        { name: "GCP", icon: <SiGooglecloud className={styles.skillIcon} /> },
        { name: "Git", icon: <FaCodeBranch className={styles.skillIcon} /> },
        { name: "Jenkins", icon: <SiJenkins className={styles.skillIcon} /> },
        {
          name: "JUnit/Mockito",
          icon: <SiJunit5 className={styles.skillIcon} />,
        },
        { name: "Postman", icon: <SiPostman className={styles.skillIcon} /> },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <section className={styles.skillsSection}>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.categoryHeader}>
                {skill.icon}
                <h3 className={styles.categoryTitle}>{skill.category}</h3>
              </div>
              <ul className={styles.skillList}>
                {skill.items.map((item, idx) => (
                  <li key={idx} className={styles.skillItem}>
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
