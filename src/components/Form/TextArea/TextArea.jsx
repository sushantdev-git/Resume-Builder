import styles from './style.module.css';


const TextArea = (props) => {
    console.log(props)
    return (
        <div className={styles.TextArea} >
            <label>{props.label}</label>
            <textarea value={props.value} onChange={(e) => props.onValChange ? props.onValChange(e.target.val) : null} style={props.style}/>
        </div>
    )
}


export default TextArea;