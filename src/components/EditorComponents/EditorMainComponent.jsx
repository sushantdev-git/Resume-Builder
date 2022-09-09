import styles from "./style.module.css";

import AddNewSectionSection from "./Sections/AddNewSectionSection/AddNewSectionSection";
import PersonalSection from "./Sections/PersonalSection/PersonalSection";
import EducationSection from "./Sections/EducationSection/EducationSection";
import ExperienceSection from "./Sections/ExperienceSection/ExperienceSection";
import SkillsSection from "./Sections/SkillsSection/SkillsSection";

import { useSelector } from "react-redux";

import * as IDS from "../../store/SectionIDS";
import LinksSection from "./Sections/LinksSection/LinksSection";

const mapping = {};
mapping[IDS.PERSONAL_DETAILS_SECTION] = (idx) => (
  <PersonalSection
    sectionDetails={{
      index: idx,
      ID: IDS.PERSONAL_DETAILS_SECTION,
    }}
  />
);
mapping[IDS.EDUCATION_SECTION] = (idx) => (
  <EducationSection
    sectionDetails={{
      index: idx,
      ID: IDS.EDUCATION_SECTION,
    }}
  />
);
mapping[IDS.EXPERIENCE_SECTION] = (idx) => (
  <ExperienceSection
    sectionDetails={{
      index: idx,
      ID: IDS.EXPERIENCE_SECTION,
    }}
  />
);
mapping[IDS.SKILLS_SECTION] = (idx) => (
  <SkillsSection
    sectionDetails={{
      index: idx,
      ID: IDS.SKILLS_SECTION,
    }}
  />
);
mapping[IDS.ADD_NEW_SECTION] = (idx) => (
  <AddNewSectionSection
    sectionDetails={{
      index: idx,
      ID: IDS.ADD_NEW_SECTION,
    }}
  />
);

mapping[IDS.LINKS_SECTION] = (idx) => (
  <LinksSection
    sectionDetails={{
      index: idx,
      ID: IDS.LINKS_SECTION,
    }}
  />
);

const Editor = () => {
  const positions = useSelector((state) => state.position.position);

  return (
    <div className={styles.Editor}>
      <h1>Build Your Résumé Here</h1>
      {positions.map((id, ind) => {
        return mapping[id](ind);
      })}
    </div>
  );
};

export default Editor;
