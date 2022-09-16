import styles from './Skills.module.css'
import Subheading from '../../../Components/Subheading/Subheading'
import Skill from './Skill/Skill'
import { useSelector } from 'react-redux'

const Skills = () => {
    const skills=useSelector((state) => state.skills.skills)
    return (
        <div>
            <Subheading value="Skills"></Subheading>
            {skills.map((skill) => <Skill obj={skill}></Skill>)}
        </div>
    )
}

export default Skills;