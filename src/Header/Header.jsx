import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [MenuToggle, SetMenuToggle] = useState(false);

  const toggleMenu = () => {
    SetMenuToggle(!MenuToggle);
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Lesandu Jayaweera</h1>
        <nav className={`${styles.nav} ${MenuToggle ? styles.active : ""}`}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="/about" onClick={toggleMenu}>
                About me
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="/projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="/resume" onClick={toggleMenu}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${styles.hamburger} ${MenuToggle ? styles.active : ""}`} // Add active class
          onClick={toggleMenu}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </header>
    </>
  );
}

export default Header;