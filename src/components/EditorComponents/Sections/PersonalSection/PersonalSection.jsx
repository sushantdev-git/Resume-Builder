import InputBox from "../../../Form/Input/InputBox";
import TextArea from "../../../Form/TextArea/TextArea";
import Section from "../Section";
import { useDispatch } from "react-redux";
import { PersonalSectionActions } from "../../../../store/Features/PersonalSectionSlice";


const PersonalSection = (props) => {
  const dispatch=useDispatch();
  return (
    <Section name="Personal Details" sectionDetails={props.sectionDetails}>
      <InputBox label="Full Name" inputValueChange={(newValue) => dispatch(PersonalSectionActions.changeName(newValue))}/>
      <InputBox label="Email" inputValueChange={(newValue) => dispatch(PersonalSectionActions.changeEmail(newValue))}/>
      <InputBox label="Job Title" inputValueChange={(newValue) => dispatch(PersonalSectionActions.changeJob(newValue))}/>
      <InputBox label="Phone" inputValueChange={(newValue) => dispatch(PersonalSectionActions.changePhoneNumber(newValue))}/>
      <TextArea label="About" onValChange={(newValue) => dispatch(PersonalSectionActions.changeAbout(newValue))}/>
    </Section>
  );
};

export default PersonalSection;
