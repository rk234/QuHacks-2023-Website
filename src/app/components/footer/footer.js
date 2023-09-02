import styles from './component.module.css'
import Link from 'next/link';

export default function Footer() {
  return (
    <main className={styles.container}>
        <div className={styles.col}>
            <Link href="/" className={styles.sectionheader}>QuHacks 2023</Link>
            <a className={styles.navlink} href="mailto:freddy@quhacks.tech">Email</a>
            <a className={styles.navlink} href="DISCORD_URL">Join our Discord!</a>
        </div>
        <div className={styles.col}>
            <h3 className={styles.sectionheader}>Site Links</h3>
            <p>TODO</p>
        </div>
        <div className={styles.lastcol}>
            <h3 className={styles.sectionheader}>Contributors</h3>
            <p className={styles.contribs}>
            Ramy Kaddouri<br/>
            </p>
        </div>
    </main>
  )
}