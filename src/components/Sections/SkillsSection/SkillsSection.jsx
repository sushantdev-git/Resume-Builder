import Section from "../Section";
import SkillItem from "./SkillItem/SkillItem";


import {
    faArrowUp,
    faTrash,
    faArrowDown,
    faAdd
  } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../Buttons/IconButton/IconButton";

const SkillsSection = () => {

    const buttons = (
        <>
            <IconButton icon={faAdd}/>
            <IconButton icon={faArrowUp}/>
            <IconButton icon={faArrowDown}/>
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