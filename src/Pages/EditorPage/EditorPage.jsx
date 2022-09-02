import styles from "./EditorPage.module.css";

import Header from "../../components/Header/Header";
import AddNewSectionSection from "../../components/Sections/AddNewSectionSection/AddNewSectionSection";
import PersonalSection from "../../components/Sections/PersonalSection/PersonalSection";


const EditorPage = () => {
  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Editor}>
          <h1>Build Your Résumé Here</h1>
          <PersonalSection />
          <PersonalSection />
          <PersonalSection />
          <PersonalSection />
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
