import Template from '../Template/Template2/Template2'
import styles from './Previewer.module.css'

const Previewer= () =>{
    return (
        <div className={styles.Previewer}>
          <div className={styles.Container}>
            <Template></Template>
            </div>
        </div>
    )   
}

export default Previewer;