import IconButton from '../../Buttons/IconButton/IconButton';
import InputBox from '../../Form/Input/InputBox';
import Section from '../Section';
import styles from './style.module.css';

import {
    faArrowUp,
    faTrash,
    faArrowDown,
    faAdd
  } from "@fortawesome/free-solid-svg-icons";

const EducationSection = () => {

    const buttons = (
        <>
            <IconButton icon={faAdd}/>
            <IconButton icon={faArrowUp}/>
            <IconButton icon={faArrowDown}/>
            <IconButton icon={faTrash} color="red"/>
        </>
    );

    return (
        <Section name="Education" buttons={buttons}>
            <InputBox label="Education Institution"/>
            <InputBox label="Degree Name"/>
            <InputBox label="From Time" type="date"/>
            <InputBox label="Till Time" type="date"/>
        </Section>
    )
}


export default EducationSection;