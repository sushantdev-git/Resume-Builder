
import IconButton from '../../Buttons/IconButton/IconButton';
import styles from './style.module.css';

import {
    faArrowUp,
    faTrash,
    faArrowDown
  } from "@fortawesome/free-solid-svg-icons";

const SectionComponentWrapper = ({children}) => {

    const SectionComponentFeature = (
        <div className={styles.SectionComponentFeature}>
            <IconButton icon={faArrowUp}/>
            <IconButton icon={faArrowDown}/>
            <IconButton icon={faTrash} color="red"/>
        </div>
    );
    
    return children(SectionComponentFeature)
    
}

export default SectionComponentWrapper;