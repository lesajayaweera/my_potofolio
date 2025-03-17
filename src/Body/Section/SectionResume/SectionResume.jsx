import styles from "./SectionResume.module.css"
import CV from "../../Compornents/CV/Cv"
function SectionResume(){
    return(
        <section className={styles.section}>
            <p>Hello</p>
            <CV></CV>
        </section>
    )
}
export default SectionResume