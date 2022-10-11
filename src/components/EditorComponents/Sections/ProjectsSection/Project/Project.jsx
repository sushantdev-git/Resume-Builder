import { faArrowDown, faArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux"
import { HelperActions } from "../../../../../store/Features/Helper";
import { ProjectsActions } from "../../../../../store/Features/ProjectsSectionSlice";
import IconButton from "../../../../Custom/Buttons/IconButton/IconButton";
import SectionChildWrapper from "../../SectionComponent/SectionChildWrapper";
import InputBox from "../../../../Custom/Form/Input/InputBox";
import ListView from "../../../../Custom/Form/ListView/ListView";

const Project = ({data, index, projectSize}) =>{
    const dispatch = useDispatch();

    const addAboutItem = () => {
        dispatch(ProjectsActions.addAbout({index}));
    };

    const deleteAboutItem = (ind) => {
        dispatch(ProjectsActions.deleteAbout({index, ind}));
    };

    const updateAboutItem = (value, ind) => {
        dispatch(ProjectsActions.updateAbout({index, ind, value}));
    };

    const buttons = (
        <>
            {index<projectSize-1? <IconButton icon={faArrowDown} onClick={() => dispatch(ProjectsActions.moveProjectDown(index))}/>:null}
            {index>0 ? <IconButton icon={faArrowUp} onClick={() => dispatch(ProjectsActions.moveProjectUp(index))} />:null}
            <IconButton icon={faTrash} color="red" onClick={() => dispatch(HelperActions.openModal({
                callBack: () => dispatch(ProjectsActions.deleteProject({index})),
                content: `Do you want to delete Project/${data.projectTitle}`
            }))} />
        </>
    )

    return (
        <SectionChildWrapper
            name={data.projectTitle}
            cssStyle={{
                width:"100%",
                margin:"auto",
            }}
            buttons={buttons}
        >

            <InputBox
                label="Project Title"
                value={data.projectTitle}
                inputValueChange={(val) => 
                    dispatch(
                        ProjectsActions.updateTitle({
                            index:index,
                            value: val,
                        })
                    )
                }
            >
            </InputBox>

            <ListView
                label="About"
                List={data.about}
                addItem={addAboutItem}
                deleteItem={deleteAboutItem}
                updateItem={updateAboutItem}
            ></ListView>

        </SectionChildWrapper>
    )
}

export default Project;