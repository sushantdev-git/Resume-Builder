import IconButton from '../Buttons/IconButton/IconButton';
import styles from './Section.module.css';

import {
    faArrowUp,
    faTrash,
    faArrowDown
  } from "@fortawesome/free-solid-svg-icons";

const Section = (props) => {
    console.log("section props", props)
    return (
        <div className={styles.Section} style={props.cssStyle}>
            <div className={styles.TitleAndButtons}>
                <h2>{props.name}</h2>
                <div className={styles.Buttons}>
                    <IconButton icon={faArrowUp}/>
                    <IconButton icon={faArrowDown}/>
                    <IconButton icon={faTrash} color="red"/>
                </div>
            </div>
            <div className={styles.Line}></div>
            <div className={styles.SectionContents}>
                {props.children}
            </div>
        </div>
    )
}

export default Section;