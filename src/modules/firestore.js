import app from "./firebaseApp"
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  addDoc
} from "firebase/firestore"

const db = getFirestore(app)
const projectsCollectionRef = collection(db, "projects")
let userDoc

function setProjectsDoc(userId) {
  userDoc = doc(db, `projects/${userId}`)
}

async function readProjects() {
  const snapshot = await getDoc(userDoc)
  if (snapshot.exists()) {
    return snapshot.data()
  }
}

async function writeProjects(data) {
  setDoc(userDoc, data)
}

export default { setProjectsDoc, readProjects, writeProjects }
