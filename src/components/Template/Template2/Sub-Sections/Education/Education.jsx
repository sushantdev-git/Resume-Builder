import styles from "./Education.module.css"
import NameAndDuration from "../NameAndDuration/NameAndDuration"
function Education(){
    return(
        <div className={styles.container}>
            <div className={styles.heading}>Education</div>
            <NameAndDuration/>
        </div>
    )
}
export default Education