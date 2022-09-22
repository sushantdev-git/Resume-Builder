
import styles from './Headers.module.css';

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.company}></div>
            <ul className={styles.navigation}>
                <li>Templates</li>
                <li>Build</li>
            </ul>
        </div>
    )
}

export default Header;