import styles from "./Header.module.css"
import { Link } from "react-router-dom"



function Header (){
    return(
        <>
            <header className={styles.header}>
                <h1 className={styles.h1}>Lesandu Jayaweera</h1>
                <nav className={styles.nav}>
                    
                    <ul className={styles.ul}>
                        
                        <li className={styles.li}><Link to="/">Home</Link></li>
                        <li className={styles.li}><Link to="/about">About me</Link></li>
                        <li className={styles.li}><Link to="/projects">Projects</Link></li>
                        <li className={styles.li}><Link to="/resume">Resume</Link></li>
                    </ul>
                    

                </nav>
            </header>
            
        </>
    )
}

export default Header