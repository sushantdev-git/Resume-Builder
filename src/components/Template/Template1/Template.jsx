import Sidebar from "./Sections/Sidebar/Sidebar";
import Mainbody from "./Sections/Mainbody/Mainbody";
import styles from "./Template.module.css";
import React from "react";

const Template = React.forwardRef((props, ref) => {
  return (
    <div className={styles.Container} ref={ref}>
      {/* <style type="text/css" media="print">
        {`
            @page {
              size: A4;
            }
            @page {
              bleed: 7pt;
            }
        `}
      </style> */}
      <Sidebar></Sidebar>
      <Mainbody></Mainbody>
    </div>
  );
});

export default Template;
