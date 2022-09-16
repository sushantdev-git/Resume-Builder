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
        <Previewer></Previewer>
      </div>
      <Modal />
    </>
  );
};

export default EditorPage;
