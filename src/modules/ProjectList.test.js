import ProjectList from "./ProjectList"

describe("has expected object structure", () => {
  it("creates an object with the 'list' property being an empty object", () => {
    const projects = ProjectList()
    expect(projects).toHaveProperty("list", {})
  })

  it("has 'add', 'remove', and 'editName' methods", () => {
    const isFunction = (value) => typeof value === "function"
    const projects = ProjectList()
    expect(projects).toHaveProperty("add")
    expect(projects).toHaveProperty("remove")
    expect(projects).toHaveProperty("editName")
    const methods = [projects.add, projects.remove, projects.editName]
    expect(methods.every(isFunction)).toBe(true)
  })
})

describe("adding projects works correctly", () => {
  it("adds projects to the list", () => {
    const projects = ProjectList()
    expect(projects.list).not.toHaveProperty("project1")
    const success = projects.add("project1")
    expect(success).toBe(true)
    expect(projects.list).toHaveProperty("project1")
  })

  it("doesn't overwrite objects of identical names", () => {
    const projects = ProjectList()
    projects.add("project1")
    projects.list["project1"].addTodo("a todo")

    const success = projects.add("project1")
    expect(success).toBe(false)
    expect(projects.list["project1"].todos).toHaveProperty("a todo")
  })

  it("only allows objects to be named with non-empty strings", () => {
    const isFalse = (value) => value === false
    const projects = ProjectList()
    const badNames = ["", "    ", 0, [], { hello: "there" }]
    const attempts = badNames.map(projects.add)
    expect(attempts.every(isFalse)).toBe(true)
    expect(projects.list).toEqual({})
  })
})

describe("editing project names works correctly", () => {
  it("lets you change the name", () => {
    const projects = ProjectList()
    projects.add("name1")

    expect(projects.list.name1.name).toBe("name1")
    const success = projects.editName("name1", "name2")
    expect(success).toBe(true)
    expect(projects.list).not.toHaveProperty("name1")
    expect(projects.list).toHaveProperty("name2.name", "name2")
  })

  it("doesn't allow two projects with identical names", () => {
    const projects = ProjectList()
    projects.add("name1")
    projects.add("name2")
    const success = projects.editName("name2", "name1")
    expect(success).toBe(false)
    expect(projects.list).toHaveProperty("name2.name", "name2")
    expect(projects.list).toHaveProperty("name1.name", "name1")
  })

  it("doesn't allow editing a non-existant project", () => {
    const projects = ProjectList()
    const success = projects.editName("nonexistant", "nonExistant2")
    expect(success).toBe(false)
    expect(projects.list).toEqual({})
  })

  it("doesn't allow projects to be renamed to an empty string", () => {
    const projects = ProjectList()
    projects.add("Project 1")
    console.log(projects.list["Project 1"].name)
    const success = projects.editName("Project 1", "")
    expect(success).toBe(false)
  })
})

describe("removes projects correctly", () => {
  it("removes a project", () => {
    const projects = ProjectList()
    projects.add("my project")
    expect(projects.list).not.toEqual({})
    const success = projects.remove("my project")
    expect(success).toBe(true)
    expect(projects.list).toEqual({})
  })

  it("returns false for non-existant objects", () => {
    const projects = ProjectList()
    const success = projects.remove("blah")
    expect(success).toBe(false)
  })
})

test("list returns a copy of the internal list", () => {
  const projects = ProjectList()
  projects.add("something")
  projects.add("another thing")
  const copy = projects.list
  delete copy.something
  expect(projects.list).not.toEqual(copy)
})
