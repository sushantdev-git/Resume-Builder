import styles from './Header.module.css'
import { useSelector } from 'react-redux'

const Header = () => {
    const info=useSelector((state) => state.personalDetails)

    return(
        <div className={styles.Header}>
            <div className={styles.Name}>{info.name}</div>
        </div>
    )
}

export default Header;