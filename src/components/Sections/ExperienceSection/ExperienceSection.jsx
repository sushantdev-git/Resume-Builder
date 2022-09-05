import Section from '../Section';
import JobSection from './JobSection/JobSection';
import styles from './style.module.css'

const ExperienceSection = () => {

    return (
        <Section name="Experience">
            <JobSection />
            <JobSection />
        </Section>
    )
}

export default ExperienceSection;