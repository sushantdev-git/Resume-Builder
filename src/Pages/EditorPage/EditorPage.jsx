import styles from "./EditorPage.module.css";

import Header from "../../components/Header/Header";
import AddNewSectionSection from "../../components/Sections/AddNewSectionSection/AddNewSectionSection";
import PersonalSection from "../../components/Sections/PersonalSection/PersonalSection";
import EducationSection from "../../components/Sections/EducationSection/EducationSection";
import ExperienceSection from "../../components/Sections/ExperienceSection/ExperienceSection";
import SkillsSection from "../../components/Sections/SkillsSection/SkillsSection";


const EditorPage = () => {
  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Editor}>
          <h1>Build Your Résumé Here</h1>
          <PersonalSection />
          <EducationSection />
          <ExperienceSection />
          <SkillsSection />
          <AddNewSectionSection />
        </div>
        <div className={styles.Previewer}>
          <h1>Previewer</h1>
        </div>
      </div>
    </>
  );
};

export default EditorPage;
