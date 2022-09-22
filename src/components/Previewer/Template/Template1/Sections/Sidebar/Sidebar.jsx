import styles from './Sidebar.module.css'
import PersonalInfo from '../../Sub-Sections/PersonalInfo/PersonalInfo';
import Skills from '../../Sub-Sections/Skills/Skills'
const Sidebar = () => {
    return (
        <div className={styles.Container}>
            <PersonalInfo></PersonalInfo>
            <Skills></Skills>
        </div>
    )
}

export default Sidebar;