import styles from "./component.module.css"

export default function Sponsors() {
    return (
        <div className={styles.sectionContainer}>
            <h1 className={styles.title}>Sponsors</h1>
            <div className={styles.sponsorCall}>
                <p>Interested in sponsoring QuHacks this year? <a href="mailto:info@quhacks.tech">Contact us!</a></p>
            </div>
            {/* <div className={`${styles.tier} ${styles.platinum}`}>
                <h1 className={styles.tiername}>Platinum</h1>
                <div className={styles.row}>
                    <img src="sponsors/inspirit-ai.png" />
                </div>
            </div>*/}
            
            <div className={`${styles.tier} ${styles.gold}`}>
                <h1 className={styles.tiername}>Gold</h1>
                <div className={styles.row}>
                    <a rel="noreferrer noopener" target='_blank' href="https://oneilinteractive.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/oneil-interactive.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.quadeducationgroup.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="https://uploads-ssl.webflow.com/61afd21262830d1b23b88ef7/61b924e5f77f0541aa6755a6_Quad%20Education%20-%20Color%202x.svg" />
                    </a>
                </div>
            </div>

            <div className={`${styles.tier} ${styles.silver}`}>
                <h1 className={styles.tiername}>Silver</h1>
                <div className={styles.row}>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.unitedcoder.com/w/">
                        <img style={{borderRadius: 8, border: "0.5rem solid white"}} src="sponsors/united-coder.jpg" />
                    </a>
                </div>
            </div>

            <div className={`${styles.tier} ${styles.bronze}`}>
                <h1 className={styles.tiername}>Bronze</h1>
                <div className={styles.row}>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.inspiritai.com/">
                        <img src="sponsors/inspirit-ai.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://artofproblemsolving.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/aops.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.desmos.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/desmos.png" />
                    </a>
                </div>
            </div>
        </div>
    )
}