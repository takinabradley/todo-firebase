const container = document.querySelector(".todo-list")
const form = container.querySelector(".todo-list__form")
const addBtn = container.querySelector(".todo-list__add-btn")
const todos = container.querySelector(".todo-list__todos")
const todoList = {
  container,
  form,
  addBtn,
  todos,
  createTodoElement(todo) {
    const todoElement = document.createElement("div")
    todoElement.className = "todo-list__todo"
    const { title, description, priority, duedate } = todo
    const dateString =
      duedate.getMonth() + "/" + duedate.getDate() + "/" + duedate.getFullYear()

    todoElement.textContent = `${title} | ${description} | ${dateString} | ${priority}`
    return todoElement
  },
  clearTodos() {
    this.todos.innerHTML = ""
  },
  hideForm() {
    this.form.classList.add("todo-list__form--hidden")
  },
  showForm() {
    this.form.classList.remove("todo-list__form--hidden")
  },
  toggleForm() {
    this.form.classList.toggle("todo-list__form--hidden")
  },
  renderTodos(list) {
    this.clearTodos()
    const todoElements = Object.values(list).map(this.createTodoElement)
    this.todos.append(...todoElements)
  }
}

export default todoList
