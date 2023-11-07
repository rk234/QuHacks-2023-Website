import styles from "./page.module.css"

export default function SubmissionFormPage() {
    //TODO: Submission form should be disabled/enabled based on config flag on firebase
    //in order to prevent submissions out-of-competition and after the deadline.
    //Once ready call areSubmissionsOpen() from projectService.js to show/hide the form!
    return (
        <main>
            <div className={styles.content}>
                <div className={styles.headContainer}>
                    <div className={styles.head}>
                        <div className={styles.headtext}>
                            <h1>Submission Form</h1>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className={styles.sectionContainer}>
                    <div className={styles.section}>
                        <h2>Project Name</h2>
                        <input id="screenshot"></input><br></br><br></br>
                        <h2>Team Members</h2>
                        <input id="team"></input><br></br><br></br>
                        <h2>Description</h2>
                        <textarea id="description"></textarea><br></br><br></br>
                        <h2>Screenshot of Project</h2>
                        <input type="file" id="screenshot" accept="image/png, image/jpeg" /><br></br><br></br>
                        <h2>Select Project Tracks Below: </h2>
                        <input type="checkbox" />
                        <label >  Math</label><br></br>
                        <input type="checkbox" />
                        <label >  AI</label><br></br>
                        <input type="checkbox" />
                        <label >  Game</label>
                        <br></br><br></br>
                        <h2>Link to Project GitHub (optional) </h2>
                        <input id="github"></input><br></br><br></br>
                        <h2>Link to Project Demo (optional)</h2>
                        <input id="demo"></input><br></br><br></br>
                        <h2>Languages, technologies, libraries used (optional)</h2>
                        <input></input><br></br><br></br>
                        <h2>Do you want your project to be displayed in our project gallery?</h2>
                        <input type="checkbox" />
                        <label >  Yes</label>
                        <br></br><br></br>
                        <button type="logIn">Log In</button>
                    </div>
                </div>
            </div>
        </main>
    )
}