import InputBox from "../../Form/Input/InputBox";
import TextArea from "../../Form/TextArea/TextArea";
import Section from "../Section";

const PersonalSection = () => {
  return (
    <Section name="Personal Details">
      <InputBox label="Full Name" />
      <InputBox label="Email" />
      <InputBox label="Job Title" />
      <InputBox label="Phone" />
      <TextArea label="About"/>
    </Section>
  );
};

export default PersonalSection;
