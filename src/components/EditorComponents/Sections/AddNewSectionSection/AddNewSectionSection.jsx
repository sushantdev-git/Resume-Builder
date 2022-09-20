import styles from "./style.module.css";

import Section from "../Section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPuzzlePiece,
  faSchool,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import * as IDS from "../../../../store/SectionIDS";
import { PositionActions } from "../../../../store/Features/Position";

const AddNewSectionSection = (props) => {
  const sections = useSelector((state) => state.position.position);
  
  const dispath = useDispatch();

  return (
    <Section name="Add Section" sectionDetails={props.sectionDetails}>
      <div className={styles.AddSectionButton}>
        <FontAwesomeIcon icon={faPuzzlePiece} size="2x" color="#42A0E4" />
        <h3>Custom Section</h3>
      </div>

      {sections.findIndex((ele) => ele == IDS.EDUCATION_SECTION) == -1 ? (
        <div className={styles.AddSectionButton} onClick={() => dispath(PositionActions.addNewSection(IDS.EDUCATION_SECTION))}>
          <FontAwesomeIcon icon={faSchool} size="2x" color="#42A0E4" />
          <h3>Education</h3>
        </div>
      ) : null}

      {sections.findIndex((ele) => ele == IDS.EXPERIENCE_SECTION) == -1 ? (
        <div className={styles.AddSectionButton} onClick={() => dispath(PositionActions.addNewSection(IDS.EXPERIENCE_SECTION))}>
          <FontAwesomeIcon icon={faBriefcase} size="2x" color="#42A0E4" />
          <h3>Work Experience</h3>
        </div>
      ) : null}

      {sections.findIndex((ele) => ele == IDS.SKILLS_SECTION) == -1 ? (
        <div className={styles.AddSectionButton} onClick={() => dispath(PositionActions.addNewSection(IDS.SKILLS_SECTION))}>
          <FontAwesomeIcon icon={faFire} size="2x" color="#42A0E4" />
          <h3>Skills</h3>
        </div>
      ) : null}

    </Section>
  );
};

export default AddNewSectionSection;
