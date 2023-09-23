import styles from "./page.module.css"

export default function Timeline() {
    return (
        <div className={styles.content}>
            <div className={styles.headContainer}>
                <div className={styles.head}>
                    <div className={styles.headtext}>
                        <h1>Timeline</h1>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.timeline}>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                        <   img src="timeline/pic-2018.jpg" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2018</header>
                            <div className={styles.textContainer}>
                                Held at Towson University on December 8th, 2018.
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                            <img src="timeline/pic-2017.jpg" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2017</header>
                            <div className={styles.textContainer}>
                                The second QuHacks event! Held at UMBC on December 9th, 2017.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}