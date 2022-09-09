import { } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import IconButton from "../../Buttons/IconButton/IconButton";
import styles from "./Section.module.css";

import { useSelector, useDispatch } from "react-redux";
import { PositionActions } from "../../../store/Features/Position";

import {
  faArrowUp,
  faTrash,
  faArrowDown,
  faAngleUp,
  faAngleDown,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = (props) => {
  //this is a wrapper component for Section component

  const [showBody, setShowBody] = useState(false);

  const position = useSelector((state) => state.position.position);
  const upBtnNotRenderCndn = [0, 1, position.length - 1];
  const downBtnNotRenderCndn = [0, position.length - 2, position.length - 1];

  const SD = props.sectionDetails;

  const dispatch = useDispatch();

  const buttons = (
    <>
      {upBtnNotRenderCndn.indexOf(SD.index) == -1 ? (
        <IconButton
          icon={faArrowUp}
          onClick={() => {
            dispatch(PositionActions.moveUp(SD.ID));
          }}
        />
      ) : null}
      {downBtnNotRenderCndn.indexOf(SD.index) == -1 ? (
        <IconButton
          icon={faArrowDown}
          onClick={() => {
            dispatch(PositionActions.moveDown(props.sectionDetails.ID));
          }}
        />
      ) : null}
      {SD.index != 0 && SD.index != position.length - 1 ? (
        <IconButton icon={faTrash} color="red" />
      ) : null}
    </>
  );

  return (
    <div className={styles.Section} style={props.cssStyle}>
      <div className={styles.TitleAndButtons}>
        <h2>{props.name}</h2>
        <div className={styles.Buttons}>
          {buttons}
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
        {props.addChildName ? <div className={styles.AddChildButton}>
            <FontAwesomeIcon icon={faAdd} color={"#42A0E4"}/> 
            <div style={{width:"20px"}}></div>
            {props.addChildName}
        </div> : null}
      </div>
    </div>
  );
};

export default Section;
