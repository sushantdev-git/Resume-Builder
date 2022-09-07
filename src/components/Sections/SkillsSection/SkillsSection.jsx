import Section from "../Section";
import SkillItem from "./SkillItem/SkillItem";

const SkillsSection = (props) => {


    return (
        <Section name="Skills" sectionDetails={props.sectionDetails}>
            <SkillItem />
            <SkillItem />
            <SkillItem />
        </Section>
    )
}

export default SkillsSection;