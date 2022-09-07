import styles from "./EditorPage.module.css";

import Header from "../../components/Header/Header";
import AddNewSectionSection from "../../components/Sections/AddNewSectionSection/AddNewSectionSection";
import PersonalSection from "../../components/Sections/PersonalSection/PersonalSection";
import EducationSection from "../../components/Sections/EducationSection/EducationSection";
import ExperienceSection from "../../components/Sections/ExperienceSection/ExperienceSection";
import SkillsSection from "../../components/Sections/SkillsSection/SkillsSection";

import { useSelector, useDispatch } from 'react-redux';

import * as IDS from '../../store/SectionIDS';

const mapping = {};
mapping[IDS.PERSONAL_DETAILS_SECTION] = (idx) => <PersonalSection sectionDetails={{
  index:idx,
  ID:IDS.PERSONAL_DETAILS_SECTION,
}}/>;
mapping[IDS.EDUCATION_SECTION] = (idx) =>  <EducationSection sectionDetails={{
  index:idx,
  ID:IDS.EDUCATION_SECTION,
}}/>;
mapping[IDS.EXPERIENCE_SECTION] = (idx) =>  <ExperienceSection sectionDetails={{
  index:idx,
  ID:IDS.EXPERIENCE_SECTION,
}}/>;
mapping[IDS.SKILLS_SECTION] = (idx) =>  <SkillsSection sectionDetails={{
  index:idx,
  ID:IDS.SKILLS_SECTION,
}}/>;
mapping[IDS.ADD_NEW_SECTION] = (idx) => <AddNewSectionSection sectionDetails={{
  index:idx,
  ID:IDS.ADD_NEW_SECTION,
}}/>

const EditorPage = () => {

  const positions = useSelector((state) => state.position.position);

  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Editor}>
          <h1>Build Your Résumé Here</h1>
          {positions.map((id, ind) => {
            return mapping[id](ind);
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
