import styles from './SectionHeading.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faFlask, faGear, faGraduationCap } from '@fortawesome/free-solid-svg-icons'


const SectionHeading = (props)=>{

    const getIcon=() => {
        if(props.id=="education")
            return <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
        else if(props.id=="experience")
            return <FontAwesomeIcon icon={faChartPie}></FontAwesomeIcon>
        else if(props.id=="skills")
            return <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
        else if(props.id=="projects")
            return <FontAwesomeIcon icon={faFlask}></FontAwesomeIcon>
    }

    return (
        <div className={styles.Container}>
            <div className={styles.icon}>
                {getIcon()}
            </div>
            <div className={styles.SectionHeading}>
                {props.value}
            </div>
        </div>
    )
}

export default SectionHeading;