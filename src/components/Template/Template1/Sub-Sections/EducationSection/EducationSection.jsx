import styles from './EducationSection.module.css'
import Heading from '../../../Components/Heading/Heading';
import List from '../../../Components/List/List'
import { useSelector } from 'react-redux';

const EducationSection = () => {
    const educations = useSelector((state) => state.education.educations)
    console.log(educations);
    const list=educations.map(obj => {return `${obj.degree} from ${obj.institue}`});
    return (
        <div>
            <Heading value="Education"></Heading>
            <List items={list}></List>
        </div>
    );
}

export default EducationSection;