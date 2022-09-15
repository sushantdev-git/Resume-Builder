import styles from './Mainbody.module.css'
import Profile from '../../Sub-Sections/Profile/Profile'
import ExperienceSection from '../../Sub-Sections/ExperienceSection/ExperienceSection'
import EducationSection from '../../Sub-Sections/EducationSection/EducationSection'

const Mainbody = () => {
    return (
        <div className={styles.Container}>
            <Profile></Profile>
            <ExperienceSection></ExperienceSection>
            <EducationSection></EducationSection>
        </div>
        
    )
}

export default Mainbody;