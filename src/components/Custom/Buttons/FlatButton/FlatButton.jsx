import styles from './style.module.css';

const FlatButton = (props) => {
    return (
        <div className={styles.FlatButton} onClick={props.onClick} style={props.style}>
            <p>{props.name}</p>
        </div>
    )
}

export default FlatButton;