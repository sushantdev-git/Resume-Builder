import styles from "./Education.module.css"
import NameAndDuration from "../NameAndDuration/NameAndDuration"
import { useSelector } from "react-redux";

function Education(){
    const data = useSelector((state)=>{
        return state.education.educations;
    });

    console.log(data,"education")
    return(
        <div className={styles.container}>  
            <div className={styles.heading}>Education</div>
            {data.map((ele, index)=>{
                return <NameAndDuration name={ele.institue} about ={ele.degree} timefrom ={ele.formDate} timeto={ele.tillDate}/>
            })}
            
        </div>
    )
}
export default Education