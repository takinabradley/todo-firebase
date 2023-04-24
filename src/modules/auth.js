import app from "./firebaseApp"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut
} from "firebase/auth"

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

async function logout() {
  await signOut(auth)
  console.log("signed out")
}

async function redirect() {
  return await signInWithRedirect(auth, provider)
}

async function getRedirectedUser() {
  const result = await getRedirectResult(auth)

  if (result === null) {
    return null
  } else {
    return result.user
  }
}

export default {
  redirect,
  getRedirectedUser,
  logout
}
