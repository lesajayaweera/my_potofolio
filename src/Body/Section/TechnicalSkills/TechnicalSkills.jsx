import styles from "./TechnicalSkills.module.css"
import SkillBox from "../../Compornents/SkillBox";




function TechnicalSkills({header,hightlight,skillData}){

    const Data = skillData;
    return(
        <section className={styles.section}>
            <h2 className={styles.header}>{header} <span className={styles.hightlight}>{hightlight}</span></h2>
            <div className={styles.mainContainer}>
                {Data.map((skill)=>{
                    return(
                        <SkillBox image={skill.image} name={skill.name}></SkillBox>

                    )
                })}
            </div>
        </section>
    )
}
export default TechnicalSkills;