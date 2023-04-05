const projectListContainer = document.querySelector(".project-list")
const projectList = {
  container: projectListContainer,
  clear() {
    this.container.innerHTML = ""
  },
  createListElement(projectName) {
    const listElement = document.createElement("div")
    listElement.dataset.projectName = projectName
    listElement.textContent = projectName
    listElement.className = "project-list__project-name"
    return listElement
  },
  render(nameArray) {
    this.clear()
    const elements = nameArray.map(this.createListElement)
    this.container.append(...elements)
  },
  select(selectedName) {
    for (let i = 0; i < this.container.children.length; i++) {
      const child = this.container.children[i]
      if (child.classList.contains("project-list__project-name--selected")) {
        child.classList.remove("project-list__project-name--selected")
      }

      if (child.dataset.projectName === selectedName) {
        child.classList.add("project-list__project-name--selected")
      }
    }
  }
}

export default projectList
