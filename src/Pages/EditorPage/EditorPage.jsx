import styles from "./EditorPage.module.css";

import Header from "../../components/Custom/Header/Header";
import Editor from "../../components/EditorComponents/EditorMainComponent";
import Previewer from "../../components/Previewer/Previewer";
import Modal from "../../components/Custom/Modal/Modal"
import { motion } from "framer-motion";


const EditorPage = () => {

  return (
    <>
    <motion.div
      initial={{opacity:0, scale:0.7}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.7}}
      transition={{duration:0.4}}
    >
      <div className={styles.Container}>
        <Editor />
        <Previewer></Previewer>
      </div>
    </motion.div>
      <Modal />
    </>
  );
};

export default EditorPage;
