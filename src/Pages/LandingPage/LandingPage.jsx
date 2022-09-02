import NavBar from "../../components/NavBar/NavBar";
import LowerContainer from "../../components/LowerContainer.js/LowerContainer";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.innerContainer}>
        <NavBar/>
        <LowerContainer/>
      </div>
    </div>
  );
};

export default LandingPage;
