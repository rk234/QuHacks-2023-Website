import styles from "./component.module.css"

export default function Sponsors() {
    return (
        <div className={styles.sectionContainer}>
            <h1 className={styles.title}>Sponsors</h1>
            <div className={styles.sponsorCall}>
                <p>Interested in sponsoring QuHacks this year? <a href="mailto:freddy@quhacks.tech">Contact us!</a></p>
            </div>
            {/* <div className={`${styles.tier} ${styles.platinum}`}>
                <h1 className={styles.tiername}>Platinum</h1>
                <div className={styles.row}>
                    <img src="sponsors/inspirit-ai.png" />
                </div>
            </div>
            
            <div className={`${styles.tier} ${styles.gold}`}>
                <h1 className={styles.tiername}>Gold</h1>
                <div className={styles.row}>
                    <img src="placeholder.png" />
                </div>
            </div>

            <div className={`${styles.tier} ${styles.silver}`}>
                <h1 className={styles.tiername}>Silver</h1>
                <div className={styles.row}>
                    <img src="placeholder.png" />
                </div>
            </div> */}

            <div className={`${styles.tier} ${styles.bronze}`}>
                <h1 className={styles.tiername}>Bronze</h1>
                <div className={styles.row}>
                    <img src="sponsors/inspirit-ai.png" />
                </div>
            </div>
        </div>
    )
}