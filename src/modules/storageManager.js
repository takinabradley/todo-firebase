function saveProjects(projectList) {
  const stringifiedProjects = JSON.stringify(projectList)
  localStorage.setItem("projects", stringifiedProjects)
}

function getProjects() {
  return JSON.parse(localStorage.getItem("projects"))
}

export default {
  saveProjects,
  getProjects
}
