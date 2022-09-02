import styles from './LowerContainer.module.css'

const LowerContainer=()=>{
    return (
        <>
            <div className={styles.LowerContainer}>

                <div className={styles.LowerContainerLeft}>
                    <p className={styles.MainHeading}>Resume Builder</p>
                        <p className={styles.Intro}>
                            By employing the best practices and innovative tech,Resume Builder
                            boosts your chances of landing a better job.
                        </p>
                    <button className={styles.btn}>Get Started</button>
                </div>

                {/* <div className={styles.LowerContainerRight}> */}
                    <img className={styles.LowerContainerRight} src="./Images/LandingImage.png" alt="Landing Page Image "  />
                {/* </div> */}
            </div>
        </>
    )
}
export default LowerContainer