import styles from "./EditorPage.module.css";

import Header from "../../components/Header/Header";
import Editor from "../../components/EditorComponents/EditorMainComponent";
import Previewer from "../../components/Previewer/Previewer";
import Modal from "../../components/Custom/Modal/Modal"


const EditorPage = () => {

  

  return (
    <>
      <Header />
      <div className={styles.Container}>
        <Editor />
        <div className={styles.Previewer}>
          <Previewer></Previewer>
        </div>
      </div>
      <Modal />
    </>
  );
};

export default EditorPage;
