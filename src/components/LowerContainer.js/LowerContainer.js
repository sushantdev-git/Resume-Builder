import styles from './LowerContainer.module.css'

const LowerContainer=()=>{
    return (
        <>
            <div className={styles.LowerContainer}>
                <div className={styles.LowerContainerLeft}>
                    <h1 className={styles.MainHeading}>Resume Builder</h1>
                        <h4 className={styles.Intro}>
                            "By employing the best practices and innovative tech,<br/>Resume Builder
                            boosts your chances of landing a better job."
                        </h4>
                    <button className={styles.btn}>Get Started</button>
                </div>
                    <img className={styles.LowerContainerRight} src="./Images/LandingImage.png" alt="Landing Page Image"/>
            </div>
        </>
    )
}
export default LowerContainer