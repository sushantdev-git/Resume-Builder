import styles from './InputBox.module.css';

const InputBox = (props) => {
    return (
        <div className={styles.InputBox} style={props.style}>
            <div className={styles.Info}>
                <label>{props.label}</label> 
            </div>
            <input type={props.type ?? "text"} value={props.value} onChange={e => props.inputValueChange(e.target.value)} />
        </div>
    )
}

export default InputBox;