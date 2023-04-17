import ProjectList from "./ProjectList"
import views from "../views/views"
const projects = ProjectList()

function getProjectNames() {
  return Object.keys(projects.list)
}

function renderProjectList() {
  /* clear the current list of projects and render the new one  */
  views.projectList.clear()
  views.projectList.render(getProjectNames())
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
    Highlight project name in list and set the current value in nameDisplay 
    to be the project name
  */
  if (projectName) {
    views.projectList.select(projectName)
    views.nameDisplay.setName(projectName)
    views.todoList.renderTodos(projects.list[projectName].todos)
  }
}

function changeProjectName(form, currentName, newName) {
  /* Change a project name if it should be changed, and re-render the list of 
    projects if it is changed */
  const nameInput = form.projectName
  const editBtn = form.projectEdit

  if (currentName === newName) {
    views.projectList.toggleReadOnly(nameInput)
    editBtn.textContent = "Edit"
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
  /* 
    If an input in the list of projects is read-only, allow input and show a 
    submit button

    If it is not readonly, try to change the project name and return the input
    to a read-only state
  */
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

function addTodoFromFormInfo(e) {
  e.preventDefault()
  const selectedProject = views.projectList.selected
  if (!selectedProject) return

  const form = views.todoList.form
  const title = form.title.value
  const description = form.description.value
  const duedate = new Date(form.duedate.value + "T00:00")
  const priority = form.priority.value

  const success = projects.list[selectedProject].addTodo(
    title,
    description,
    duedate,
    priority
  )
  console.log(success)
  console.log(projects.list[selectedProject])
  if (success) views.todoList.renderTodos(projects.list[selectedProject].todos)
}

/* Add Listeners to each view */
function applyAddFormListeners() {
  views.addForm.form.addEventListener(
    "submit",
    addNewProjectAndRenderProjectList
  )
}

function applyProjectListListeners() {
  views.projectList.container.addEventListener("click", (e) =>
    selectProject(e.target.dataset.projectName)
  )
  views.projectList.container.addEventListener("click", handleEditProjectName)
  views.projectList.container.addEventListener("submit", (e) =>
    e.preventDefault()
  )
}

function applySidebarListeners() {
  views.sidebar.toggleButton.addEventListener("click", () =>
    /* show/hide sidebar when the toggle button is clicked */
    views.sidebar.toggle()
  )

  document.addEventListener("click", (e) => {
    /* Hide sidebar when it's clicked away from */
    if (
      views.sidebar.sidebar.contains(e.target) ||
      e.target === views.sidebar.toggleButton
    ) {
      return
    }
    views.sidebar.hide()
  })
}

function applyTodoListListeners() {
  views.todoList.addBtn.addEventListener("click", () =>
    /* Hide and show todo list form when the 'Add Todo' button is clicked */
    views.todoList.toggleForm()
  )

  views.todoList.form.addEventListener("submit", addTodoFromFormInfo)
}

applyAddFormListeners()
applyProjectListListeners()
applySidebarListeners()
applyTodoListListeners()
