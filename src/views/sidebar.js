const container = document.querySelector(".todo__sidebar")
const toggleButton = document.querySelector(".todo__sidebar-toggle")

const sidebar = {
  sidebar: container,
  toggleButton,
  hide() {
    this.sidebar.classList.add("todo__sidebar--hidden")
  },
  show() {
    this.sidebar.classList.remove("todo__sidebar--hidden")
  },
  toggle() {
    this.sidebar.classList.toggle("todo__sidebar--hidden")
  }
}

export default sidebar
