import IconButton from '../../Buttons/IconButton/IconButton';
import Section from '../Section';
import JobSection from './JobSection/JobSection';
import styles from './style.module.css'

import {
    faArrowUp,
    faTrash,
    faArrowDown,
    faAdd
  } from "@fortawesome/free-solid-svg-icons";


const ExperienceSection = () => {

    const buttons = (
        <>
            <IconButton icon={faAdd}/>
            <IconButton icon={faArrowUp}/>
            <IconButton icon={faArrowDown}/>
            <IconButton icon={faTrash} color="red"/>
        </>
    );
    return (
        <Section name="Experience" buttons={buttons}>
            <JobSection />
            <JobSection />
        </Section>
    )
}

export default ExperienceSection;