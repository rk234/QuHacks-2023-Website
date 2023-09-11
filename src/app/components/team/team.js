import styles from './component.module.css';
import TeamCard from './teamcard/teamcard'
import Link from 'next/link';

export default function TeamSection() {
    let teamCards = [
        ["Aryan Sharma", "Director", "/headshots/aryan_headshot.jpg"],
        ["Ramy Kaddouri", "Website Team Lead", "/headshots/ramy_headshot.jpeg"],
        ["Sai Chandra", "Website Dev", "/headshots/sai_siddhish_headshot.png"],
        ["Nicole Luo", "Website Dev", "/headshots/nicole_headshot.png"],
        ["Ishani Ghosh", "TBD", "/headshots/ishani_headshot.png"],
        ["Jaden  Li", "TBD", "/headshots/jaden_headshot.jpg"],
        ["Victor Liu", "TBD", "/headshots/victor_headshot.jpg"],
        ["Luis Valerio", "TBD", "/headshots/luis_headshot.png"],
    ]

    teamCards = teamCards.map((card) => {
        return (
            <TeamCard name={card[0]} position={card[1]} image={card[2]} />
        )
    });

    return (
        <div className={styles.sectionContainer}>
            <h1 className={styles.title}>Meet the Team</h1>
            <div className={styles.cards}>
                {teamCards}
            </div>
        </div>
    )
};