import Project from "./Project"
import Todo from "./Todo"

describe("Creates project object correctly", () => {
  describe("Requires a name to return an object", () => {
    test("name doesn't accept empty string", () => {
      const project = Project("")
      expect(project).toBeUndefined()
    })

    test("name doesn't accept non-string values", () => {
      const isUndefined = (value) => value === undefined
      const badValues = [1, {}, [], undefined, true, null]
      const undefinedArray = badValues.map((value) => Project(value))
      expect(undefinedArray.every(isUndefined)).toBe(true)
    })
  })
  it("doesn't allow non-string names when editing", () => {
    const project = Project("some project")
    project.name = 1
    expect(project.name).not.toBe(1)
    expect(project.name).toBe("some project")
  })

  it("doesn't allow changing the id", () => {
    const project = Project("some project", 0)
    expect(() => (project.id = 5)).toThrow()
  })

  it("doesn't allow deletion of properties", () => {
    const project = Project("some Project")
    expect(() => delete project.addTodo).toThrow()
  })

  it("returns an object with a non-empty string", () => {
    const project = Project("A name")
    expect(project).not.toBeUndefined()
    expect(typeof project).toBe("object")
  })

  it("uses given name in name property of the returned object", () => {
    const project = Project("A name")
    expect(project).toHaveProperty("name", "A name")
  })

  it("uses Date.now() as default id value", () => {
    const dateBefore = Date.now()
    const project = Project("A name")
    const dateAfter = Date.now()

    expect(dateBefore).toBeLessThanOrEqual(project.id)
    expect(dateAfter).toBeGreaterThanOrEqual(project.id)
  })

  it("uses provided id value", () => {
    const project = Project("A name", 5)
    expect(project).toHaveProperty("id", 5)
  })

  it("Has an empty object as a todo list by default", () => {
    const project = Project("A name")
    expect(project).toHaveProperty("todos", {})
  })

  it("Accepts an initial todo object", () => {
    const todoList = {
      "a todo": Todo("a todo")
    }
    const _ = undefined
    const project = Project("A project", _, todoList)
    expect(project).toHaveProperty("todos", todoList)
  })

  it("has 'addTodo', 'editTodo', 'removeTodo', and 'findTodo' methods", () => {
    const project = Project("new project")

    expect(project).toHaveProperty("addTodo")
    expect(typeof project.addTodo).toBe("function")

    expect(project).toHaveProperty("editTodo")
    expect(typeof project.editTodo).toBe("function")

    expect(project).toHaveProperty("removeTodo")
    expect(typeof project.removeTodo).toBe("function")

    expect(project).toHaveProperty("findTodo")
    expect(typeof project.findTodo).toBe("function")
  })
})

