import styles from "./Top.module.css"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Top(){
    return (
        <div className={styles.display}>

            <p className={styles.Name}>Dwight Schrute</p>
            
            <div className={styles.TopMid}>
                <FontAwesomeIcon icon="fa-solid fa-phone" /> +1-123-456-7890<br/>
                <FontAwesomeIcon icon="fa-solid fa-envelope" /> dschrute@dundermifflin.com
            </div>

            <div className={styles.TopRight}>
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" /> dwight-schrute <br/>
                <FontAwesomeIcon icon="fa-brands fa-github" /> dwight-schrute <br/>

            </div>
            
        </div>
    )
}
export default Top