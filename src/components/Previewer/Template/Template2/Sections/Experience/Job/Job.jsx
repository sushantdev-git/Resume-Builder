import style from './Job.module.css'

const Job=({info}) => {
    return (
        <div className={style.Container}>
            <div className={style.flex}>
                <div className={style.employer}>{info.employer}</div>
                <div className={style.date}>{`${info.fromDate} - ${info.toDate}`}</div>
            </div>
            <div className={style.flex}>
                <div className={style.jobTitle}>{info.jobTitle}</div>
                <div className={style.city}>{info.city}</div>
            </div>
            {info.About.map(about => {return <div style={{ fontSize:"0.7rem", width:'80%', margin:'5px 0px'}}>{`> ${about}`}</div>})}
        </div>
    )
}

export default Job;