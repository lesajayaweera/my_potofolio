import styles from "./Introduction.module.css";
import { useEffect, useState } from "react";
import picture from "../../../assets/image.png";

function Introduction() {
    const career = "Software Engineering Undergraduate"; 
    const [characterIndex, setCharacterIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setCharacterIndex((prevIndex) => 
                prevIndex < career.length ? prevIndex + 1 : 0
            );
        }, 200); 

        return () => clearInterval(typingInterval);
    }, [career]);

    useEffect(() => {
        // Cursor blinking effect
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.textContainer}>
                <p className={styles.greetings}>Hi There👋<span className={styles.colors}>,</span></p>
                <p className={styles.name}>
                    I<span className={styles.colors}>'</span>m <span>Lesandu Jayaweera</span>
                </p><br />
                <div className={styles.careerContainer}>
                    <p className={styles.careers}>And I<span className={styles.colors}>'</span>m a{" "} </p>
                    <p className={styles.careersSpan}>{career.slice(0, characterIndex)}{showCursor && <span className={styles.cursor}>|</span>}</p>
                </div>
                
            </div>
            <div className={styles.imageContainer}>
                <img src={picture} alt="profile picture" className={styles.image} />
            </div>
        </section>
    );
}

export default Introduction;
