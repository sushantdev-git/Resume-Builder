import styles from './Education.module.css'
import SectionHeading from '../../Component/SectionHeading/SectionHeading'
import { useSelector } from 'react-redux'

const Education = () =>{
    const educations=useSelector((state) => state.education.educations)
    return (
        <div className={styles.Container}>
            <SectionHeading id="education" value="Education"></SectionHeading>
            {educations.map(obj => {
                return (
                    <div>
                        <div className={styles.flex}>
                            <div className={styles.institue}>{obj.institue}</div>
                            <div className={styles.date}>{`${obj.formDate} - ${obj.tillDate}`}</div>
                        </div>
                        <div className={styles.flex}>
                            <div className={styles.degree}>{obj.degree}</div>
                            <div></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Education;