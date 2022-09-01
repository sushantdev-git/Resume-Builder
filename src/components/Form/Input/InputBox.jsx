import styles from './InputBox.module.css';

const InputBox = (props) => {
    return (
        <div className={styles.InputBox}>
            <label>{props.label}</label>
            <input type="text" onChnage={e => props.inputValueChange(e.target.value)} />
        </div>
    )
}

export default InputBox;