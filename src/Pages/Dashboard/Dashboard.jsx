import Header from "../../components/Header/Header";
import styles from './Dashboard.module.css';
import { useNavigate } from "react-router-dom";

function Dashboard(){

    const history = useNavigate();

    const handleClick =() => {
      history('/editor');
    }

    return (
        <>
        <Header />
        <div className={styles.Container}>
            <div className={styles.MainBody}>
                <div className={styles.SubHeader}>
                    <h1>Dashboard</h1>
                    <button class={styles.CreateNewTemplate} onClick={handleClick}>+ Create New</button>
                </div>
                <div className={styles.TemplateContainer}>
                    <div className={styles.TemplateCard}>
                        <p>Template 1</p>
                        <img src="./Images/template1.PNG" width="250px" alt="template1" />
                    </div>
                    <div className={styles.TemplateCard}>
                        <p>Template 2</p>
                        <img src="./Images/template2.PNG" width="250px" alt="template2" />
                    </div>
                    <div className={styles.TemplateCard}>
                        <p>Template 3</p>
                        <img src="./Images/template3.PNG" width="250px" alt="template2" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard