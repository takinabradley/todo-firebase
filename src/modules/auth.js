import app from "./firebaseApp"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

async function popup() {
  try {
    const result = await signInWithPopup(auth, provider)
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const token = credential.accessToken
    // The signed-in user info.
    const user = result.user
    // IdP data available using getAdditionalUserInfo(result)

    return user
    // ...
  } catch (error) {
    console.log(error.message)
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message
    // The email of the user's account used.
    const email = error.customData.email
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error)
    // ...
  }
}

export default {
  popup
}
