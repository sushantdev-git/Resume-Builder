import styles from './Jobs.module.css'
import Subheading from '../../../Components/Subheading/Subheading'
import Subscript from '../../../Components/Subscript/Subscript'
import List from '../../../Components/List/List'

const getDate= (date)=>{
    const months=["JANUARY","Feburary","March","April","May","June","July","August","September","October","November","December"]

    const year=date.substring(0, 4);
    const month=months[date.substring(5, 7)-1]
    return `${month}  ${year}`
}


const Job = ({info}) => {
    const heading=`${info.jobTitle} @ ${info.employer}, ${info.city}`;
    const startTime=getDate(info.fromDate);
    const endTime=getDate(info.toDate);
    const timeOfEmployement=`${startTime} - ${endTime}`
    return (
        <div className={styles.Container}>
            <Subheading value={heading}></Subheading>
            <Subscript value={timeOfEmployement}></Subscript>
            <List items={info.About}></List>
        </div>
    );
}

export default Job;