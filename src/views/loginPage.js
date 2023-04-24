const container = document.querySelector(".login-page")
const googleBtn = document.querySelector(".login-page__google-button")

const loginPage = {
  container,
  googleBtn,
  hide() {
    container.classList.add("login-page--hidden")
  },
  show() {
    container.classList.remove("login-page--hidden")
  }
}

export default loginPage
