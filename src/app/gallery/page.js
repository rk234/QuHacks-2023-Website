"use client"
import ProjectCard from "../components/projectCard/projectCard"
import styles from "./page.module.css"
import { useState } from "react"

export default function GalleryPage() {
    let [projects, setProjects] = useState([
        {
            name: "Wike",
            description: "Wike is a Wikipedia reader for the GNOME Desktop. It provides access to all the content of Wikipedia in a native application, with a simpler and distraction-free view of articles.",
            team_members: ["Hugo Olabera", "Contributors"],
            screenshot_url: "https://github.com/hugolabe/Wike/raw/master/data/screenshots/wike-01.png",
            tracks: ["game", "ai"],
            github: "https://github.com/hugolabe/Wike",
            demo: "https://flathub.org/apps/com.github.hugolabe.Wike",
            built_with: "GTK4, Libadwaita, Python",
            public: true,
            prize: {
                title: "1st place", rank: 0
            }
        },
        {
            name: "Curtail",
            description: "Curtail is a simple and useful image compressor with support for multiple formats and bulk compression.",
            team_members: ["Hugo Posnic", "Contributors"],
            screenshot_url: "https://github.com/Huluti/Curtail/raw/master/data/screenshots/screen1.png",
            tracks: ["game", "ai"],
            github: "https://github.com/Huluti/Curtail",
            demo: "https://flathub.org/apps/com.github.huluti.Curtail",
            built_with: "GTK4, Libadwaita, Python",
            public: true,
            prize: {
                title: "2nd place", rank: 0
            }
        }
    ])

    return (
        <main className={styles.main}>
            <div className={styles.headerContainer}>
                <h1>Project Gallery</h1>
                
                <div className={styles.searchOptions}>
                    <input placeholder="Search" className={styles.searchBox} />
                    <select className={styles.trackSelect}>
                        <option>All Tracks</option>
                        <option>Track 1</option>
                        <option>Track 2</option>
                        <option>Track 3</option>
                    </select>
                </div>
            </div>
            <div className={styles.galleryContainer}>
                {projects.map(proj =>
                    <ProjectCard className={styles.project} project={proj} onClick={() => showModal(proj)}></ProjectCard>
                )}
            </div>
        </main>
    )
}