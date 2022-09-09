import InputBox from '../../../../Form/Input/InputBox';
import ListView from '../../../../Form/ListView/ListView';
import TextArea from '../../../../Form/TextArea/TextArea';
import SectionChildWrapper from '../../SectionComponent/SectionChildWrapper';
import styles from './style.module.css';

const JobSection = () => {
    return (
        <SectionChildWrapper name="Job 1" cssStyle={{
            width:"100%",
            margin:"auto",
        }}>
            <InputBox label="Job Title"/>
            <InputBox label="Employer"/>
            <InputBox label="From Date" type="month" style={{width:"25%"}}/>
            <InputBox label="Till Date" type="month" style={{width:"25%"}}/>
            <InputBox label="City"/>
            {/* <TextArea label="About Experience"/> */}
            <ListView label="About"/>
        </SectionChildWrapper>
    )
}


export default JobSection;