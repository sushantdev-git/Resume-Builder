import IconButton from "../../Buttons/IconButton/IconButton";
import styles from "./style.module.css";

import {
  faList,
  faListNumeric,
  faAdd,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import TextArea from "../TextArea/TextArea";

const ListView = (props) => {
  const [ListType, setListType] = useState(true); //true - dotted, false - numbered

  return (
    <div className={styles.ListView}>
      <div className={styles.Info}>
        <label>{props.label}</label>
      </div>
      <div className={styles.Content}>
        <div className={styles.ListItems}>
          {props.List.map((ele, ind) => {
            return (
              <div className={styles.ListItem} key={ind}>
                {ListType ? (
                  <div className={styles.DotType}></div>
                ) : (
                  <div className={styles.NumberType}>{ind + 1}</div>
                )}
                <TextArea
                  value={ele}
                  onValChange={(val) => {
                    props.updateItem(val, ind);
                  }}
                  style={{ padding: "0px 10px", height: "auto" }}
                />
                <IconButton
                  icon={faClose}
                  onClick={() => props.deleteItem(ind)}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.Actions}>
          <IconButton icon={faList} onClick={() => setListType(true)} />
          <IconButton icon={faListNumeric} onClick={() => setListType(false)} />
          <IconButton icon={faAdd} onClick={props.addItem} />
        </div>
      </div>
    </div>
  );
};

export default ListView;
