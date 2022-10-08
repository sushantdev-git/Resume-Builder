import Sidebar from "./Sections/Sidebar/Sidebar";
import Mainbody from "./Sections/Mainbody/Mainbody";
import styles from "./Template.module.css";
import React from "react";

const Template = React.forwardRef((props, ref) => {
  return (
    <div className={styles.Container} ref={ref}>
      <style type="text/css" media="print">
        {`
            @page {
              size: 2480px 3508px,
            },

            body{
              font-size:14px,
            }
        `}
      </style>
      <Sidebar></Sidebar>
      <Mainbody></Mainbody>
    </div>
  );
});

export default Template;

