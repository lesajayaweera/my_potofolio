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
    {
      degree: "Computing Foundation",
      institution: "APIIT Sri Lanka",
      grades: "3.25",
      duration: "Jul 2023 - Feb 2024",
    },
    {
      degree: "GCE Ordinary Level",
      institution: "Vidura College, Sri Lanka",
      grades: {
        A: ["Buddhism", "English", "History", "Business Studies & Accounting", "IT"],
        B: ["Sinhala", "Mathematics", "Science", "Arts"],
      },
      duration: "Jan 2011 - May 2023",
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
