import styles from "./NameAndDuration.module.css"

function NameAndDuration(){
    return(
        <div className={styles.display}>
            <div>
                <p className={styles.UniversityName}>Scranton University</p>
                <p>BA Business Administration</p>
            </div>
            <p className={styles.duration}>From-Till</p>
        </div>
    )
}
export default NameAndDuration