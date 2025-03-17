import styles from "./CV.module.css";

function CV({ header, educationList }) {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.header}>{header}</h3>
      <div  className={styles.container}>
          <div className={styles.headingContainer}>
            <h4>hello</h4>
            <h6>march</h6>
          </div>
          <ul className={styles.ul}>
            <li>colombo</li>
            {/* Conditionally check if `grades` is an object */}
            <li>
              hello
            </li>
          </ul>
        </div>
    </div>
  );
}

export default CV;
