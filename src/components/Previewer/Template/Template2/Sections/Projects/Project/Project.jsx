import { faInfo } from '@fortawesome/free-solid-svg-icons';
import styles from './Project.module.css'

const Project = ({info}) => {
    return (
        <div className={styles.Container}>
            <div style={{fontSize:"0.8rem"}}>{info.projectTitle}</div>
            {info.about.map(about => {return <div style={{frontSize:"0.7rem", width:"80%", margin:"5px 0px"}}>{`${about}`}</div>})}
        </div>
    )
}

export default Project;