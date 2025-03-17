import styles from "./NotFound.module.css"
import { Link } from "react-router-dom";
function NotFound(){
    return(
        <section className={styles.section}>
            <p>❌404 Page Not Found Error❌</p>

            <Link to="/">Home</Link>
        </section>
    )
}

export default NotFound;