import { faAngleDown, faArrowDown, faArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import IconButton from "../../../../Custom/Buttons/IconButton/IconButton";
import { LinksActions } from "../../../../../store/Features/LinksSectionSlice";
import { HelperActions } from "../../../../../store/Features/Helper";
import SectionChildWrapper from "../../SectionComponent/SectionChildWrapper";
import InputBox from "../../../../Custom/Form/Input/InputBox";

import styles from './Link.module.css'

const Link = ({data, index, length}) =>{
    const {linkName, link} = data
    const dispatch=useDispatch();

    const buttons = (
        <>
            {index > 0 ? (
                <IconButton 
                    icon={faArrowUp}
                    onClick={() => dispatch(LinksActions.moveUp({index}))}
                />
            ):null}
            {index<length-1 ? (
                <IconButton
                    icon={faArrowDown}
                    onClick={() => dispatch(LinksActions.moveDown({index}))}
                />
            ):null}
            <IconButton
                icon={faTrash}
                color="red"
                onClick={() => 
                    dispatch(
                        HelperActions.openModal({
                            callBack: () => dispatch(LinksActions.deleteLink({index})),
                            content: `Do you want to delete Link/${linkName}`,
                        })
                    )
                }
            />
        </>
    );

    return (
        <SectionChildWrapper
            buttons={buttons}
            name={linkName}
            cssStyle={{width:"100%", margin:"auto"}}
        >
            <div className={styles.Container}>
                <InputBox
                    label="Link Name"
                    value={linkName}
                    inputValueChange={(val) => 
                        dispatch(LinksActions.updateName({
                            index, value:val,
                        }))
                    }
                />

                <InputBox
                    label="Link"
                    value={link}
                    inputValueChange={(val) => dispatch(LinksActions.updatelink({index, value:val}))}
                />


            </div>
        </SectionChildWrapper>
    )
}

export default Link;