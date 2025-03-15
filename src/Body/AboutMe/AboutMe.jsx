import styles from "./AboutMe.module.css"
import Image from "../../../public/coding.png"

function AboutMe(){
    return(
        <section className={styles.section}>
            <h2 className={styles.header}>let me <span className={styles.highlight}>Introduce</span> myself</h2>
            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <p>I’m an undergraduate at Staffordshire University, and I’ve fallen in love with programming (and learned quite a bit along the way… 🤷‍♂️).</p>
                    <p>Fluent in <span className={styles.highlight}>C++, JavaScript, and Python</span>, I’m passionate about building web technologies, developing applications, and exploring Machine Learning.</p>
                    <p>I also enjoy working with <span className={styles.highlight}>JavaScript</span> and modern JavaScript frameworks like <span className={styles.highlight}>React.js</span> to bring ideas to life.</p>
                </div>
                <div className={styles.imgContainer}>
                    <img src={Image} alt="Coding Image" className={styles.Image} />
                </div>
            </div>    
        </section>
    );
}
export default AboutMe;