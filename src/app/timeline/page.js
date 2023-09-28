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
                        <img src="timeline/pic-2023.jpg" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2023</header>
                            <div className={styles.textContainer}>
                                Held at Howard Community College on January 14th, 2023. There were 100+ registrants who submitted some great projects! During the event, workshops on Intro to Programming, AI, and Web Development were held. And just like last year's event (2021), there was a typeracer competition.<br /><br />
                                *<em>There wasn't a QuHacks 2022 due to a postponement which shifted the event from December 2022 to January 2023. QuHacks 2022 was renamed to QuHacks 2023 to avoid confusion.</em>
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                        <img src="timeline/pic-2021.png" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2021</header>
                            <div className={styles.textContainer}>
                                Held virtually on December 18th, 2021. Even though this was a virtual, it was a very fun event with close to 70 participants and 20 project submissions! There were workshops on Java, Python, Cybersecurity, and Web Development with a typeracer competition to finish things off.
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                        <img src="timeline/pic-2020.png" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2020</header>
                            <div className={styles.textContainer}>
                                Held virtually on December 18th, 2020. We offered a computer science college panel, special guest speakers, and interesting prompts for both the novice and advanced divisions! 
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                        <img src="timeline/pic-2019.jpg" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2019</header>
                            <div className={styles.textContainer}>
                                Held at Towson University on December 14th, 2019. We had more than 50 participants and offered exciting crash courses on Java, Python, and Web Development! We also had some pretty cool sponsors, including Wolfram, repl.it, Balsamiq, and more!
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                        <   img src="timeline/pic-2018.jpg" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2018</header>
                            <div className={styles.textContainer}>
                                Held at Towson University on December 8th, 2018. Unfortunately, the website for QuHacks 2018 wasn't fully archived so the current team couldn't find any more info to put here :( . Instead, enjoy the picture of stickers!
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
                                The second QuHacks event! Held at UMBC on December 9th, 2017. This event is 6 years old at this point, so this sentence is just here to pad some space since we couldn't find any more info for this QuHacks as well...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}