// import IconButton from '../../../Buttons/IconButton/IconButton';
import Section from '../Section';
import JobSection from './JobSection/JobSection';
// import styles from './style.module.css'


const ExperienceSection = (props) => {

    console.log("Experience Section props", props)
    return (
        <Section name="Experience" sectionDetails={props.sectionDetails} addChildName={"Add Job"} onClickAddChild={() => {}}>
            <JobSection />
            <JobSection />
            <JobSection />
            <JobSection />
            <JobSection />
        </Section>
    )
}

export default ExperienceSection;