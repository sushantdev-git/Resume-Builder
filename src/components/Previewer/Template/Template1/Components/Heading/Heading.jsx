import styles from './Heading.module.css'

const Heading = (props) => {
    return (
        <p className={styles.Heading}>{props.value}</p>
    );
}

export default Heading;