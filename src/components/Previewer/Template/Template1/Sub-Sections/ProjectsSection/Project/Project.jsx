import Subheading from '../../../Components/Subheading/Subheading'
import List from '../../../Components/List/List'

import styles from './Project.module.css'

const Project = ({projectInfo}) => {
    console.log(projectInfo.about)
    return (
        <div>
            <Subheading value={projectInfo.projectTitle}></Subheading>
            <List items={projectInfo.about}></List>
        </div>
    )
}

export default Project;