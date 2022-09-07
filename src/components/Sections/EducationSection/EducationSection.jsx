import IconButton from '../../Buttons/IconButton/IconButton';
import InputBox from '../../Form/Input/InputBox';
import Section from '../Section';
import styles from './style.module.css';

const EducationSection = (props) => {

    return (
        <Section name="Education" sectionDetails={props.sectionDetails}>
            <InputBox label="Education Institution"/>
            <InputBox label="Degree Name"/>
            <InputBox label="From Time" type="date"/>
            <InputBox label="Till Time" type="date"/>
        </Section>
    )
}


export default EducationSection;