import Section from "../Section";
import SkillItem from "./SkillItem/SkillItem";


import {
    faArrowUp,
    faTrash,
    faArrowDown,
    faAdd
  } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../Buttons/IconButton/IconButton";

import { useSelector, useDispatch } from "react-redux";
import { PositionActions } from "../../../store/Features/Position";
import {SKILLS_SECTION} from "../../../store/SectionIDS";

const SkillsSection = () => {


    const dispatch = useDispatch();

    const buttons = (
        <>
            <IconButton icon={faAdd} />
            <IconButton icon={faArrowUp} onClick={() => {
                dispatch(PositionActions.moveUp(SKILLS_SECTION));
            }}/>
            <IconButton icon={faArrowDown} onClick={() => {
                dispatch(PositionActions.moveDown(SKILLS_SECTION));
            }}/>
            <IconButton icon={faTrash} color="red"/>
        </>
    );

    return (
        <Section name="Skills" buttons={buttons}>
            <SkillItem />
            <SkillItem />
            <SkillItem />
        </Section>
    )
}

export default SkillsSection;