import styles from './Subscript.module.css'

const Subscript = (props) => {
    return (
        <p className={styles.Subscript}>{props.value}</p>
    )
}

export default Subscript