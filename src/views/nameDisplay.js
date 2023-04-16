const nameDisplayElement = document.querySelector(".name-display")
const nameDisplay = {
  container: nameDisplayElement,
  setName(name) {
    this.container.textContent = name
  }
}

export default nameDisplay
