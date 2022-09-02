import styles from './style.module.css';


const TextArea = (props) => {
    return (
        <div className={styles.TextArea}>
            <label>{props.label}</label>
            <textarea />
        </div>
    )
}


export default TextArea;