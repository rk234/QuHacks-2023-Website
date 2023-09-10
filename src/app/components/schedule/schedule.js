import styles from "./component.module.css"
import Link from "next/link"


export default function ScheduleSection() {
    return (
        <div className={styles.sectionContainer}>
            <h1 className={styles.title}>Schedule</h1>
            <br></br>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Time</th>
                        <th className={styles.th}>Activity</th>
                        <th className={styles.th}>Room #</th>
                    </tr>
                    
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.td}>Time 1</td>
                        <td className={styles.td}>Activity 1</td>
                        <td className={styles.td}>Room 1</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>Time 2</td>
                        <td className={styles.td}>Activity 2</td>
                        <td className={styles.td}>Room 2</td>
                    </tr>

                </tbody>

            </table>
        </div>

    )
}