import styles from './Paragraph.module.css'

const Paragraph = (props) => {
    return (
        <p className={styles.Paragraph}>{props.value}</p>
    );
}

export default Paragraph;