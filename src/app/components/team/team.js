import styles from './component.module.css';
import TeamCard from './teamcard/teamcard'
import Link from 'next/link';

export default function TeamSection() {
    let teamCards = [
        ["Aryan Sharma", "Director", "/headshots/aryan_headshot.jpg"],
        ["Seonyoung Lee", "Director", "/headshots/seonyoung_headshot.jpg"],

        ["Neeraj L", "Secretary", "/headshots/neeraj_headshot.jpg"],

        ["Caleb Shim", "Treasurer", "/headshots/caleb_headshot.jpg"],

        ["Ramy Kaddouri", "Website Team Lead", "/headshots/ramy_headshot.jpeg"],
        ["Joel L", "Website Dev", "/headshots/joel_headshot.jpg"],
        ["Sai Chandra", "Website Dev", "/headshots/sai_siddhish_headshot.png"],
        ["Nicole Luo", "Website Dev", "/headshots/nicole_headshot.png"],

        ["Gordon L", "Outreach Team", "/headshots/gordon_headshot.png"],

        ["Akhil L", "Sponsor Liason", "/headshots/akhil_headshot.jpg"],

        ["Jaden  Li", "Workshop Creator", "/headshots/jaden_headshot.jpg"],
        ["Victor Liu", "Workshop Creator", "/headshots/victor_headshot.jpg"],

        ["Ishani Ghosh", "TBD", "/headshots/ishani_headshot.png"],
        ["Luis Valerio", "TBD", "/headshots/luis_headshot.png"],
    ]

    teamCards = teamCards.map((card) => {
        return (
            <TeamCard name={card[0]} position={card[1]} image={card[2]} key={card[0]} />
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