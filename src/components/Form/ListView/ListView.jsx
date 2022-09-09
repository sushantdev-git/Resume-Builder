import IconButton from '../../Buttons/IconButton/IconButton';
import styles from './style.module.css';

import {
    faList,
    faListNumeric,
    faAdd
  } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import TextArea from '../TextArea/TextArea';

const ListView = (props) => {
    
    const [ListItems, setListItems] = useState([
        "Hello how are you bitch",
        "Damm son",
        "Say Hi to your mom..",
    ]);

    const [ListType, setListType] = useState(true); //true - dotted, false - numbered

    const setListItemsVal = (val, ind) => {
        console.log("set called")
        const vals = ListItems;
        vals[ind] = val;
        setListItems([...vals]);
    }

    return (
        <div className={styles.ListView}>
            <div className={styles.Info}>
                <label>{props.label}</label> 
            </div>
            <div className={styles.Content}>
                <div className={styles.ListItems}>
                    {ListItems.map((ele, ind) => {
                        return (
                            <div className={styles.ListItem}>
                                {ListType ? <div className={styles.DotType}></div> : <div className={styles.NumberType}>{ind+1}</div>}
                                <TextArea value={ele} onValChange={(val) => setListItemsVal(val, ind)} style={{padding:"0px 10px", height:"auto"}}/>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.Actions}>
                    <IconButton icon={faList} onClick={() => setListType(true)}/>
                    <IconButton icon={faListNumeric} onClick={() => setListType(false)}/>
                    <IconButton icon={faAdd} onClick={() => setListItems([...ListItems, "Type Here.."])}/>
                </div>
            </div>
        </div>
    )
}

export default ListView;