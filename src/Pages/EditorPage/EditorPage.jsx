import styles from "./EditorPage.module.css";

import Header from "../../components/Header/Header";
import AddNewSectionSection from "../../components/Sections/AddNewSectionSection/AddNewSectionSection";
import PersonalSection from "../../components/Sections/PersonalSection/PersonalSection";
import EducationSection from "../../components/Sections/EducationSection/EducationSection";
import ExperienceSection from "../../components/Sections/ExperienceSection/ExperienceSection";
import SkillsSection from "../../components/Sections/SkillsSection/SkillsSection";

import { useSelector, useDispatch } from 'react-redux';
import {PositionActions} from '../../store/Features/Position';

import * as IDS from '../../store/SectionIDS';

const mapping = {};
mapping[IDS.PERSONAL_DETAILS_SECTION] = <PersonalSection />;
mapping[IDS.EDUCATION_SECTION] = <EducationSection />;
mapping[IDS.EXPERIENCE_SECTION] = <ExperienceSection />;
mapping[IDS.SKILLS_SECTION] = <SkillsSection />;
mapping[IDS.SKILLS_SECTION] = <SkillsSection />;
mapping[IDS.ADD_NEW_SECTION] = <AddNewSectionSection />

const EditorPage = () => {

  const dispatch = useDispatch();
  const positions = useSelector((state) => state.position.position);

  console.log(positions)
  console.log(positions[0])
  console.log(mapping[positions[0]])
  console.log(mapping["PERSONAL_DETAILS_SECTION"])

  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Editor}>
          <h1>Build Your Résumé Here</h1>
          {positions.map((id, ind) => {
            return mapping[id]
          })}
        </div>
        <div className={styles.Previewer}>
          <h1>Previewer</h1>
        </div>
      </div>
    </>
  );
};

export default EditorPage;
