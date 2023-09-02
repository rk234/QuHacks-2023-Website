import styles from "./component.module.css"
import Link from "next/link"

export default function AboutSection() {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.aboutInfoContainer}>
                <h1 className={styles.title}>About Us</h1>

                <p className={styles.text}>CHS Pyoneers is Centennial High School's premier programming club! Since its inception in 2020, the Pyoneers club has rapidly grown to become one of the largest clubs in Centennial. It has hosted the 2021, 2022, and 2023 Centennial Informatics Tournaments with over <font color="green">250+ cumulative attendees</font> over the years. Additionally, the club has held Python lessons at numerous middle and high schools with <font color="green">200+ students</font> taught over the years.
                    Currently, the club is still rapidly growing and has over <font color="green">100 members</font> who all play an active part in our community!
                </p>
            </div>

            <div className={styles.aboutImg}>
                <img src="/placeholder.png"></img>
            </div>
        </div>
    )
}