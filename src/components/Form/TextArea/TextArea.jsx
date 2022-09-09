import styles from './style.module.css';


const TextArea = (props) => {
    return (
        <div className={styles.TextArea}>
            <label>{props.label}</label>
            <textarea onChange={e => props.inputValueChange(e.target.value)} />
        </div>
    )
}


export default TextArea;