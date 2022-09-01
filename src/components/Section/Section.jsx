import styles from './Section.module.css';

const Section = (props) => {
    return (
        <div className={styles.Section}>
            <h2>{props.name}</h2>
            <div className={styles.SectionContents}>
                {props.children}
            </div>
        </div>
    )
}

export default Section;