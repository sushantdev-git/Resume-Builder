import styles from './Skills.module.css'
import SectionHeading from '../../Component/SectionHeading/SectionHeading'
import { useSelector } from 'react-redux'

const Skills = () =>{
    const skills=useSelector((state) => state.skills.skills);
    return (
        <div>
            <SectionHeading id="skills" value="Skills"></SectionHeading>
            <ul className={styles.Container}>
                {skills.map(skill => <li style={{fontSize:"0.7rem", width:"100px"}}>{skill.skillName}</li>)}
            </ul>
        </div>
    )
}

export default Skills;