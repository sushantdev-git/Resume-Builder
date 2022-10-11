import styles from './Template.module.css' 
import Header from './Sections/Header/Header'
import Education from './Sections/Education/Education';
import React from "react";
import Experience from './Sections/Experience/Experience';
import Skills from './Sections/Skills/Skills';
import * as IDS from '../../../../store/SectionIDS'
import { useSelector } from 'react-redux';
import Projects from './Sections/Projects/Projects';

const mapping={};
mapping[IDS.PERSONAL_DETAILS_SECTION] = (idx) => (
<Header
    sectionDetails={{
    index: idx,
    ID: IDS.PERSONAL_DETAILS_SECTION,
    }}
/>
);
mapping[IDS.EDUCATION_SECTION] = (idx) => (
<Education
    sectionDetails={{
    index: idx,
    ID: IDS.EDUCATION_SECTION,
    }}
/>
);
mapping[IDS.EXPERIENCE_SECTION] = (idx) => (
<Experience
    sectionDetails={{
    index: idx,
    ID: IDS.EXPERIENCE_SECTION,
    }}
/>
);

mapping[IDS.SKILLS_SECTION] = (idx) => (
    <Skills
        SectionDetails={{
            index:idx,
            ID: IDS.SKILLS_SECTION
        }}
    />
)

mapping[IDS.PROJECTS_SECTION] = (idx) => (
    <Projects 
        sectionDetails={{
            index:idx,
            ID: IDS.PROJECTS_SECTION
        }}
    />
)

const Template =  React.forwardRef((props, ref) =>{
    const positions = useSelector((state) => state.position.position);
    const sections= positions.filter((section) => {
        return section==IDS.PERSONAL_DETAILS_SECTION ||
               section==IDS.EDUCATION_SECTION ||
               section==IDS.EXPERIENCE_SECTION ||
               section==IDS.SKILLS_SECTION || 
               section==IDS.PROJECTS_SECTION;
    }) 

    return (
        <div className={styles.Container} ref={ref}>
            {sections.map((id, ind) => {
                return mapping[id](ind);
            })}
        </div>
        
    )
});

export default Template;