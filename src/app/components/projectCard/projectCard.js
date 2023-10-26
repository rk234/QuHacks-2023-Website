import styles from "./component.module.css"

export default function ProjectCard({project, onClick}) {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={project.screenshot_url} />
            </div>
            <div className={styles.head}>
                <div className={styles.nameContainer}>
                    <h2 className={styles.name}>{project.name}</h2>

                    {project.prize ? 
                        <div className={styles.prizeBadge}>
                            {project.prize.title}
                        </div>
                        : "" 
                    }
                </div>
                <p>By {project.team_members.join(", ")}</p>
            </div>
            <div className={styles.descContainer}>
                <p>{project.description}</p>
            </div>
        </div>
    )
}