import { useState } from 'react';
import styles from './style.module.css';

const levelColor = {
    0: "#dae3f5",
    1: "#FF5958",
    2: "#FE9158",
    3: "#FFBA1B",
    4: "#81CC13",
    5: "#25B368",
}

const levelName = {
    1: "Novice",
    2: "Beginner",
    3: "Skillfull",
    4: "Experienced",
    5: "Master",
}

const SkillLevelPicker = () => {

    const [Level, setLevel] = useState(4);

    return (
        <div className={styles.SkillLevelPicker}>
            <label>Level - {levelName[Level]}</label>
            <div className={styles.Body}>
                {[...Array(5)].map((_, ind) => {
                    return (
                        <div 
                            key={ind}
                            className={styles.Box} 
                            style={{backgroundColor : ind < Level ? levelColor[Level] : levelColor[0]}}
                            onClick={() => setLevel(ind+1)}
                        ></div>
                    )
                })}
            </div>
        </div>
    )
}

export default SkillLevelPicker;