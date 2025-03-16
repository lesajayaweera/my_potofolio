import styles from "./Myself.module.css"
import image  from "../../../../public/programming.png"

function Myself(){

    return(
        <section className={styles.section}>
            <h2 className={styles.header}>Know who <span className={styles.highlight}>I'm</span></h2>

            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <p>Hey there! I'm <span className={styles.highlight}>Lesandu Jayaweera</span> from <span className={styles.highlight}>Athurugiriya,Srilanka</span>.</p>
                    <p>I'm a 2nd year Software Engineering student at <span className={styles.highlight}>Staffordshire University</span> and a passionate to be a Full Stack Developer.</p>
                    <p>When I'm not coding or studying, you’ll find me:</p>
                    <ul>
                        <li>🎮 Gaming</li>
                        <li>🎬 Binge-watching movies & web series</li>
                        <li>💻 Learning Machine Learning from youtube</li>
                    </ul>
                </div>
                <div className={styles.imgContainer}>
                    <img src={image} alt="Coding Image"  className={styles.image}/>
                </div>

            </div>
        </section>
    );
}
export default Myself;