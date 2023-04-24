const container = document.querySelector(".todo-list")
const form = container.querySelector(".todo-list__form")
const addBtn = container.querySelector(".todo-list__add-btn")
const todos = container.querySelector(".todo-list__todos")
const todoList = {
  container,
  form,
  addBtn,
  todos,
  createTodoCard(todo) {
    const { title, description, priority, duedate } = todo

    const card = document.createElement("article")
    card.className = "todo-list__todo"

    const cardTop = document.createElement("header")
    cardTop.className = "todo-list__todo-top"

    const titleElement = document.createElement("h3")
    titleElement.classList = "todo-list__todo-title"
    titleElement.textContent = title
    cardTop.append(titleElement)

    const cardBottom = document.createElement("div")
    cardBottom.classList = "todo-list__todo-bottom"

    const descriptionElement = document.createElement("div")
    descriptionElement.classList = "todo-list__todo-description"
    descriptionElement.textContent = description

    const priorityElement = document.createElement("div")
    priorityElement.classList = "todo-list__todo-priority"
    priorityElement.textContent = priority

    const duedateElement = document.createElement("div")
    duedateElement.classList = "todo-list__todo-duedate"
    duedateElement.textContent = `${duedate.getMonth()} / ${duedate.getDate()} / ${duedate.getFullYear()}`
    cardBottom.append(descriptionElement, priorityElement, duedateElement)

    card.append(cardTop, cardBottom)
    return card
  },
  editTodoCard(card, todoData) {
    const title = card.querySelector(".todo-list__todo-title")
    const description = card.querySelector(".todo-list__todo-description")
    const priority = card.querySelector(".todo-list__todo-priority")
    const duedate = card.querySelector("todo-list__todo-duedate")
    title.textContent = todoData.title
    description.textContent = todoData.description
    priority.textContent = todoData.priority
    duedate.textContent = `${duedate.getMonth()} / ${duedate.getDate()} / ${duedate.getFullYear()}`
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
    const todoElements = Object.values(list).map(this.createTodoCard)
    this.todos.append(...todoElements)
  }
}

export default todoList
