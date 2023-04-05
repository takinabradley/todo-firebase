import Project from "./Project"

export default function ProjectList() {
  const list = {}

  function add(name, id = Date.now(), todos = {}) {
    if (list[name]) return false

    const newProject = Project(name, id, todos)
    if (!newProject) return false
    list[name] = newProject
    return true
  }

  function remove(name) {
    if (!list[name]) return false
    delete list[name]
    return true
  }

  /* Note: Project names should only be changed via this function */
  function editName(name, newName) {
    // if the newName already exists, or the current name doesn't exist, don't allow
    if (list[newName] || !list[name]) return false
    // attempt to change name
    list[name].name = newName

    // Check if the name changed to know it's a valid name
    if (list[name].name === newName) {
      const temp = list[name]
      delete list[name]
      list[newName] = temp
      return true
    } else {
      return false
    }
  }

  function _copyList() {
    return { ...list }
  }
  return Object.freeze({
    get list() {
      return _copyList()
    },
    add,
    remove,
    editName
  })
}
