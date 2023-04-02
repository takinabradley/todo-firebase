import Todo from "./Todo"
import isEmptyString from "../isEmptyString"
const isString = (value) => typeof value === "string"
const isDate = (value) => Date.prototype.isPrototypeOf(value)
const isHighMediumOrLow = (value) => {
  switch (value) {
    case "high":
      return true
    case "medium":
      return true
    case "low":
      return true
    default:
      return false
  }
}

export default function Project(name, id = Date.now(), todos = {}) {
  if (typeof name !== "string" || isEmptyString(name)) return
  if (typeof todos !== "object") return

  function addTodo(
    title = "",
    description = "",
    duedate = new Date(),
    priority = "medium"
  ) {
    if (!isString(title) || todos[title]) return false
    if (!isString(description)) return false
    if (!isDate(duedate)) return false
    if (!isHighMediumOrLow(priority)) return false

    todos[title] = Todo(title, description, duedate, priority)
    return true
  }

  function removeTodo(title) {
    if (!todos[title]) return false
    delete todos[title]
    return true
  }

  function editTodo(title, field, change) {
    if (!todos[title]) return false

    switch (field) {
      case "title":
        if (isString(change) && !isEmptyString(change) && !todos[change]) {
          const newTitle = change
          const oldTitle = title

          const temp = todos[oldTitle]
          temp.title = newTitle
          delete todos[oldTitle]
          todos[newTitle] = temp
          return true
        } else {
          return false
        }
      case "description":
        if (isString(change)) {
          todos[title].description = change
          return true
        } else {
          return false
        }
      case "duedate":
        if (isDate(change)) {
          todos[title].duedate = change
          return true
        } else {
          return false
        }
      case "priority":
        if (isHighMediumOrLow(change)) {
          todos[title].priority = change
          return true
        } else {
          return false
        }
      default:
        return false
    }
  }

  function findTodo(title) {
    if (!todos[title]) return
    return { ...todos[title] }
  }

  function _copyTodos() {
    const todoCopy = { ...todos }
    for (const key in todoCopy) {
      todoCopy[key] = { ...todoCopy[key] }
    }
    return todoCopy
  }

  return Object.freeze({
    get name() {
      return name
    },
    set name(newName) {
      if (typeof newName === "string") name = newName
    },
    get id() {
      return id
    },
    get todos() {
      return _copyTodos()
    },
    addTodo,
    removeTodo,
    editTodo,
    findTodo
  })
}
