import styles from "./ProjectBox.module.css"
import image from "../../../../public/test.jpg"

function ProjectBox ({header,image,description,languages,github,demo}){

    return(
        <div className={styles.mainContainer}>
            <h3 className={styles.header}>{header}</h3>
            <img src={image} alt="test image" className={styles.image} />
            <div className={styles.textContainer}>
                <div className={styles.desc}>
                    {description}
                </div>
                <div className={styles.keyPoints}>
                    <ul>
                        {languages.map(element=><li>{element}</li>)}
                    </ul>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <div>
                    <button className={styles.buttons}>Source Code</button>

                </div>
                <div>
                    <button className={styles.buttons}>Live Demo</button>

                </div>
            </div>
        </div>
    )
}
export default ProjectBox