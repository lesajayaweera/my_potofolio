import styles from "./TechnicalSkills.module.css"
import SkillBox from "../../Compornents/SkillBox";
import csharp  from "../../../../public/csharp.png"
import javascript  from "../../../../public/javascript.png"
import python  from "../../../../public/Python.png"
import css  from "../../../../public/Css.png"
import mysql  from "../../../../public/Mysql.png"
import html  from "../../../../public/Html.png"
import php  from "../../../../public/php.png"
import react from "../../../../public/react.png"



function TechnicalSkills(){
    return(
        <section>
            <h2 className={styles.header}>Professional <span className={styles.hightlight}>Skills</span></h2>
            <div className={styles.mainContainer}>
                <SkillBox name="HTML"  image={html}></SkillBox>
                <SkillBox name="CSS"  image={css}></SkillBox>
                <SkillBox name="javascript"  image={javascript}></SkillBox>
                <SkillBox name="React"  image={react}></SkillBox>

                <SkillBox name="my sql"  image={mysql}></SkillBox>
                <SkillBox name="python"  image={python}></SkillBox>
                <SkillBox name="php"  image={php}></SkillBox>

                <SkillBox name="C#"  image={csharp}></SkillBox>
            </div>
        </section>
    )
}
export default TechnicalSkills;