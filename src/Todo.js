import isEmptyString from "./isEmptyString"

function Todo(title, description, duedate, priority, id = Date.now()) {
  if (typeof title !== "string" || isEmptyString(title)) return

  return {
    title,
    description,
    duedate,
    priority,
    get id() {
      return id
    }
  }
}

export default Todo
