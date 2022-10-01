import styles from './Experience.module.css'
import SectionHeading from '../../Component/SectionHeading/SectionHeading'
import Job from './Job/Job'
import { useSelector } from 'react-redux'

const Experience = () =>{
    const jobs=useSelector((state) => state.experience.jobs)
    console.log(jobs);
    return (
        <div className={styles.Container}>
            <SectionHeading id="experience" value="Experience"></SectionHeading>
            {jobs.map(job => {return <Job info={job}></Job>})}
        </div>
    )
}

export default Experience;