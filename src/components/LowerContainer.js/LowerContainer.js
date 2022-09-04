import styles from './LowerContainer.module.css'
import { useNavigate } from "react-router-dom";


const LowerContainer=()=>{

    const history = useNavigate();

    const handleClick =() => {
      history('/dashboard');
    }

    return (
        <>
            <div className={styles.LowerContainer}>
                <div className={styles.LowerContainerLeft}>
                    <h1 className={styles.MainHeading}>Resume Builder</h1>
                        <p className={styles.Intro}>
                            "By employing the best practices and innovative tech,<br/>Resume Builder
                            boosts your chances of landing a better job."
                        </p>
                    <button className={styles.btn} onClick={handleClick}>Get Started </button>
                </div>
                    <img className={styles.LowerContainerRight} src="./Images/LandingImage.png" alt="Landing Page Image"/>
            </div>
        </>
    )
}
export default LowerContainer