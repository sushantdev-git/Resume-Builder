import Template1 from "./Template/Template1/Template";
import Template2 from "./Template/Template2/Template";
import styles from "./Previewer.module.css";
import { useSelector } from "react-redux";
import { useCallback, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Previewer = () => {
  const templates = [
    (x) => {
      return <Template1 ref={x}></Template1>;
    },
    (x) => {
      return <Template2 ref={x}></Template2>;
    },
  ];

  const componentRef = useRef(null);

  const reactToPrintContent = useCallback(() => {
    console.log(componentRef)
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "Resume",
    removeAfterPrint: true,
    copyStyles:true,
    fonts:[
      {
        family: "Gilroy Black",
        source:
          "url(https://s166.convertio.me/p/ZnLj6w7hk5UMWX-0FIuwBg/9d87d9f4c362f9626dd4e1ce212104a7/Gilroy-Black-_1_.ttf)"
      }]
  });

  return (
    <div className={styles.Previewer}>
        <div className={styles.Actions}>
            <button onClick={handlePrint}>Download</button>
        </div>
      <div className={styles.Container}>
        {templates[useSelector((state) => state.template.template)](componentRef)}
      </div>
    </div>
  );
};

export default Previewer;

