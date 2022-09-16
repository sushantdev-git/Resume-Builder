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

import SectionChildWrapper from "../../SectionComponent/SectionChildWrapper";
import { SkillsActions } from "../../../../../store/Features/SkillsSectionSlice";
import { useDispatch } from "react-redux";
import { ModalActions } from "../../../../../store/Features/Modal";

const SkillItem = ({ data, index, skillSize }) => {
  const { skillName, level } = data;

  const dispatch = useDispatch();

  const buttons = (
    <>
      {index > 0 ? (
        <IconButton
          icon={faArrowUp}
          onClick={() => dispatch(SkillsActions.moveUp({ index }))}
        />
      ) : null}
      {index < skillSize - 1 ? (
        <IconButton
          icon={faArrowDown}
          onClick={() => dispatch(SkillsActions.moveDown({ index }))}
        />
      ) : null}
      <IconButton
        icon={faTrash}
        color="red"
        onClick={() =>
          dispatch(
            ModalActions.openModal({
              callBack: () => dispatch(SkillsActions.deleteSkill({ index })),
              content: `Do you want to delete Skills/${skillName}?`,
            })
          )
        }
      />
    </>
  );

  return (
    <SectionChildWrapper
      buttons={buttons}
      name={skillName}
      cssStyle={{
        width: "100%",
        margin: "auto",
      }}
    >
      <div className={styles.Container}>
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
        <SkillLevelPicker
          Level={level}
          setLevel={(val) =>
            dispatch(
              SkillsActions.updateLevel({
                index,
                value: val,
              })
            )
          }
        />
      </div>
    </SectionChildWrapper>
  );
};

export default SkillItem;
