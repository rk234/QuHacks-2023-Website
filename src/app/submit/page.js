import styles from "./page.module.css"

export default function SubmissionFormPage() {
    //TODO: Submission form should be disabled/enabled based on config flag on firebase
    //in order to prevent submissions out-of-competition and after the deadline.
    //Once ready call areSubmissionsOpen() from projectService.js to show/hide the form!
    return (
        <main>
            Submission goes here (probably copy basic styles from timeline or home page)
        </main>
    )
}