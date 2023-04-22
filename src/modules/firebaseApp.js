import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqwFG7wa9R4fzWTfqBffEnlDClvbvE4s",
  authDomain: "todo-f4791.firebaseapp.com",
  projectId: "todo-f4791",
  storageBucket: "todo-f4791.appspot.com",
  messagingSenderId: "348456693844",
  appId: "1:348456693844:web:d0da8f44b76d179c103dc1"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
