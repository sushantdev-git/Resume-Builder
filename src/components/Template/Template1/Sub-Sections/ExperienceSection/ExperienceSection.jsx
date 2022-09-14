import styles from './ExperienceSection.module.css'
import Heading from '../../../Components/Heading/Heading'
import Job from './Job/Job'
import { useSelector } from 'react-redux'

const ExperienceSection = () => {
    const jobs=useSelector((state) => state.experience.jobs)
    return (
        <>
            <Heading value="Employement History"></Heading>
            {jobs.map(job => {return <Job info={job}></Job>})}
        </>
    );
}

export default ExperienceSection