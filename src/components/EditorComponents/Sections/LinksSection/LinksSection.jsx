import { useDispatch, useSelector } from "react-redux";
import {LinksActions} from '../../../../store/Features/LinksSectionSlice'
import { SkillsActions } from "../../../../store/Features/SkillsSectionSlice";

import Section from "../Section";
import Link from "./Link/Link"

const LinksSection = ({sectionDetails}) => {
    const links=useSelector((state)=> state.links.links)
    const dispatch=useDispatch();
    return (
        <Section 
            name="Links And Socials" 
            sectionDetails={sectionDetails}
            addChildName={"Add Link"}
            onClickAddChild={() => {
                dispatch(LinksActions.addNewLink());
            }}
        >
            {
                links.map((linkData, ind) => {
                    return (
                        <Link
                            key={ind}
                            data={linkData}
                            index={ind}
                            length={links.length}
                        />
                    )
                })
            }
        </Section>
    )
}

export default LinksSection;