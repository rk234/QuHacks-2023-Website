import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import AboutSection from './components/about/about';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.homecontainer}>
        <Image src="/logo.png" width={100} height={100} sizes='(max-width: 750px) 15rem, 20rem' className={styles.logo} />
        <div>
          <span className={styles.title}>QuHacks 2023</span>
          <p>December 9th, 2023</p>
          <div className={styles.btngroup}>
            <button className='btn-primary'>Submit Your Project!</button>
            <button className='btn-secondary'>Register!</button>
          </div>
        </div>
      </div>
      <div className={styles.content} id="about">
        <AboutSection></AboutSection>
      </div>
    </main>
  )
}
