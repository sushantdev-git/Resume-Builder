import styles from "./Top.module.css"

import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"

import {
    faArrowUp,
    faPhone,
    faEnvelope,
    faLinkedIn,
    faGithub,
} from "@fortawesome/free-solid-svg-icons";

function Top(){

    const data = useSelector((state)=>{
        return state.personalDetails;
    });
    return (
        <div className={styles.display}>

            <p className={styles.Name}>{data.name}</p>
            
            <div className={styles.TopMid}>
                <FontAwesomeIcon icon={faPhone} /> {data.phoneNumber}<br/>
                <FontAwesomeIcon icon={faEnvelope} /> {data.email}
            </div>

            {/* <div className={styles.TopRight}>
                <FontAwesomeIcon icon={faLinkedIn} /> dwight-schrute <br/>
                <FontAwesomeIcon icon={faGithub} /> dwight-schrute <br/>

            </div> */}
            
        </div>
    )
}
export default Top