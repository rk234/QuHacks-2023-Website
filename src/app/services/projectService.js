import { db, fileDB } from "../firebase/config";
import { getFirestore, getDoc, updateDoc, doc, setDoc } from '@firebase/firestore/lite';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Compressor from 'compressorjs';

/*
{
    name: "Test project",
    description: "a test project",
    team_members: ["Person 1", "Person 2"],
    screenshot_url: "https://source.unsplash.com/random",
    tracks: ["game", "ai"],
    github: "<URL>",
    demo: "<URL>",
    built_with: "Kotlin, OpenGL",
    public: true,
    prize: {
        title: "1st place", rank: 0
    }
}
*/
async function submitProject(project) {
    let file = project.screenshot;
    delete project.screenshot;

    let projectID = uuid();

    const projectDoc = doc(db, "projects/"+projectID);
    const screenshotRef = ref(fileDB, projectID+"-"+file.name);

    new Compressor(file, {
        quality: 0.2,
        success(result) {
            uploadBytes(screenshotRef, result).then(snapshot => {
                getDownloadURL(screenshotRef).then(url => {
                    project.screenshot_url = url;
                    setDoc(projectDoc, project);
                    alert("Project submitted.")
                });
            });
        }
    });
    
}

function uuid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

async function areSubmissionsOpen() {
    return (await getDoc(doc(db, "config/form"))).data();
}

async function getProjects() {

}

export {submitProject, areSubmissionsOpen, getProjects};