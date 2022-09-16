import styles from './Skill.module.css'
import Paragraph from '../../../../Components/Paragraph/Paragraph'

const Skill = ({obj}) => {
    const widths = ['20px', '40px','60px','80px','100px'];
    return (
        <div className={styles.Container}>
            <Paragraph value={obj.skillName}></Paragraph>
            <div className={styles.bar}>
                <div className={styles.completed} style={{width : widths[obj.level]}}></div>
            </div>
        </div>
    )
};

export default Skill;