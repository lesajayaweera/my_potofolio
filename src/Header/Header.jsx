import styles from "./Header.module.css"


function Header (){
    return(
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    
                    <ul className={styles.ul}>
                        <li className={styles.li}>Home</li>
                        <li className={styles.li}>About me</li>
                        <li className={styles.li}>Projects</li>
                        <li className={styles.li}>Contact Me</li>
                        <li className={styles.li}>Resume</li>
                    </ul>
                    <div><button type="button" className={styles.HireMeBtn}>hire me</button></div>

                </nav>
            </header>
            
        </>
    )
}

export default Header