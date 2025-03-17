import styles from "./SectionResume.module.css";
import CV from "../../Compornents/CV/Cv";

function SectionResume() {
  const educationData = [
    {
      degree: "Bachelor in Software Engineering",
      institution: "University of Staffordshire",
      grades: "Software Engineering",
      duration: "March 2024 - Present",
    },
    
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CV header="Education"  />
      </div>
    </section>
  );
}

export default SectionResume;
