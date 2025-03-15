import classNames from "classnames";
import styles from "./Footer.module.css"
import { FaFacebook, FaInstagram,FaWhatsapp, FaGithub } from "react-icons/fa";
function Footer (){

    
    
    return(
        <>
            <footer className={styles.footer}>
                <p className={styles.left}>Designed and Developed by <span>Lesandu Jayaweera</span></p>
                <p className={styles.center}>copyright &copy; {new Date().getFullYear()}</p>
                <div className={styles.right}>
                    <FaFacebook className={classNames([styles.icons])}></FaFacebook>
                    <FaInstagram className={classNames([styles.icons])}></FaInstagram>
                    <FaWhatsapp className={classNames([styles.icons])}></FaWhatsapp>
                    <FaGithub className={classNames([styles.icons])}></FaGithub>
                </div>  
            </footer>
            
        </>
    )
    
}

export default Footer