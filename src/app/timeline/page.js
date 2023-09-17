import styles from "./page.module.css"

export default function Timeline() {
    return (
        <div className={styles.content}>
            <div className={styles.headContainer}>
                <div className={styles.head}>
                    <div className={styles.headtext}>
                        <h1>What we do</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa sapien. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Malesuada proin libero nunc consequat interdum varius. Cursus sit amet dictum sit amet justo donec enim diam. Vitae nunc sed velit dignissim sodales ut eu. Amet justo donec enim diam vulputate ut pharetra sit. Integer quis auctor elit sed.</p>
                    </div>
                    {/*The QH is just a placeholder for now*/}
                    <h1 className={styles.qh}>QH</h1>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.timeline}>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                            <img src="preview-card.png" />
                        </div>
                        <div>
                            <header className={styles.cardHeader}>Timeline Card Title</header>
                            <div className={styles.textContainer}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quas
                                ex vero enim in doloribus officiis ullam vel nam esse sapiente velit
                                incidunt. Eaque quod et, aut maiores excepturi sint.
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                            <img src="background.jpg" />
                        </div>
                        <div>
                            <header className={styles.cardHeader}>Timeline Card Title</header>
                            <div className={styles.textContainer}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quas
                                ex vero enim in doloribus officiis ullam vel nam esse sapiente velit
                                incidunt. Eaque quod et, aut maiores excepturi sint.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}