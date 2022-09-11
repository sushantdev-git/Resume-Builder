// import IconButton from '../../../Buttons/IconButton/IconButton';
import Section from "../Section";
import JobSection from "./JobSection/JobSection";
// import styles from './style.module.css'

import { JobsActions } from "../../../../store/Features/ExperienceSectionSlice";
import { useDispatch, useSelector } from "react-redux";

const ExperienceSection = (props) => {
  const dispatch = useDispatch();
  const Jobs = useSelector((state) => state.experience.jobs);

  return (
    <Section
      name="Experience"
      sectionDetails={props.sectionDetails}
      addChildName={"Add Job"}
      onClickAddChild={() => dispatch(JobsActions.addNew())}
    >
      {Jobs.map((jobData, ind) => {
        return <JobSection key={ind} data={jobData} index={ind} />;
      })}
    </Section>
  );
};

export default ExperienceSection;
