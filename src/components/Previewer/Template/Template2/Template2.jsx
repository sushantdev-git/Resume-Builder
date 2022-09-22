import Top from "./Top/Top";
import styles from './Template2.module.css' 
import Education from "./Sub-Sections/Education/Education";
import Experience from "./Sub-Sections/Experience/Experience";
import Projects from "./Sub-Sections/Projects/Projects";
import Skills from "./Sub-Sections/Skills/Skills";
import React from "react";

const Template2 =  React.forwardRef((props, ref) =>{
    return (
        <div className={styles.Body} ref={ref}>
            <Top/>
            <Education/>
            <Experience/>
            <Projects/>
            <Skills/>
        </div>
    )
});

export default Template2;