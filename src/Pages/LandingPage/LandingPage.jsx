import NavBar from "../../components/NavBar/NavBar";
import LowerContainer from "../../components/LowerContainer.js/LowerContainer";
import styles from "./LandingPage.module.css";
import { motion } from "framer-motion";
const LandingPage = () => {
  return (
    <motion.div className={styles.Container}
      initial={{opacity:0, scale:0.7}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.7}}
      transition={{duration:0.4}}
    >
      <div className={styles.innerContainer}>
        <NavBar/>
        <LowerContainer/>
      </div>
    </motion.div>
  );
};

export default LandingPage;
