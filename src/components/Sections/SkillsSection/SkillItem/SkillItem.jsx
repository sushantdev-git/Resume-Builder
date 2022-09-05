import {
  faAngleDown,
  faArrowDown,
  faArrowUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../../Buttons/IconButton/IconButton";
import InputBox from "../../../Form/Input/InputBox";
import styles from "./style.module.css";

const SkillItem = () => {
  return (
    <div className={styles.SkillItem}>
      <div className={styles.Header}>
        <p>JavaScript</p>
        <div className={styles.Icons}>
          <IconButton icon={faAngleDown} />
          <IconButton icon={faArrowUp} />
          <IconButton icon={faArrowDown} />
          <IconButton icon={faTrash} color="red" />
        </div>
      </div>
      <div className={styles.Body}>
        <InputBox label="Skill Name"/>
        <LevelPicker />
      </div>
      <div className={styles.Divider}></div>
    </div>
  );
};


const LevelPicker = () => {
    return (
        <div>

        </div>
    )
}

export default SkillItem;
