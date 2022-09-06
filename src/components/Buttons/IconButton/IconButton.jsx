import style from './style.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const IconButton = (props) => {
    return(
        <div className={style.IconButton} onClick={props.onClick}>
            <FontAwesomeIcon icon={props.icon} color={props.color ?? "#42A0E4"} />
        </div>
    )
}

export default IconButton;