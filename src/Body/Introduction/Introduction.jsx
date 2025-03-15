import styles from "./Introduction.module.css"
import { useEffect,useState } from "react";
import picture from "../../assets/profile.png"


function Introduction(){
    const careers = ["Software Developer", "Web Developer", "Freelancer"];
  const [careerIndex, setCareerIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);

  useEffect(() => {
        const timeout = setTimeout(() => {
        if (characterIndex < careers[careerIndex].length) {
            setCharacterIndex(characterIndex + 1);
        } else {
            setTimeout(() => {
            setCareerIndex((prevIndex) => (prevIndex + 1) % careers.length);
            setCharacterIndex(0);
            }, 1000); // Delay before switching to the next career
        }
        }, 300);

        return () => clearTimeout(timeout);
    }, [characterIndex, careerIndex, careers]);

    return(
        <section className={styles.section}>
            <p className={styles.careers}>I am {careers[careerIndex][0] === "I" ? "an" : "a"} <span className={styles.careersSpan}> {careers[careerIndex].slice(0, characterIndex)}</span> </p>
            <div className={styles.imageContainer}><img src={picture} alt="profile picture" className={styles.image} /></div>
        </section>
    );
}
export default Introduction