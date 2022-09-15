import styles from './List.module.css'

const List = (props) => {
    return (
        <ul className={styles.Container}>
            {props.items.map((item) => {
                return (
                    <li>{item}</li>
                )
            })}
        </ul>
    );
}

export default List