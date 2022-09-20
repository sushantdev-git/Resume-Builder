import Header from "../../components/Header/Header";
import styles from './Dashboard.module.css';
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import {selectTemplate} from  "../../store/Features/TemplateSlice"

function Dashboard(){
    const history = useNavigate();
    const dispatch = useDispatch();

    const handleClick =(id) => {
        dispatch(selectTemplate(id));
        history('/editor');
    }

    return (
        <>
        <Header />
        <div className={styles.Container}>
            <div className={styles.MainBody}>
                <div className={styles.SubHeader}>
                    <h1>Dashboard</h1>
                </div>
                <div className={styles.TemplateContainer}>
                    <button className={styles.TemplateCard} onClick={()=>{handleClick(0)}}>
                        <p className={styles.templateName}>Template 1</p>
                        <img className={styles.templateImage} src="./Images/template1.PNG" width="250px" alt="template1" />
                    </button>
                    <button className={styles.TemplateCard} onClick={()=>{handleClick(1)}}>
                        <p className={styles.templateName}>Template 2</p>
                        <img className={styles.templateImage} src="./Images/template2.PNG" width="250px" alt="template2" />
                    </button>
                    <button className={styles.TemplateCard} onClick={()=>{handleClick(2)}}>
                        <p className={styles.templateName}>Template 3</p>
                        <img className={styles.templateImage} src="./Images/template2.PNG" width="250px" alt="template2" />
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard