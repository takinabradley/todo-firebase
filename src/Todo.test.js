import Todo from "./Todo"

describe("Requires a title to return an object", () => {
  test("title doesn't accept empty string", () => {
    const myTodo = Todo("")
    expect(myTodo).toBeUndefined()
  })

  test("title doesn't accept non-string values", () => {
    const isUndefined = (value) => value === undefined
    const badValues = [1, {}, [], undefined, true, null]
    const undefinedArray = badValues.map((value) => Todo(value))
    expect(undefinedArray.every(isUndefined)).toBe(true)
  })
})

it("returns an object with a non-empty string", () => {
  const todo = Todo("a")
  expect(todo).not.toBeUndefined()
  expect(typeof todo).toBe("object")
})

it("uses given title in title property of the returned object", () => {
  const todo = Todo("A title")
  expect(todo).toHaveProperty("title", "A title")
})

it("uses given description in description property of the returned object", () => {
  const todo = Todo("A title", "A description")
  expect(todo).toHaveProperty("description", "A description")
})

it("uses given duedate in duedate property of the returned object", () => {
  const date = new Date()
  const todo = Todo("A title", "A description", date)
  expect(todo).toHaveProperty("duedate", date)
})

it("uses given priority in priority property of the returned object", () => {
  const date = new Date()
  const todo = Todo("A title", "A description", date, "high")
  expect(todo).toHaveProperty("priority", "high")
})

it("uses Date.now() as default id value", () => {
  const date = new Date()

  const dateBefore = Date.now()
  const todo = Todo("A title", "A description", date, "high")
  const todoID = todo.id
  const dateAfter = Date.now()

  expect(dateBefore).toBeLessThanOrEqual(todoID)
  expect(dateAfter).toBeGreaterThanOrEqual(todoID)
})

it("uses provided id value", () => {
  const date = new Date()
  const todo = Todo("A title", "A description", date, "high", 0)
  expect(todo).toHaveProperty("id", 0)
})
