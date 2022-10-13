import styles from './ProjectsSection.module.css'
import Heading from '../../Components/Heading/Heading'
import Project from './Project/Project'
import { useSelector } from 'react-redux'

const ProjectsSection = () => {
    const projects=useSelector(state => state.projects.projects);
    return (
        <div className={styles.Container}>
            <Heading value={"Projects"}></Heading>
            {projects.map(project => <Project projectInfo={project} />)}
        </div>  
    );
}

export default ProjectsSection;