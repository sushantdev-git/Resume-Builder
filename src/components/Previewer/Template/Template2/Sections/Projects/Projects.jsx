import styles from './Projects.module.css'
import SectionHeading from '../../Component/SectionHeading/SectionHeading'
import Project from './Project/Project'
import { useSelector } from 'react-redux'

const Projects = () => {
    const projects=useSelector((state) => state.projects.projects)
    return (
        <div>
            <SectionHeading value="Projects" id="projects"></SectionHeading>
            {projects.map(project => {return <Project info={project}/>})}
        </div>
    )
}

export default Projects;