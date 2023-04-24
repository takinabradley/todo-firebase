import ProjectList from "./ProjectList"
import storageManager from "./storageManager"
import views from "../views/views"
import firestore from "./firestore"
import auth from "./auth"

function reviveTodoData(todos) {
  /* changes the duedate in all the todos to be an actual date object. 
     modified the incoming object 
  */
  for (const todo in todos) {
    todos[todo].duedate = new Date(todos[todo].duedate)
  }
  return todos
}

async function addStoredProjectsToProjectList(projectList) {
  /* const storedProjects = storageManager.getProjects() */
  const storedProjects = await firestore.readProjects()

  for (const project in storedProjects) {
    const success = projectList.add(
      storedProjects[project].name,
      storedProjects[project].id,
      reviveTodoData(storedProjects[project].todos)
    )
  }
}

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
    /* storageManager.saveProjects(projects.list) */
    firestore.writeProjects(JSON.parse(JSON.stringify(projects.list)))
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
    /* storageManager.saveProjects(projects.list) */
    firestore.writeProjects(JSON.parse(JSON.stringify(projects.list)))
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
  /* attempt to add a todo to a project when the 'Add Todo' form is submitted */
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
  if (success) {
    views.todoList.renderTodos(projects.list[selectedProject].todos)
    /* storageManager.saveProjects(projects.list) */
    firestore.writeProjects(JSON.parse(JSON.stringify(projects.list)))
  }
}

async function loadProjects() {
  const storedProjects = await firestore.readProjects()
  console.log(storedProjects)
  /* const storedProjects = storageManager.getProjects() */
  if (storedProjects && Object.keys(storedProjects).length !== 0) {
    await addStoredProjectsToProjectList(projects)
    renderProjectList()
    selectProject(Object.keys(storedProjects)[0]) // select first project in list
    /* do some firebase shenanegans */
  } else {
    projects.add("Default Project")
    renderProjectList()
    selectProject("Default Project")
    /* storageManager.saveProjects(projects.list) */
    firestore.writeProjects(JSON.parse(JSON.stringify(projects.list)))
  }
}

function deleteProject(e) {
  if (!e.target.classList.contains("project-list__project-delete")) return
  const form = e.target.parentElement
  const projectName = form.projectName.value
  projects.remove(projectName)
  renderProjectList()
  /* storageManager.saveProjects(projects.list) */
  firestore.writeProjects(JSON.parse(JSON.stringify(projects.list)))
}

/* 

  ~~~~~ Event Listeners ~~~~~

*/
function applyAddFormListeners() {
  /* attempt to add a new project when the add form submits */
  views.addForm.form.addEventListener(
    "submit",
    addNewProjectAndRenderProjectList
  )
}

function applyProjectListListeners() {
  /* 
    Select the project in the sidebar and render the todos when a project name
    is clicked
  */
  views.projectList.container.addEventListener("click", (e) =>
    selectProject(e.target.dataset.projectName)
  )

  /* 
    handle editing of project names when the edit buttons are clicked in the
    sidebar
  */
  views.projectList.container.addEventListener("click", handleEditProjectName)
  views.projectList.container.addEventListener("submit", (e) =>
    e.preventDefault()
  )

  /* Delete a project when a delete button is pressed */
  views.projectList.container.addEventListener("click", deleteProject)
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

function applyLoginPageListeners() {
  views.loginPage.googleBtn.addEventListener("click", auth.redirect)
}

function applyAppListeners() {
  applyAddFormListeners()
  applyProjectListListeners()
  applySidebarListeners()
  applyTodoListListeners()
  applyLoginPageListeners()
}

async function initApp(user) {
  if (user) {
    firestore.setProjectsDoc(user.uid)
    await loadProjects()
    views.loginPage.hide()
    await auth.logout() // we only really need the user's uid and nothing else.
  }
}

const projects = ProjectList()
applyAppListeners()

auth.getRedirectedUser().then(initApp)
