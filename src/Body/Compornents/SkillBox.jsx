import styles from "./SkillBox.module.css";

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

SkillBox.defaultProps = {
  name: "Unknown Skill",
  image: <span>❌</span>, // A fallback icon if no image is provided
};

export default SkillBox;
