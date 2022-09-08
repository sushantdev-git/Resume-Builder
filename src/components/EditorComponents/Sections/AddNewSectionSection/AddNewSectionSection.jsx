import styles from './style.module.css';

import Section from '../Section';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPuzzlePiece,
  faSchool,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

const AddNewSectionSection = (props) => {
    return (
        <Section name="Add Section" sectionDetails={props.sectionDetails}>
            <div className={styles.AddSectionButton}>
              <FontAwesomeIcon icon={faPuzzlePiece} size="2x" color="#42A0E4" />
              <h3>Custom Section</h3>
            </div>
            <div className={styles.AddSectionButton}>
              <FontAwesomeIcon icon={faSchool} size="2x" color="#42A0E4" />
              <h3>Education</h3>
            </div>
            <div className={styles.AddSectionButton}>
              <FontAwesomeIcon icon={faBriefcase} size="2x" color="#42A0E4" />
              <h3>Work Experience</h3>
            </div>
            <div className={styles.AddSectionButton}>
              <FontAwesomeIcon icon={faFire} size="2x" color="#42A0E4" />
              <h3>Skills</h3>
            </div>
            <div className={styles.AddSectionButton}>
              <FontAwesomeIcon icon={faFire} size="2x" color="#42A0E4" />
              <h3>Internship</h3>
            </div>
          </Section>
    )
}

export default AddNewSectionSection;