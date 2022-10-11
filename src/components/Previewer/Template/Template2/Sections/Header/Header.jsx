import styles from './Header.module.css'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faPersonBreastfeeding } from '@fortawesome/free-solid-svg-icons';

const Header = () =>{
    const info=useSelector((state) => state.personalDetails)
    const links=useSelector((state) => state.links.links)
    return(
        <div className={styles.Container}>
            <div className={styles.Name}>
                {info.name}
            </div>
            <div className={styles.contactInfo}>
                {/* <div className={styles.links}>
                    {links.map((link) => (<div style={{margin:"2px"}}><a href={link.link}><FontAwesomeIcon icon={}/></a></div>))}
                </div> */}
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