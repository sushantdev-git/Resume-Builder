import { useSelector } from 'react-redux';
import Section from '../Section';
import EducationItem from './EducationItem/EducationItem';
import styles from './style.module.css';
import { useDispatch } from 'react-redux';
import { EducationActions } from '../../../../store/Features/EducationSectionSlice';

const EducationSection = (props) => {

    const educations = useSelector(state => state.education.educations)
    const dispatch = useDispatch();
    return (
        <Section name="Education" sectionDetails={props.sectionDetails} addChildName={"Add Education"} onClickAddChild={() => {dispatch(EducationActions.addNewEducation())}}>
            {educations.map((edu,ind) => {
                return <EducationItem key={ind} data={edu} index={ind} eduSize={educations.length}/>
            })}
        </Section>
    )
}


export default EducationSection;