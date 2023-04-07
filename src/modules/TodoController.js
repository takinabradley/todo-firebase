import ProjectList from "./ProjectList"
import views from "../views/views"

const projects = ProjectList()

function renderProjectList() {
  /* clear the current list of projects and render the new one  */
  views.projectList.clear()
  views.projectList.render(Object.keys(projects.list))
}

function addNewProjectAndRenderProjectList(e) {
  /* 
    Add new project and clears form if the project name is valid.
    Otherwise, do nothing.
  */
  e.preventDefault()
  const newProjectName = views.addForm.nameInput.value
  const wasAdded = projects.add(newProjectName)
  if (wasAdded) {
    renderProjectList()
    views.addForm.clear()
  }
}

function changeProjectName(nameFormEvent) {
  /* 
    changes project name, or keeps input editable so that the user can 
    change it to something valid 
  */
  const { currentName, newName } = nameFormEvent
  if (currentName === newName) return

  const wasChanged = projects.editName(currentName, newName)
  if (wasChanged) {
    views.nameForm.setCurrentName(newName)
    views.nameForm.nameInput.value = newName
    views.nameForm.scrollToStart()
    renderProjectList()
    views.projectList.select(newName)
  } else {
    views.nameForm.unsetReadOnly()
  }

  console.log(projects.list)
}

function addNameFormListeners() {
  /* 
    Listeners to toggle the 'name form' readonly state, change the project's
    name if valid, scroll text back to the beginning when readonly is
    re-applied, and resize the input based on the length of it's value.
  */

  /* 
    Main listener: passes old and new names into 'projects' to decide if
    the project name should be changed when the form becomes readOnly

    nameForm is a custom EventEmitter, which is why the 'on' syntax can be used
  */
  views.nameForm.on("setReadOnly", changeProjectName)

  views.nameForm.editBtn.addEventListener("click", () =>
    views.nameForm.toggleReadOnly()
  )

  views.nameForm.resizeInput()
  views.nameForm.nameInput.addEventListener("input", () =>
    views.nameForm.resizeInput()
  )

  views.nameForm.form.addEventListener("submit", (e) => {
    e.preventDefault()
    views.nameForm.setReadOnly()
  })

  views.nameForm.nameInput.addEventListener("blur", ({ relatedTarget }) => {
    if (relatedTarget === views.nameForm.editBtn) return
    views.nameForm.setReadOnly()
  })

  views.nameForm.nameInput.addEventListener("dblclick", () => {
    views.nameForm.unsetReadOnly()
  })

  document.addEventListener("click", ({ target }) => {
    console.log("click")
    if (
      target !== views.nameForm.nameInput &&
      target !== views.nameForm.editBtn &&
      views.nameForm.nameInput.readOnly === false
    ) {
      views.nameForm.setReadOnly()
    }
  })
}

function selectProject(e) {
  /* 
    Highlight project name in list and set the current value in nameForm 
    to be the project name
  */
  const projectName = e.target.dataset.projectName
  if (projectName) {
    views.projectList.select(projectName)
    views.nameForm.setCurrentName(projectName)
    views.nameForm.nameInput.value = projectName
    views.nameForm.resizeInput()
  }
}

views.addForm.form.addEventListener("submit", addNewProjectAndRenderProjectList)
views.projectList.container.addEventListener("click", selectProject)
addNameFormListeners()
