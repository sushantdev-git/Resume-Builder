import Section from "../Section"
import { useDispatch, useSelector } from "react-redux";

import {ProjectsActions} from '../../../../store/Features/ProjectsSectionSlice'

import Project from './Project/Project'

const ProjectsSection = ({sectionDetails}) => {
    const Projects = useSelector((state) => state.projects.projects)
    const dispatch=useDispatch();
    return (
        <Section name="Projects" sectionDetails={sectionDetails}
         addChildName={"Add Project"}
         onClickAddChild={()=>dispatch(ProjectsActions.addNew())}
        >

            {Projects.map((projectData, ind) => {
                return <Project key={ind} data={projectData} index={ind} projectSize={Projects.length}/>
            })}        
        </Section>
    )
}

export default ProjectsSection;