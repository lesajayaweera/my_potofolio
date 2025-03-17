import styles from "./CV.module.css";

function CV({ header, educationList }) {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.header}>{header}</h3>
      {educationList.map((element, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.headingContainer}>
            <h4>{element.degree}</h4>
            <h6>{element.duration}</h6>
          </div>
          <ul className={styles.ul}>
            <li>{element.institution}</li>
            {/* Conditionally check if `grades` is an object */}
            <li>
              {typeof element.grades === "object" ? (
                <div>
                  <strong>Grades:</strong>
                  <ul>
                    <li>
                      <strong>A:</strong> {element.grades.A.join(", ")}
                    </li>
                    <li>
                      <strong>B:</strong> {element.grades.B.join(", ")}
                    </li>
                  </ul>
                </div>
              ) : (
                element.grades
              )}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CV;
