import { useDispatch } from "react-redux";
import InputBox from "../../../../Form/Input/InputBox";
import ListView from "../../../../Form/ListView/ListView";
import TextArea from "../../../../Form/TextArea/TextArea";
import SectionChildWrapper from "../../SectionComponent/SectionChildWrapper";
import styles from "./style.module.css";
import { JobsActions } from "../../../../../store/Features/ExperienceSectionSlice";
const JobSection = (props) => {
  const data = props.data;
  const dispatch = useDispatch();

  const addAboutItem = () => {
    dispatch(
      JobsActions.addAbout({
        index: props.index,
      })
    );
  };

  const deleteAboutItem = (ind) => {
    dispatch(
      JobsActions.deleteAbout({
        index: props.index,
        ind,
      })
    );
  };

  const updateAboutItem = (value, ind) => {
    dispatch(
      JobsActions.updateAbout({
        index: props.index,
        ind,
        value,
      })
    );
  };

  return (
    <SectionChildWrapper
      name={data.jobTitle}
      cssStyle={{
        width: "100%",
        margin: "auto",
      }}
    >
      <InputBox
        label="Job Title"
        value={data.jobTitle}
        inputValueChange={(val) =>
          dispatch(
            JobsActions.updateTitle({
              index: props.index,
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
              index: props.index,
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
              index: props.index,
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
              index: props.index,
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
              index: props.index,
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
