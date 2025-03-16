import styles from "./TechnicalSkills.module.css"
import SkillBox from "../../Compornents/SkillBox";



function TechnicalSkills(){
    return(
        <section>
            <h2 className={styles.header}>Professional <span className={styles.hightlight}>Skills</span></h2>
            <div className={styles.mainContainer}>
                <SkillBox name="lesandu" ></SkillBox>
            </div>
        </section>
    )
}
export default TechnicalSkills;