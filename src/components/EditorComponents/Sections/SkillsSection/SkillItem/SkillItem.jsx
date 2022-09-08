import {
  faAngleDown,
  faArrowDown,
  faArrowUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import IconButton from "../../../../Buttons/IconButton/IconButton";
import SkillLevelPicker from "../../../../Custom/SkillLevelPicker/SkillLevelPicker";
import InputBox from "../../../../Form/Input/InputBox";
import styles from "./style.module.css";

const SkillItem = () => {
    const [showBody, setShowBody] = useState(false);

  return (
    <div className={styles.SkillItem}>
      <div className={styles.Header}>
        <p>JavaScript</p>
        <div className={styles.Icons}>
          <IconButton icon={faAngleDown} onClick={() => setShowBody(!showBody)}/>
          <IconButton icon={faArrowUp} />
          <IconButton icon={faArrowDown} />
          <IconButton icon={faTrash} color="red" />
        </div>
      </div>
      <div className={styles.Body} style={{height: showBody ? "auto" : "0px"}}>
        <InputBox label="Skill Name"/>
        <SkillLevelPicker />
      </div>
      <div className={styles.Divider}></div>
    </div>
  );
};

export default SkillItem;
