import SectionChildWrapper from "../../SectionComponent/SectionChildWrapper";
// import styles from './styles.module.css';
import IconButton from "../../../../Buttons/IconButton/IconButton";
import InputBox from "../../../../Form/Input/InputBox";
import { useDispatch } from "react-redux";
import { EducationActions } from "../../../../../store/Features/EducationSectionSlice";
import {
  faArrowDown,
  faArrowUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const EducationItem = ({ data, index, eduSize }) => {
  const dispatch = useDispatch();

  const buttons = (
    <>
      {index < eduSize - 1 ? (
        <IconButton
          icon={faArrowDown}
          onClick={() => dispatch(EducationActions.moveDown({ index }))}
        />
      ) : null}
      {index > 0 ? (
        <IconButton
          icon={faArrowUp}
          onClick={() => dispatch(EducationActions.moveUp({ index }))}
        />
      ) : null}
      <IconButton
        icon={faTrash}
        color="red"
        onClick={() => dispatch(EducationActions.deleteEducation({ index }))}
      />
    </>
  );
  return (
    <SectionChildWrapper
      name={data.degree}
      buttons={buttons}
      cssStyle={{
        width: "100%",
        margin: "auto",
      }}
    >
      <InputBox
        label="Education Institution"
        value={data.instiute}
        inputValueChange={(value) =>
          dispatch(EducationActions.updateInstitute({ index, value }))
        }
      />
      <InputBox
        label="Degree Name"
        value={data.degree}
        inputValueChange={(value) =>
          dispatch(EducationActions.updateDegree({ index, value }))
        }
      />
      <InputBox
        label="From Time"
        type="date"
        value={data.fromDate}
        inputValueChange={(value) =>
          dispatch(EducationActions.updateFromDate({index, value }))
        }
      />
      <InputBox
        label="Till Time"
        type="date"
        value={data.tillDate}
        inputValueChange={(value) =>
          dispatch(EducationActions.updateTillDate({ index, value }))
        }
      />
    </SectionChildWrapper>
  );
};

export default EducationItem;