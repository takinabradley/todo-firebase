const projectListContainer = document.querySelector(".project-list")
const projectList = {
  container: projectListContainer,
  clear() {
    this.container.innerHTML = ""
  },
  createNameForm(projectName) {
    /* const form = ProjectNameForm(projectName)
    return form */
    const nameForm = document.createElement("form")
    nameForm.className = "project-list__project"
    nameForm

    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.readOnly = true
    nameInput.dataset.projectName = projectName
    nameInput.value = projectName
    nameInput.className = "project-list__project-name"
    nameInput.name = "projectName"

    const editBtn = document.createElement("button")
    editBtn.type = "button"
    editBtn.textContent = "Edit"
    editBtn.className = "project-list__project-edit"
    editBtn.name = "projectEdit"

    nameForm.append(nameInput, editBtn)
    return nameForm
  },
  render(nameArray) {
    this.clear()
    /* const forms = nameArray.map(this.createNameForm)
    this.container.append(...forms.map((form) => form.form)) */
    const elements = nameArray.map(this.createNameForm)
    this.container.append(...elements)
  },
  toggleReadOnly(nameInput) {
    nameInput.readOnly = !nameInput.readOnly
  },
  select(selectedName) {
    // loop through all forms, remove selected class from each, and add selected
    // class to selected element
    for (let i = 0; i < this.container.children.length; i++) {
      const nameInput = this.container.children[i].projectName

      if (
        nameInput.classList.contains("project-list__project-name--selected")
      ) {
        nameInput.classList.remove("project-list__project-name--selected")
      }

      if (nameInput.dataset.projectName === selectedName) {
        nameInput.classList.add("project-list__project-name--selected")
      }
    }
  }
}

export default projectList
