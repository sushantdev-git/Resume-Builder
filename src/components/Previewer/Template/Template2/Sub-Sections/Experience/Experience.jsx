import NameAndDuration from "../NameAndDuration/NameAndDuration"
import styles from "./Experience.module.css"
function Experience(){
    return(
        <div className={styles.container}>
            <div className={styles.heading}>Experience</div>
            <NameAndDuration/>
        </div>
    )
}
export default Experience