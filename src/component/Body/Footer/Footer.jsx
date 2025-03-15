import styles from "./Footer.Module.css"
function Footer(){
    return(
        <footer >
            <p>Designed And Developed By <span>Lesandu Jayaweera</span></p>
            <p>Copyrights&copy;{new Date().getFullYear()}</p>
            <div><p>Social Media</p></div>
        </footer>
    );
}

export default Footer;