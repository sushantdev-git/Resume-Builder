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

const SkillItem = ({ data, showDivider, index, skillSize }) => {
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
          {index > 0 ? <IconButton icon={faArrowUp} onClick={() => dispatch(SkillsActions.moveUp({index}))}/> : null}
          {index < skillSize-1 ? <IconButton icon={faArrowDown} onClick={() => dispatch(SkillsActions.moveDown({index}))}/> : null}
          <IconButton icon={faTrash} color="red" onClick={() => dispatch(SkillsActions.deleteSkill({index}))}/>
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
