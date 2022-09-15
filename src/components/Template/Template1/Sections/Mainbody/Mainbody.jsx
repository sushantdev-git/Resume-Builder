import styles from './Mainbody.module.css'
import Profile from '../../Sub-Sections/Profile/Profile'
import ExperienceSection from '../../Sub-Sections/ExperienceSection/ExperienceSection'

const Mainbody = () => {
    return (
        <div className={styles.Container}>
            <ExperienceSection></ExperienceSection>
        </div>
        
    )
}

export default Mainbody;