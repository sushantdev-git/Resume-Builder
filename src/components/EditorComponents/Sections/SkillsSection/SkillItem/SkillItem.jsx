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

const SkillItem = (props) => {
  const [showBody, setShowBody] = useState(false);
  const [skillName, setSkillName] = useState("Enter Skill Name")
  return (
    <div className={styles.SkillItem}>
      <div className={styles.Header}>
        <p>{skillName}</p>
        <div className={styles.Icons}>
          <IconButton
            icon={faAngleDown}
            onClick={() => setShowBody(!showBody)}
          />
          <IconButton icon={faArrowUp} />
          <IconButton icon={faArrowDown} />
          <IconButton icon={faTrash} color="red" />
        </div>
      </div>
      <div
        className={styles.Body}
        style={{ height: showBody ? "auto" : "0px" }}
      >
        <InputBox label="Skill Name" onInputValueChange={(val) => setSkillName(val)}/>
        <SkillLevelPicker />
      </div>
      {props.showDivider ? (
        <div className={styles.Divider}></div>
      ) : null}
    </div>
  );
};

export default SkillItem;
