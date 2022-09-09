import Section from "../Section";
import SkillItem from "./SkillItem/SkillItem";

const SkillsSection = (props) => {

    let skillitemssize = 5;
    return (
        <Section name="Skills" sectionDetails={props.sectionDetails} addChildName={"Add Skills"} onClickAddChild={() => {}}>
            {[...Array(skillitemssize)].map((_,ind) => {
                return <SkillItem key={ind+1} showDivider={ind+1 < skillitemssize}/>
            })}
        </Section>
    )
}

export default SkillsSection;