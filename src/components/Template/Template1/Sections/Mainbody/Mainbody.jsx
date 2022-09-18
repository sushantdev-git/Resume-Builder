import styles from './Mainbody.module.css'
import Profile from '../../Sub-Sections/Profile/Profile'
import ExperienceSection from '../../Sub-Sections/ExperienceSection/ExperienceSection'
import EducationSection from '../../Sub-Sections/EducationSection/EducationSection'
import { useSelector } from 'react-redux'
import * as IDS from '../../../../../store/SectionIDS'

const mapping={};
mapping[IDS.PERSONAL_DETAILS_SECTION] = (idx) => (
<Profile
    sectionDetails={{
    index: idx,
    ID: IDS.PERSONAL_DETAILS_SECTION,
    }}
/>
);
mapping[IDS.EDUCATION_SECTION] = (idx) => (
<EducationSection
    sectionDetails={{
    index: idx,
    ID: IDS.EDUCATION_SECTION,
    }}
/>
);
mapping[IDS.EXPERIENCE_SECTION] = (idx) => (
<ExperienceSection
    sectionDetails={{
    index: idx,
    ID: IDS.EXPERIENCE_SECTION,
    }}
/>
);
  

const Mainbody = () => {
    const positions = useSelector((state) => state.position.position);
    const sections= positions.filter((section) => {
        return section==IDS.PERSONAL_DETAILS_SECTION ||
               section==IDS.EDUCATION_SECTION ||
               section==IDS.EXPERIENCE_SECTION;
    })    
    
    return (
        <div className={styles.Container}>
            {sections.map((id, ind) => {
                return mapping[id](ind);
            })}
        </div>
        
    )
}

export default Mainbody;