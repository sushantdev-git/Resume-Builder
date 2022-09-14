import Sidebar from './Sections/Sidebar/Sidebar'
import Mainbody from './Sections/Mainbody/Mainbody'
import styles from './Template.module.css'

const Template = () =>{
    return (
        <div className={styles.Container}>
            <Sidebar></Sidebar>
            <Mainbody></Mainbody>
        </div>
    );
}

export default Template