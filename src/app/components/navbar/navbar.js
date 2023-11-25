"use client"; // next js kinda weird need to add this.
import { useState } from 'react';
import styles from './component.module.css'
import Link from 'next/link';

export default function NavBar() {
  let [mobLinksShown, setMobLinksShown] = useState(false)

  function toggleLinks() {
    setMobLinksShown(!mobLinksShown);
  }

  function hideLinks() {
    setMobLinksShown(false)
  }

  function dateStr() {
    return new Date().toUTCString();
  }
  

  return (
    <main>
    <nav className={styles.navbar}>
      <Link href='/' className={styles.name}><span>$</span>QuHacks 2024<span className={styles.cursor}>█</span></Link>

      <button className={styles.moreBtn} onClick={toggleLinks}>[+]</button>
      <Link className={styles.navlink} href='/#about'>About</Link>
      <Link className={styles.navlink} href='/#schedule'>Schedule</Link>
      <Link className={styles.navlink} href="/#faq">FAQ</Link>
      <Link className={styles.navlink} href="/#team">Team</Link>
      <Link className={styles.navlink} rel="noreferrer noopener" target='_blank' href="https://discord.gg/H2EteNDhEP">Discord</Link>
    </nav>
    {mobLinksShown ? 
    <div className={styles.mobileLinks}>
      <span className={styles.cmd}>Login {dateStr()}</span>
      <span className={`${styles.cmd} ${styles.typing}`}><span>$</span> ls ~/QuHacks</span>
      <div className={styles.cmdout}>
        <div className={styles.linkrow}><Link className={styles.mobnavlink} href='/#about' onClick={hideLinks}>./about</Link><div className={styles.spacer}></div><span className={styles.size}>{Math.round(Math.random()*100)} KB</span></div>
        <div className={styles.linkrow}><Link className={styles.mobnavlink} href='/#schedule' onClick={hideLinks}>./schedule</Link><div className={styles.spacer}></div><span className={styles.size}>{Math.round(Math.random()*100)} KB</span></div>
        <div className={styles.linkrow}><Link className={styles.mobnavlink} href="/#faq" onClick={hideLinks}>./faq</Link><div className={styles.spacer}></div><span className={styles.size}>{Math.round(Math.random()*100)} KB</span></div>
        <div className={styles.linkrow}><Link className={styles.mobnavlink} href="/#team"onClick={hideLinks}>./team</Link><div className={styles.spacer}></div><span className={styles.size}>{Math.round(Math.random()*100)} KB</span></div>
        <div className={styles.linkrow}><Link className={styles.mobnavlink} rel="noreferrer noopener" target='_blank' href="https://discord.gg/H2EteNDhEP">./discord</Link><div className={styles.spacer} onClick={hideLinks}></div><span className={styles.size}>{Math.round(Math.random()*100)} KB</span></div>
      </div>
    </div>
    : ""}
    </main>
  )
}
