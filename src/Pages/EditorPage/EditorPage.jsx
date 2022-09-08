import styles from "./EditorPage.module.css";

import Header from "../../components/Header/Header";
import Editor from "../../components/EditorComponents/EditorMainComponent";


const EditorPage = () => {

  

  return (
    <>
      <Header />
      <div className={styles.Container}>
        <Editor />
        <div className={styles.Previewer}>
          <h1>Previewer</h1>
        </div>
      </div>
    </>
  );
};

export default EditorPage;
