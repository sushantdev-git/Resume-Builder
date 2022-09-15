import styles from './PersonalInfo.module.css'
import Heading from '../../../Components/Heading/Heading'
import Paragraph from '../../../Components/Paragraph/Paragraph'
import Subheading from '../../../Components/Subheading/Subheading'
import { useSelector } from 'react-redux'

const PersonalInfo = () => {
    const info=useSelector((state) => state.personalDetails)
    console.log(info);
    return (
        <div className={styles.Container}>
            <div className={styles.Center}>
                <div className={styles.Name}><Heading value={info.name}></Heading></div>
                <div className={styles.Line}></div>
                <div className={styles.Job}><Paragraph value={info.job}></Paragraph></div>
            </div>
            <div className={styles.Details}>
                <Subheading value="Details"></Subheading>
                <Paragraph value={info.phoneNumber}></Paragraph>
                <Paragraph value={info.email}></Paragraph>
            </div>
        </div>
    )
}

export default PersonalInfo


    