import InputBox from '../../../Form/Input/InputBox';
import TextArea from '../../../Form/TextArea/TextArea';
import Section from '../../Section';
import styles from './style.module.css';

const JobSection = () => {
    return (
        <Section name="Job 1" cssStyle={{
            width:"100%",
            margin:"auto",
        }}>
            <InputBox label="Job Title"/>
            <InputBox label="Employer"/>
            <InputBox label="From Date" type="date" style={{width:"25%"}}/>
            <InputBox label="Till Date" type="date" style={{width:"25%"}}/>
            <InputBox label="City"/>
            <TextArea label="About Experience"/>
        </Section>
    )
}


export default JobSection;