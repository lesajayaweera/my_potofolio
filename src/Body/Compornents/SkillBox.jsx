// importing the styling 
import styles from "./SkillBox.module.css";

// function
function SkillBox({ image, name }) {
  return (
    <div className={styles.Container}>
      <div className={styles.imageContainer}>
        <img src={image} alt="programing Langauges"  className={styles.image}/>
      </div>
      <div className={styles.textContainer}>{name}</div>
    </div>
  );
}

// default props if the props didnt work
SkillBox.defaultProps = {
  name: "Unknown Skill",
  image: <span>❌</span>, // A fallback icon if no image is provided
};

export default SkillBox;
