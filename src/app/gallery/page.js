"use client"
import ProjectCard from "../components/projectCard/projectCard"
import { getProjects, isGalleryOpen } from "../services/projectService"
import styles from "./page.module.css"
import { useEffect, useState } from "react"

export default function GalleryPage() {
    let [projects, setProjects] = useState([
        // {
        //     name: "Wike",
        //     description: "Wike is a Wikipedia reader for the GNOME Desktop. It provides access to all the content of Wikipedia in a native application, with a simpler and distraction-free view of articles.",
        //     team_members: ["Hugo Olabera", "Contributors"],
        //     screenshot_url: "https://github.com/hugolabe/Wike/raw/master/data/screenshots/wike-01.png",
        //     tracks: ["game", "ai"],
        //     github: "https://github.com/hugolabe/Wike",
        //     demo: "https://flathub.org/apps/com.github.hugolabe.Wike",
        //     built_with: "GTK4, Libadwaita, Python",
        //     public: true,
        //     prize: {
        //         title: "1st place", rank: 0
        //     }
        // },
        // {
        //     name: "Curtail",
        //     description: "Curtail is a simple and useful image compressor with support for multiple formats and bulk compression.",
        //     team_members: ["Hugo Posnic", "Contributors"],
        //     screenshot_url: "https://github.com/Huluti/Curtail/raw/master/data/screenshots/screen1.png",
        //     tracks: ["game", "ai"],
        //     github: "https://github.com/Huluti/Curtail",
        //     demo: "https://flathub.org/apps/com.github.huluti.Curtail",
        //     built_with: "GTK4, Libadwaita, Python",
        //     public: true,
        //     prize: {
        //         title: "2nd place", rank: 1
        //     }
        // },
        // {
        //     name: "Demo",
        //     description: "demo text demo text demo text demo text demo text demo text demo text",
        //     team_members: ["Ramy"],
        //     screenshot_url: "",
        //     tracks: [],
        //     built_with: "Nothing",
        //     public: true,
        // },
        // {
        //     name: "Demo",
        //     description: "demo text demo text demo text demo text demo text demo text demo text",
        //     team_members: ["Ramy"],
        //     screenshot_url: "",
        //     tracks: [],
        //     built_with: "Nothing",
        //     public: true,
        // }
    ])
    let [showProjectModal, setShowProjectModal] = useState(false)
    let [project, setProject] = useState()
    let [query, setQuery] = useState("")
    let [track, setTrack] = useState("all")

    let [displayProjects, setDisplayProjects] = useState(projects)

    let [emptyMsg, setEmptyMsg] = useState("Loading Gallery...")

    useEffect(() => {
        // console.log("Hello World!")
        // fetch projects from service here
        async function fetchData () {
            if(await isGalleryOpen()) {
                let fetchedProjects = await getProjects()
                let projs = []
                fetchedProjects.forEach(proj => {
                    projs.push(proj.data())
                })
                setProjects(projs)
                setDisplayProjects(projs)
                setEmptyMsg("Nothing to see here...")
            } else {
                setEmptyMsg("Nothing to see here. The gallery isn't open.")
            }
        }
        fetchData();
    }, [])
    
    useEffect(() => {
        setDisplayProjects(filter(projects))
    }, [query, track])

    function showModal(project) {
        setProject(project)
        setShowProjectModal(true)
    }

    const withHttp = url => !/^https?:\/\//i.test(url) ? `https://${url}` : url;

    function filter(allProjects) {
        return allProjects
            .filter(proj => (proj.name+proj.description+proj.team_members.join(" ")).toLowerCase().includes(query.toLowerCase()))
            .filter(proj => track == "all" || proj.tracks.filter(t => t.toLowerCase() == track.toLowerCase()).length >= 1)
            .sort((a, b) => {
                if(a.prize && b.prize) {
                    return a.prize.rank-b.prize.rank
                } else if(a.prize && !b.prize) {
                    return -1
                } else if(!a.prize && b.prize) {
                    return 1
                } else {
                    return 0
                }
            })
    }

    return (
        <main className={styles.main}>
            {
                showProjectModal ?  
                <div className={styles.modalContainer}>
                    <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h2>{project.name}</h2>
                        <p>By {project.team_members.join(', ')}</p>
                    </div>
                    <div className={styles.modalContent}>
                        <h2>Description</h2>
                        <p>{project.description}</p>
                        {project.built_with != null && project.built_with.trim().length != 0 ? 
                        <p><em>Built with: {project.built_with}</em></p>
                        : ""}
                        <div className={styles.modalBtns}>
                        {project.demo ? 
                            <a href={withHttp(project.demo)} rel="noreferrer noopener" target='_blank'  className={`btn-primary ${styles.demobtn}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>
                                Try it!
                            </a>
                        : ""}
                        {project.github ? 
                            <a href={withHttp(project.github)} rel="noreferrer noopener" target='_blank'  className={`btn-secondary ${styles.gitbtn}`}> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                            </svg>

                            Github 
                            </a>
                        : ""}
                        <button className="btn-secondary" onClick={() => setShowProjectModal(false)}>Close</button>
                        </div>
                    </div>
                    </div>
                </div>
                : ""
            }
            <div className={styles.headerContainer}>
                <h1>Project Gallery</h1>
                
                <div className={styles.searchOptions}>
                    <input placeholder="Search" className={styles.searchBox} onChange={(e) => setQuery(e.target.value)} value={query} />
                    <select className={styles.trackSelect} value={track} onChange={(e) => setTrack(e.target.value)}>
                        <option value="all">All Tracks</option>
                        <option value="math">Math</option>
                        <option value="ai">AI</option>
                        <option value="game">Game</option>
                        <option value="beginner">Beginner</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
            </div>
            
            {
                displayProjects.length == 0 ? 
                    <div className={styles.emptyContainer}>
                        <div className={styles.noResultContainer}>
                            <h1 style={{color: "var(--text-accent)"}}>&gt;</h1> 
                            <h1>{emptyMsg}</h1>
                        </div>
                    </div> 
                :
                <div className={styles.galleryContainer}>
                    {(displayProjects.map((proj, index) =>
                        <ProjectCard key={index} className={styles.project} project={proj} onClick={() => showModal(proj)}></ProjectCard>
                    ))}
                </div>
            }
        </main>
    )
}