import styles from './component.module.css';
import TeamCard from './teamcard/teamcard'
import Link from 'next/link';

export default function TeamSection() {
    let teamCards = [
        ["Aryan Sharma", "Director", "/headshots/aryan_headshot.jpg"],
        ["Seonyoung Lee", "Director", "/headshots/seonyoung_headshot.jpg"],
        
        ["Ramy Kaddouri", "Website Team Lead", "/headshots/ramy_headshot.jpeg"],
        ["Nicole Luo", "Website Dev", "/headshots/nicole_headshot.png"],
        ["Sai Chandra", "Website Dev", "/headshots/sai_siddhish_headshot.png"],
        ["Joel Chemmanur", "Website Dev", "/headshots/joel_headshot.jpg"],
        
        ["Caleb Shim", "Sponsor Team Lead", "/headshots/caleb_headshot.jpg"],
        ["Akhil Shastry", "Sponsor Liaison", "/headshots/akhil_headshot.jpg"],

        ["Jamie Lee", "Art Team Lead", "/headshots/jamie_headshot.jpg"],
        ["Joshua Oh", "Graphic Designer", "/headshots/joshua_headshot.jpg"],

        ["Ishani Ghosh", "Outreach Team Lead", "/headshots/ishani_headshot.png"],
        ["Gordon Mei", "Outreach Team", "/headshots/gordon_headshot.png"],
        ["Luis Valerio", "Outreach Team", "/headshots/luis_headshot.png"],


        ["Jaden  Li", "Workshop Team Lead", "/headshots/jaden_headshot.jpg"],
        ["Victor Liu", "Workshop Creator", "/headshots/victor_headshot.jpg"],
        ["Neeraj Pawar", "Workshop Creator", "/headshots/neeraj_headshot.jpg"],
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