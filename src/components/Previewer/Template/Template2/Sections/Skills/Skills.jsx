import styles from './Skills.module.css'
import SectionHeading from '../../Component/SectionHeading/SectionHeading'
import { useSelector } from 'react-redux'

const Skills = () =>{

    return (
        <div className={styles.Container}>
            <SectionHeading id="skills" value="Skills"></SectionHeading>
        </div>
    )
}

export default Skills;