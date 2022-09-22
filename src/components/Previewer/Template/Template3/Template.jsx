import styles from './Template.module.css'
import Header from './Sections/Header/Header'
const Template = () => {
    return (
        <div className={styles.Container}>
            <Header></Header>
        </div>
    )
}

export default Template;