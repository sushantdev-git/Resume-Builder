import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import IconButton from '../Buttons/IconButton/IconButton';
import styles from './Section.module.css';


const Section = (props) => {
    //this is a wrapper component for Section component
    
    console.log("section props", props)
    const [showBody, setShowBody] = useState(false);

    return (
        <div className={styles.Section} style={props.cssStyle}>
            <div className={styles.TitleAndButtons}>
                <h2>{props.name}</h2>
                <div className={styles.Buttons}>
                    <IconButton icon={showBody ? faAngleUp : faAngleDown} onClick={() => setShowBody(!showBody)}/>
                    {props.buttons}
                </div>
            </div>
            <div className={styles.Line}></div>
            <div className={styles.SectionContents} style={{height: showBody ? "auto" : "0px"}}>
                {props.children}
            </div>
        </div>
    )
}

export default Section;