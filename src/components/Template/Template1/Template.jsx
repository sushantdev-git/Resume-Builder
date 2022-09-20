import Sidebar from './Sections/Sidebar/Sidebar'
import Mainbody from './Sections/Mainbody/Mainbody'
import styles from './Template.module.css'
import React from 'react';

const Template = React.forwardRef((props, ref) => {
    return (
        <div className={styles.Container} ref={ref}>
            <Sidebar></Sidebar>
            <Mainbody></Mainbody>
        </div>
    );
});

export default Template