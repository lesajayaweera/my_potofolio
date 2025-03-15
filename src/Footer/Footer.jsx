import styles from "./Footer.module.css"
import { FaFacebook, FaTwitter, FaInstagram,FaWhatsapp, FaGithub,FaEnvelope } from "react-icons/fa";
function Footer (){
    return(
        <>
            <footer className={styles.footer}>
                <p className={styles.left}>Designed and Developed by <span>Lesandu Jayaweera</span></p>
                <p className={styles.center}>copyright &copy; {new Date().getFullYear()}</p>
                <div className={styles.right}>
                    <FaFacebook className={styles.icons}></FaFacebook>
                    <FaTwitter className={styles.icons}></FaTwitter>
                    <FaInstagram className={styles.icons}></FaInstagram>
                    <FaWhatsapp className={styles.icons}></FaWhatsapp>
                    <FaGithub className={styles.icons}></FaGithub>
                    <FaEnvelope className={styles.icons}></FaEnvelope>
                    
                </div>
            </footer>
            
        </>
    )
}

export default Footer