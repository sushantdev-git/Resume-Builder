import { useSelector } from "react-redux"
import styles from "./NameAndDuration.module.css"

function NameAndDuration(props){
    console.log(props,"name and duration")
    return(
        <div className={styles.display}>
            <div>
                <p className={styles.UniversityName}>{props.name}</p>
                <p>{props.about}</p>
            </div>
            <p className={styles.duration}>{props.timefrom}-{props.timeto}</p>
        </div>
    )
}
export default NameAndDuration