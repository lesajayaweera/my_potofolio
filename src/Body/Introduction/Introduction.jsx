import styles from "./Introduction.module.css"

function Introduction(){
    const careers =["Software Developer","Web Developer","Front-End Developer"];



    return(
        <section className={styles.section}>
            <p>I am <span>{careers[1]}</span> </p>
        </section>
    );
}
export default Introduction