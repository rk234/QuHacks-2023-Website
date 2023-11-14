"use client"
import { useState } from 'react'
import { db } from "../firebase/config";
import styles from "./page.module.css"
import { submitProject, areSubmissionsOpen }from "../services/projectService.js"

export default function SubmissionFormPage() {
    //TODO: Submission form should be disabled/enabled based on config flag on firebase
    //in order to prevent submissions out-of-competition and after the deadline.
    //Once ready call areSubmissionsOpen() from projectService.js to show/hide the form

    async function attemptSubmission(){
        
        let submissionsOpen = await areSubmissionsOpen();

        if(submissionsOpen.open) {

            let validation = validateSubmission();
            if(validation[0]) {
                submitProject(validation[1]);
            } else {
                alert(validation[1]);
            }
            
        } else {
            alert("=== Submissions Closed === \n\n"+submissionsOpen.msg);
        }
    }

    // returns [false, "reason for failure"] if submission is invalid
    // returns [true, projectObject] if submission is valid
    function validateSubmission() {
        let projectName = document.getElementById("projectName").value;
        let teamMembersRaw = document.getElementById("team").value;

        let teamMembers = [];
        for(let member of teamMembersRaw.split(",")) {
            if(member.trim()) {
                teamMembers.push(member.trim());
            }
        }

        let desc = document.getElementById("description").value;
        let screenshot = document.getElementById("screenshot").files[0];
        let github = document.getElementById("github").value;
        let demo = document.getElementById("demo").value;
        let builtWith = document.getElementById("builtWith").value;
        let publicProject = document.getElementById("publicCheck").checked;

        let tracks = [];
        if(document.getElementById("mathCheck").checked) {
            tracks.push("Math");
        }
        if(document.getElementById("aiCheck").checked) {
            tracks.push("AI");
        }
        if(document.getElementById("gameCheck").checked) {
            tracks.push("Game");
        }

        
        if(projectName.trim().length<1) {
            return [false, "Please enter your project's name."];
        }
        if(teamMembers.length < 1) {
            return [false, "Please list all team members."];
        }
        if(desc.trim().length < 1) {
            return [false, "Please include a description of your project."];
        }
        if(!screenshot) {
            return [false, "Please include at least one screenshot of your project."];
        }
        if(tracks.length < 1) {
            return [false, "Select at least one track."];
        }
        
        let project = {
            description: desc,
            name: projectName,
            public: publicProject,
            screenshot: screenshot,
            team_members: teamMembers,
            tracks: tracks,
            prize: null
        }

        if(github.trim()) {
            project.github = github;
        }
        if(builtWith.trim()) {
            project.build_with = builtWith;
        }
        if(demo.trim()) {
            project.demo = demo;
        }

        return [true, project];

    }

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
                        <input id="projectName"></input><br></br><br></br>
                        <h2>Team Members (comma separated)</h2>
                        <input id="team"></input><br></br><br></br>
                        <h2>Description</h2>
                        <textarea id="description"></textarea><br></br><br></br>
                        <h2>Screenshot of Project</h2>
                        <input type="file" id="screenshot" accept="image/png, image/jpeg" /><br></br><br></br>
                        <h2>Select Project Tracks Below: </h2>
                        <input id="mathCheck" type="checkbox" />
                        <label >  Math</label><br></br>
                        <input id="aiCheck" type="checkbox" />
                        <label >  AI</label><br></br>
                        <input id="gameCheck" type="checkbox" />
                        <label >  Game</label>
                        <br></br><br></br>
                        <h2>Link to Project GitHub (optional) </h2>
                        <input id="github"></input><br></br><br></br>
                        <h2>Link to Project Demo (optional)</h2>
                        <input id="demo"></input><br></br><br></br>
                        <h2>Languages, technologies, libraries used (optional)</h2>
                        <input id="builtWith"></input><br></br><br></br>
                        <h2>Do you want your project to be displayed in our project gallery?</h2>
                        <input id="publicCheck" type="checkbox" defaultChecked/>
                        <label >  Yes</label>
                        <br></br><br></br>
                        <button className='btn-primary' type="submit" onClick={attemptSubmission}>Submit</button>
                    </div>
                </div>
            </div>
        </main>
    )
}