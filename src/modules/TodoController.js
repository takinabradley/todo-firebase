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
    selectProject(newProjectName)
  }
}

function selectProject(projectName) {
  /* 
    Highlight project name in list and set the current value in nameForm 
    to be the project name
  */
  console.log("name", projectName)
  if (projectName) {
    views.projectList.select(projectName)
    views.nameDisplay.setName(projectName)
    views.todoList.renderTodos(projects.list[projectName].todos)
  }
}

function changeProjectName(form, currentName, newName) {
  const nameInput = form.projectName

  if (currentName === newName) {
    views.projectList.toggleReadOnly(nameInput)
    return
  }

  const wasChanged = projects.editName(currentName, newName)
  if (wasChanged) {
    nameInput.value = newName
    nameInput.dataset.projectName = newName
    views.projectList.toggleReadOnly(nameInput)
    renderProjectList()
    selectProject(newName)
  }
}

function handleEditProjectName(e) {
  if (e.target.className !== "project-list__project-edit") return
  const form = e.target.parentElement
  const editBtn = e.target
  const nameInput = form.projectName

  if (nameInput.readOnly) {
    views.projectList.toggleReadOnly(nameInput)
    editBtn.textContent = "submit"
  } else {
    const currentName = nameInput.dataset.projectName
    changeProjectName(form, currentName, nameInput.value)
  }
}

views.addForm.form.addEventListener("submit", addNewProjectAndRenderProjectList)
views.projectList.container.addEventListener("click", (e) =>
  selectProject(e.target.dataset.projectName)
)
views.projectList.container.addEventListener("click", handleEditProjectName)
views.projectList.container.addEventListener("submit", (e) =>
  e.preventDefault()
)
views.sidebar.toggleButton.addEventListener("click", () =>
  views.sidebar.toggle()
)
