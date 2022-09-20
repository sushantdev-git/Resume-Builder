import Template1 from '../Template/Template1/Template'
import Template2 from '../Template/Template2/Template2'
import Template3 from '../Template/Template3/Template'
import styles from './Previewer.module.css'
import { useSelector } from 'react-redux'

const Previewer= () =>{
    const templates=[
        () => {return <Template1></Template1> },
        () => {return <Template2></Template2>},
        () => {return <Template3></Template3>}
    ]

    return (
        <div className={styles.Previewer}>
          <div className={styles.Container}>
            {templates[useSelector((state) =>  state.template.template)]()}
            </div>
        </div>
    )   
}

export default Previewer;
