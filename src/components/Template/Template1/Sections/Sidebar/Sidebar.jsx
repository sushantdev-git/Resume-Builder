import styles from './Sidebar.module.css'
import PersonalInfo from '../../Sub-Sections/PersonalInfo/PersonalInfo';
const Sidebar = () => {
    return (
        <div className={styles.Container}>
            <PersonalInfo></PersonalInfo>
        </div>
    )
}

export default Sidebar;