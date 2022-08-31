import styles from './EditorPage.module.css';

import Header from '../../components/Header/Header';
const EditorPage = () => {
    return (
        <>
            <Header />
            <div className={styles.Container}>
                <h1>Editor Page</h1>
            </div>
        </>
    )
}

export default EditorPage;