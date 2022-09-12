import { useDispatch, useSelector } from "react-redux";
import Section from "../Section";
import SkillItem from "./SkillItem/SkillItem";
import { SkillsActions } from "../../../../store/Features/SkillsSectionSlice";

const SkillsSection = (props) => {

    const skills = useSelector(state => state.skills.skills)
    const dispatch = useDispatch();
    let skillitemssize = 5;
    return (
        <Section name="Skills" sectionDetails={props.sectionDetails} addChildName={"Add Skills"} onClickAddChild={() => {dispatch(SkillsActions.addNewSkill())}}>
            {skills.map((skillData, ind) => {
                return <SkillItem key={ind} showDivider={ind+1 < skills.length} data={skillData} index={ind}/>
            })}
        </Section>
    )
}

export default SkillsSection;