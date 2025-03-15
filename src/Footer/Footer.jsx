import styles from "./Footer.module.css"
import { SocialIcon } from "react-social-icons"
function Footer (){
    return(
        <>
            <footer className={styles.footer}>
                <p className={styles.left}>Designed and Developed by <span>Lesandu Jayaweera</span></p>
                <p className={styles.center}>copyright &copy; {new Date().getFullYear()}</p>
                <div className={styles.right}>
                    <SocialIcon className={styles.icons} url="w.w.w.whatsapp.com"/>
                    <SocialIcon className={styles.icons} url="w.w.w.github.com"/>
                    <SocialIcon className={styles.icons} url="w.w.w.instagram.com"/>
                    <SocialIcon aria-label="LinkedIn acc" className={styles.icons} url="w.w.w.linkedin.com"/>
                </div>
            </footer>
            
        </>
    )
}

export default Footer