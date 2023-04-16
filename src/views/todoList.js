const container = document.querySelector(".todo-list")
const heading = container.querySelector(".todo-list__column-headings")
const todos = container.querySelector(".todo-list__todos")
const todoList = {
  container,
  heading,
  todos,
  createTodoElement(todo) {
    const todoElement = document.createElement("div")
    todoElement.className = "todo-list__todo"
    todoElement.textContent = `${todo.title} | ${todo.description} | ${todo.duedate} | ${todo.priority}`
    return todoElement
  },
  clearTodos() {
    this.todos.innerHTML = ""
  },
  renderTodos(list) {
    this.clearTodos()
    const todoElements = Object.values(list).map(this.createTodoElement)
    console.log(todoElements)
    this.todos.append(...todoElements)
  }
}

export default todoList
