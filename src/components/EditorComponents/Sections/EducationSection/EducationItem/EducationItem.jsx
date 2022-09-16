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
import { ModalActions } from "../../../../../store/Features/Modal";

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
        onClick={() =>
          dispatch(
            ModalActions.openModal({
              callBack: () =>
                dispatch(EducationActions.deleteEducation({ index })),
              content: `Do you want to delete Education/${data.degree}?`,
            })
          )
        }
      />
    </>
  );

  console.log(data);
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
        value={data.institue}
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
        value={data.formDate}
        inputValueChange={(value) =>
          dispatch(EducationActions.updateFromDate({ index, value }))
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
