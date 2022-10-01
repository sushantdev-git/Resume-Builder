import styles from './Header.module.css'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () =>{
    const info=useSelector((state) => state.personalDetails)
    return(
        <div className={styles.Container}>
            <div className={styles.Name}>
                {info.name}
            </div>
            <div className={styles.contactInfo}>
                <div>
                    <FontAwesomeIcon icon={faPhone} size="1.5x" />
                    <p>{info.phoneNumber}</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} size="1.5x" />
                    <p>{info.email}</p>
                </div>
            </div>

        </div>
    )
}

export default Header;