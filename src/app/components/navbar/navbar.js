"use client"; // next js kinda weird need to add this.
import styles from './component.module.css'
import Link from 'next/link';

export default function NavBar() {

  const scrollToComponent = (id) => {
    const targetComponent = document.getElementById(id); // Adjust the ID as needed
    if (targetComponent) {
      targetComponent.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className={styles.navbar}>
      <Link href='/' className={styles.name}><span>$</span>QuHacks 2024<span className={styles.cursor}>█</span></Link>
      <Link className={styles.navlink} href='#about'>About</Link>
      <Link className={styles.navlink} href='#schedule'>Schedule</Link>
      <Link className={styles.navlink} href="#faq">FAQ</Link>
      <Link className={styles.navlink} href="#team">Team</Link>
      <Link className={styles.navlink} rel="noreferrer noopener" target='_blank' href="https://discord.gg/H2EteNDhEP">Discord</Link>
    </nav>
  )
}