describe("Todo CRUD works correctly", () => {
  describe("adds todos correctly", () => {
    it("adds a todo with the correct title", () => {
      const project = Project("a project")
      project.addTodo("a todo")
      // "project.todos" should contain project.todos['a todo'].title
      expect(project.todos).toHaveProperty(["a todo", "title"], "a todo")
    })
    it("adds a todo with the correct description", () => {
      const project = Project("a project")
      project.addTodo("a todo", "a description")
      expect(project.todos).toHaveProperty(
        ["a todo", "description"],
        "a description"
      )
    })
    it("adds a todo using current date as default todo duedate", () => {
      const project = Project("a project")
      const timeBefore = new Date().getTime()
      project.addTodo("a todo")
      const timeAfter = new Date().getTime()
      expect(project.todos).toHaveProperty(["a todo", "duedate"])
      expect(timeBefore).toBeLessThanOrEqual(
        project.todos["a todo"].duedate.getTime()
      )
      expect(timeAfter).toBeGreaterThanOrEqual(
        project.todos["a todo"].duedate.getTime()
      )
    })
    it("adds a todo using a given date", () => {
      const project = Project("a project")
      const givenDate = new Date("Sun Apr 03 2023")
      project.addTodo("some todo", "some description", givenDate)
      expect(project.todos).toHaveProperty(["some todo", "duedate"], givenDate)
    })

    it("returns true when todo is added successfully", () => {
      const project = Project("project 1")
      const success = project.addTodo("Todo 1")
      expect(project.todos).toHaveProperty("Todo 1")
      expect(success).toBe(true)
    })

    it("returns false when todo is not added successfully", () => {
      const project = Project("project 1")
      const success = project.addTodo(1)
      expect(project.todos).not.toHaveProperty("1")
      expect(success).toBe(false)
    })

    it("doesn't overwrite todos of the same name", () => {
      const project = Project("project 1")
      const firstAddSuccess = project.addTodo("Todo 1", "description 1")
      const secondAddSuccess = project.addTodo("Todo 1", "description 2")
      expect(project.todos).toHaveProperty(
        ["Todo 1", "description"],
        "description 1"
      )
      expect(firstAddSuccess).toBe(true)
      expect(secondAddSuccess).toBe(false)
    })

    describe("adds a todo with correct priority value", () => {
      it("adds a todo with default priority being medium", () => {
        const project = Project("some project")
        project.addTodo("Do laundry")
        expect(project.todos).toHaveProperty(
          ["Do laundry", "priority"],
          "medium"
        )
      })
      it("adds a todo with a low priority", () => {
        const project = Project("some project")
        project.addTodo("take out trash", "COMPLETELY", undefined, "low")
        expect(project.todos).toHaveProperty(
          ["take out trash", "priority"],
          "low"
        )
      })
      it("adds a todo with a medium priority", () => {
        const project = Project("some project")
        project.addTodo("clean counter", "COMPLETELY", undefined, "medium")
        expect(project.todos).toHaveProperty(
          ["clean counter", "priority"],
          "medium"
        )
      })
      it("adds a todo with a high priority", () => {
        const project = Project("some project")
        project.addTodo("walk dog", "around the park", undefined, "high")
        expect(project.todos).toHaveProperty(["walk dog", "priority"], "high")
      })
      it("doesn't accept values that aren't 'low', 'medium', or 'high", () => {
        const project = Project("Some project")
        project.addTodo(
          "add extreme priority task",
          ">:)",
          undefined,
          "extreme"
        )
        expect(project.todos).toEqual({})
      })
    })
  })

  describe("removes todos correctly", () => {
    it("returns false when no todos are in the list", () => {
      const isFalse = (value) => value === false
      const project = Project("my project")
      const removeAttempts = ["a", undefined, null, [], {}, 1]
      const attemptSuccesses = removeAttempts.map(project.removeTodo)
      expect(attemptSuccesses.every(isFalse)).toBe(true)
    })

    it("returns true and correctly removes the only item in the list", () => {
      const project = Project("my project")
      project.addTodo("myTodo")
      expect(project.todos).toHaveProperty("myTodo")

      const success = project.removeTodo("myTodo")
      expect(success).toBe(true)
      expect(project.todos).not.toHaveProperty("myTodo")
    })

    it("doesn't just remove the item no matter what", () => {
      const project = Project("my project")
      project.addTodo("myTodo")
      expect(project.todos).toHaveProperty("myTodo")

      const success = project.removeTodo()
      expect(success).toBe(false)
      expect(project.todos).toHaveProperty("myTodo")
    })

    it("removes only the specified item from the list", () => {
      const project = Project("my project")
      project.addTodo("myTodo")
      project.addTodo("myTodo2")
      expect(project.todos).toHaveProperty("myTodo")
      expect(project.todos).toHaveProperty("myTodo2")
      const success = project.removeTodo("myTodo2")
      expect(project.todos).toHaveProperty("myTodo")
      expect(project.todos).not.toHaveProperty("myTodo2")
      expect(success).toBe(true)
    })
  })

  describe("finds todo correctly", () => {
    it("returns the correct todo data", () => {
      const project = Project("Weekly tasks")
      project.addTodo("another task")
      project.addTodo("some task")
      const someTask = project.findTodo("some task")
      expect(someTask.title).toBe("some task")
    })
    it("returns a copy of the todo", () => {
      const project = Project("Weekly tasks")
      project.addTodo("some task")
      const copy = project.findTodo("some task")
      copy.title = "changed!"
      expect(copy.title).toBe("changed!")
      expect(project.findTodo("some task").title).toBe("some task")
    })
  })

  describe("edits todos correctly", () => {
    it("returns false if the todo doesn't exist", () => {
      const project = Project("empty")
      const success = project.editTodo("nonexistant")
      expect(success).toBe(false)
      expect(project.todos).toEqual({})
    })

    it("returns false if the field is not 'title' 'description', 'duedate', or 'priority'", () => {
      const isFalse = (value) => value === false
      const project = Project("notempty")
      project.addTodo("todo1")
      project.addTodo("todo2")
      const editTodo1 = (field) => project.editTodo("todo1", field, "change")
      const attempts = ["tittle", 1, "id", {}, [], "newProp"].map(editTodo1)
      expect(attempts.every(isFalse)).toBe(true)
    })

    describe("edits titles correctly", () => {
      it("returns false if title is not a non-empty string", () => {
        const isFalse = (value) => value === false
        const project = Project("notempty")
        project.addTodo("todo1")
        project.addTodo("todo2")
        const editTodo1 = (change) => project.editTodo("todo1", "title", change)
        const attempts = ["", "   ", 1, {}, [], [1, 2, 3]].map(editTodo1)
        expect(attempts.every(isFalse)).toBe(true)
      })

      it("doesn't edit the title if it not a a non-empty string", () => {
        const project = Project("notempty")
        project.addTodo("todo1")
        project.editTodo("todo1", "title", 1)
        expect(project.todos).toHaveProperty("todo1")
        expect(project.todos).toHaveProperty("todo1.title", "todo1")
        expect(project.todos).not.toHaveProperty("todo2")
      })

      it("doesn't edit the title if the title already exists", () => {
        const project = Project("notempty")
        project.addTodo("todo1")
        project.addTodo("todo2")
        const success = project.editTodo("todo2", "title", "todo1")
        expect(success).toBe(false)
        expect(project.todos).toHaveProperty("todo1.title", "todo1")
        expect(project.todos).toHaveProperty("todo2.title", "todo2")
      })

      it("edits the title", () => {
        const project = Project("notempty")
        project.addTodo("todo1")
        const success = project.editTodo("todo1", "title", "todo2")
        expect(success).toBe(true)
        expect(project.todos).not.toHaveProperty("todo1")
        expect(project.todos).toHaveProperty("todo2.title", "todo2")
      })
    })

    describe("edits descriptions correctly", () => {
      it("returns false if the description is not a string", () => {
        const isFalse = (value) => value === false
        const project = Project("notempty")
        project.addTodo("todo1")
        const editTodo1 = (change) => project.editTodo("todo1", "title", change)
        const attempts = ["", "   ", 1, {}, [], [1, 2, 3]].map(editTodo1)
        expect(attempts.every(isFalse)).toBe(true)
      })

      it("doesn't edit the description if the description is not a string", () => {
        const project = Project("notempty")
        project.addTodo("todo1", "description1")
        project.editTodo("todo1", "description", 1)
        expect(project.todos).toHaveProperty(
          "todo1.description",
          "description1"
        )
        expect(project.todos).not.toHaveProperty("todo1.description", 1)
      })

      it("edits the description", () => {
        const project = Project("notempty")
        project.addTodo("todo1", "description1")
        const success = project.editTodo(
          "todo1",
          "description",
          "new description"
        )
        expect(success).toBe(true)
        expect(project.todos).toHaveProperty(
          "todo1.description",
          "new description"
        )
      })
    })

    describe("edits duedates correctly", () => {
      it("returns false if the duedate is not a date", () => {
        const aprilFirst = new Date("Apr 01 2023")

        const project = Project("holidays")

        project.addTodo("April Fools", "description1", aprilFirst)
        expect(project.todos).toHaveProperty(
          ["April Fools", "duedate"],
          aprilFirst
        )

        const success = project.editTodo(
          "April Fools",
          "duedate",
          "Apr 02 2023"
        )
        expect(success).toBe(false)
      })

      it("doesn't edit the duedate is if it's not a date", () => {
        const aprilFirst = new Date("Apr 01 2023")

        const project = Project("holidays")

        project.addTodo("April Fools", "description1", aprilFirst)
        const success = project.editTodo("todo1", "duedate", "Apr 02 2023")
        expect(success).toBe(false)
        expect(project.todos).toHaveProperty(
          ["April Fools", "duedate"],
          aprilFirst
        )
      })

      it("edits the duedate if it is a date", () => {
        const aprilFirst = new Date("Apr 01 2023")
        const aprilSecond = new Date("Apr 02 2023")
        const project = Project("holidays")

        project.addTodo("April Fools", "description1", aprilFirst)
        expect(project.todos).toHaveProperty(
          ["April Fools", "duedate"],
          aprilFirst
        )

        const success = project.editTodo("April Fools", "duedate", aprilSecond)
        expect(success).toBe(true)
        expect(project.todos).toHaveProperty(
          ["April Fools", "duedate"],
          aprilSecond
        )
      })
    })

    describe("edits priority correctly", () => {
      it('returns false if the priority is not "high", "medium", or "low"', () => {
        const project = new Project("priorities")
        project.addTodo("Medium Priority Task")

        const success = project.editTodo(
          "Medium Priority Task",
          "priority",
          "not medium"
        )

        expect(success).toBe(false)
      })

      it("doesn't edit the todo if the priority is not 'high', 'medium', or 'low'", () => {
        const project = new Project("priorities")
        project.addTodo("Medium Priority Task")

        const success = project.editTodo(
          "Medium Priority Task",
          "priority",
          "not medium"
        )

        expect(success).toBe(false)
        expect(project.todos).toHaveProperty(
          ["Medium Priority Task", "priority"],
          "medium"
        )
      })

      it("edits the priority", () => {
        const project = new Project("priorities")
        project.addTodo("Medium Priority Task")

        const success = project.editTodo(
          "Medium Priority Task",
          "priority",
          "high"
        )

        expect(success).toBe(true)
        expect(project.todos).toHaveProperty(
          ["Medium Priority Task", "priority"],
          "high"
        )
      })
    })
  })
  test("project.todos returns a copy of the internal object", () => {
    const project = Project("newProject")
    project.addTodo("todo1", "description1")
    project.addTodo("todo2", "description2")
    const todos = project.todos
    todos.todo1.title = "hello"
    delete todos.todo2
    expect(project.todos).not.toEqual(todos)
  })
})
