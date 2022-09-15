import { useDispatch } from "react-redux";
import InputBox from "../../../../Form/Input/InputBox";
import ListView from "../../../../Form/ListView/ListView";
import SectionChildWrapper from "../../SectionComponent/SectionChildWrapper";
import styles from "./style.module.css";
import { JobsActions } from "../../../../../store/Features/ExperienceSectionSlice";
import IconButton from "../../../../Buttons/IconButton/IconButton";

import {
  faAngleDown,
  faArrowDown,
  faArrowUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const JobSection = ({data, index, jobSize}) => {

  const dispatch = useDispatch();

  const addAboutItem = () => {
    dispatch(
      JobsActions.addAbout({
        index,
      })
    );
  };

  const deleteAboutItem = (ind) => {
    dispatch(
      JobsActions.deleteAbout({
        index,
        ind,
      })
    );
  };

  const updateAboutItem = (value, ind) => {
    dispatch(
      JobsActions.updateAbout({
        index,
        ind,
        value,
      })
    );
  };


  const buttons = (
    <>
      {index < jobSize-1 ? <IconButton icon={faArrowDown} onClick={() => dispatch(JobsActions.moveJobDown({index}))}/> : null}
      {index > 0 ? <IconButton icon={faArrowUp} onClick={() => dispatch(JobsActions.moveJobUp({index}))}/> : null}
      <IconButton icon={faTrash} color="red" onClick={() => dispatch(JobsActions.deleteJob({index}))}/>
    </>
  )
  return (
    <SectionChildWrapper
      name={data.jobTitle}
      cssStyle={{
        width: "100%",
        margin: "auto",
      }}
      buttons={buttons}
    >
      <InputBox
        label="Job Title"
        value={data.jobTitle}
        inputValueChange={(val) =>
          dispatch(
            JobsActions.updateTitle({
              index: index,
              value: val,
            })
          )
        }
      />
      <InputBox
        label="Employer"
        value={data.employer}
        inputValueChange={(val) =>
          dispatch(
            JobsActions.updateEmployer({
              index: index,
              value: val,
            })
          )
        }
      />
      <InputBox
        label="From Date"
        type="month"
        style={{ width: "25%" }}
        value={data.fromDate}
        inputValueChange={(val) =>
          dispatch(
            JobsActions.updateFromDate({
              index: index,
              value: val,
            })
          )
        }
      />
      <InputBox
        label="Till Date"
        type="month"
        style={{ width: "25%" }}
        value={data.toDate}
        inputValueChange={(val) =>
          dispatch(
            JobsActions.updateToDate({
              index: index,
              value: val,
            })
          )
        }
      />
      <InputBox
        label="City"
        value={data.city}
        inputValueChange={(val) =>
          dispatch(
            JobsActions.updateCity({
              index: index,
              value: val,
            })
          )
        }
      />
      {/* <TextArea label="About Experience"/> */}
      <ListView
        label="About"
        List={data.About}
        addItem={addAboutItem}
        deleteItem={deleteAboutItem}
        updateItem={updateAboutItem}
      />
    </SectionChildWrapper>
  );
};

export default JobSection;
