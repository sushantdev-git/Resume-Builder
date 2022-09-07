import IconButton from "../../Buttons/IconButton/IconButton";
import styles from "./style.module.css";

import {
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const SectionChildWrapper = (props) => {

    const[showBody, setShowBody] = useState(false);

  return (
    <div className={styles.Section} style={props.cssStyle}>
      <div className={styles.TitleAndButtons}>
        <h2>{props.name}</h2>
        <div className={styles.Buttons}>
          {/* {buttons} */}
          <IconButton
            icon={showBody ? faAngleUp : faAngleDown}
            onClick={() => setShowBody(!showBody)}
          />
        </div>
      </div>
      <div className={styles.Line}></div>
      <div
        className={styles.SectionContents}
        style={{ height: showBody ? "auto" : "0px" }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default SectionChildWrapper;
