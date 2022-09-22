import styles from './style.module.css';


const TextArea = (props) => {
    return (
        <div className={styles.TextArea} >
            <label>{props.label}</label>
            <textarea value={props.value} onChange={(e) => props.onValChange ? props.onValChange(e.target.value) : null} style={props.style}/>
        </div>
    )
}


export default TextArea;    