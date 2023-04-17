const container = document.querySelector(".todo__sidebar")
const toggleButton = document.querySelector(".todo__sidebar-toggle")

const sidebar = {
  sidebar: container,
  toggleButton,
  hide() {
    this.sidebar.classList.add("todo__sidebar--hidden")
    this.toggleButton.checked = false
  },
  show() {
    this.sidebar.classList.remove("todo__sidebar--hidden")
  },
  toggle() {
    if (this.sidebar.classList.contains("todo__sidebar--hidden")) {
      this.show()
    } else {
      this.hide()
    }
  }
}

export default sidebar
