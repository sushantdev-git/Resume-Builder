import styles from "./EditorPage.module.css";

import Header from "../../components/Header/Header";
import InputBox from "../../components/Form/Input/InputBox";
import Section from '../../components/Section/Section';
import {BiCustomize} from 'react-icons/bi';
import {FaUserGraduate} from 'react-icons/fa';
import {GrWorkshop} from 'react-icons/gr';
import {GiSkills} from 'react-icons/gi'


const EditorPage = () => {
  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Editor}>
          <h1>Build Your Résumé Here</h1>
          <Section name="Personal Details">
            <InputBox label="Full Name" />
            <InputBox label="Email" />
            <InputBox label="Job Title" />
            <InputBox label="Phone" />
          </Section>
          <Section name="Add Section">
            <div className={styles.AddSectionButton}>
              <BiCustomize color="lightblue" size={30}/> <h3>Custom Section</h3>
            </div>
            <div className={styles.AddSectionButton}>
              <FaUserGraduate color="lightblue" size={30}/> <h3>Education</h3>
            </div>
            <div className={styles.AddSectionButton}>
              <GrWorkshop color="lightblue" size={30}/> <h3>Work Experience</h3>
            </div>
            <div className={styles.AddSectionButton}>
              <GiSkills color="lightblue" size={30}/> <h3>Skills</h3>
            </div>
          </Section>
        </div>
        <div className={styles.Previewer}>
          <h1>Previewer</h1>
        </div>
      </div>
    </>
  );
};

export default EditorPage;
