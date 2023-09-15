import styles from './component.module.css'
import Link from 'next/link';

export default function Footer() {
  return (
    <main className={styles.container}>
        <div className={styles.col}>
            <Link href="/" className={styles.sectionheader}>QuHacks 2024</Link>
            <a className={styles.navlink} href="mailto:freddy@quhacks.tech">Email</a>
            <a className={styles.navlink} rel="noreferrer noopener" target='_blank' href="https://discord.gg/H2EteNDhEP">Join our Discord!</a>
        </div>
        <div className={styles.col}>
            <h3 className={styles.sectionheader}>Site Links</h3>
            <Link className={styles.navlink} href='#about'>About</Link>
            <Link className={styles.navlink} href='#schedule'>Schedule</Link>
            <Link className={styles.navlink} href="#faq">FAQ</Link>
        </div>
        <div className={styles.lastcol}>
            <h3 className={styles.sectionheader}>Contributors</h3>
            <p className={styles.contribs}>
            Ramy Kaddouri<br/>
            Nicole Luo<br/>
            Sai Siddhish Chandra Sekaran
            </p>
        </div>
    </main>
  )
}