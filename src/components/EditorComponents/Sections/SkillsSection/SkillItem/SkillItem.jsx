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

import { SkillsActions } from "../../../../../store/Features/SkillsSectionSlice";
import { useDispatch } from "react-redux";

const SkillItem = ({ data, showDivider, index }) => {
  const [showBody, setShowBody] = useState(false);
  const { skillName, level } = data;

  const dispatch = useDispatch();

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
        <InputBox
          label="Skill Name"
          value={skillName}
          inputValueChange={(val) =>
            dispatch(
              SkillsActions.updateName({
                index,
                value: val,
              })
            )
          }
        />
        <SkillLevelPicker Level={level} setLevel={(val) => dispatch(SkillsActions.updateLevel({
          index,
          value:val,
        }))}/>
        
      </div>
      {showDivider ? <div className={styles.Divider}></div> : null}
    </div>
  );
};

export default SkillItem;
