import styles from './Subheading.module.css'

const Subheading = (props) => {
    return (
        <p className={styles.Subheading}>{props.value}</p>
    );
}

export default Subheading;