import styles from './List.module.css'

const List = (props) => {
    return (
        <ul style={{listStyleType:props.listType}}>
            {props.items.map((item) => {
                return (
                    <li>{item}</li>
                )
            })}
        </ul>
    );
}

export default List