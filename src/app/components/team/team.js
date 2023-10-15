import styles from './component.module.css';
import TeamCard from './teamcard/teamcard'
import Link from 'next/link';

export default function TeamSection() {
    let teamCards = [
        ["Aryan Sharma", "Director", "/headshots/aryan_headshot.jpg"],
        ["Seonyoung Lee", "Director", "/headshots/seonyoung_headshot.jpg"],
        
        ["Caleb Shim", "Treasurer", "/headshots/caleb_headshot.jpg"],

        ["Ramy Kaddouri", "Website Team Lead", "/headshots/ramy_headshot.jpeg"],
        ["Nicole Luo", "Website Dev", "/headshots/nicole_headshot.png"],
        ["Sai Chandra", "Website Dev", "/headshots/sai_siddhish_headshot.png"],
        ["Joel Chemmanur", "Website Dev", "/headshots/joel_headshot.jpg"],

        ["Jamie Lee", "Graphic Designer", "/headshots/jamie_headshot.jpg"],
        ["Joshua Oh", "Graphic Designer", "/headshots/joshua_headshot.jpg"],

        ["Gordon Mei", "Outreach Team", "/headshots/gordon_headshot.png"],
        ["Ishani Ghosh", "Outreach Team", "/headshots/ishani_headshot.png"],
        ["Luis Valerio", "Outreach Team", "/headshots/luis_headshot.png"],

        ["Akhil Shastry", "Sponsor Liaison", "/headshots/akhil_headshot.jpg"],

        ["Jaden  Li", "Workshop Creator", "/headshots/jaden_headshot.jpg"],
        ["Neeraj Pawar", "Workshop Creator", "/headshots/neeraj_headshot.jpg"],
        ["Victor Liu", "Workshop Creator", "/headshots/victor_headshot.jpg"],
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