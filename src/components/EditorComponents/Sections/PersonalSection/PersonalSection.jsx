import InputBox from "../../../Form/Input/InputBox";
import TextArea from "../../../Form/TextArea/TextArea";
import Section from "../Section";
import { useDispatch, useSelector } from "react-redux";
import { PersonalSectionActions } from "../../../../store/Features/PersonalSectionSlice";


const PersonalSection = (props) => {
  const info=useSelector((state) => state.personalDetails)
  const dispatch=useDispatch();
  return (
    <Section name="Personal Details" sectionDetails={props.sectionDetails}>
      <InputBox label="Full Name" value={info.name} inputValueChange={(newValue) => dispatch(PersonalSectionActions.changeName(newValue))}/>
      <InputBox label="Email" value={info.email} inputValueChange={(newValue) => dispatch(PersonalSectionActions.changeEmail(newValue))}/>
      <InputBox label="Job Title" value={info.job} inputValueChange={(newValue) => dispatch(PersonalSectionActions.changeJob(newValue))}/>
      <InputBox label="Phone" value={info.phoneNumber} inputValueChange={(newValue) => dispatch(PersonalSectionActions.changePhoneNumber(newValue))}/>
      <TextArea label="About" value={info.about} onValChange={(newValue) => dispatch(PersonalSectionActions.changeAbout(newValue))}/>
    </Section>
  );
};

export default PersonalSection;
