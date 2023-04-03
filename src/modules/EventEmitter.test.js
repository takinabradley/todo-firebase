import EventEmitter from "./EventEmitter"

describe("creates an object with expected structure", () => {
  it("has a list property with an empty object as default", () => {
    const events = EventEmitter()
    expect(events).toHaveProperty("list", {})
  })

  it("has 'on', 'emit', and 'off' methods", () => {
    const isFunction = (value) => typeof value === "function"
    const events = EventEmitter()
    expect(events).toHaveProperty("on")
    expect(events).toHaveProperty("off")
    expect(events).toHaveProperty("emit")
    expect([events.on, events.off, events.emit].every(isFunction)).toBe(true)
  })
})

describe("on method", () => {
  it("adds events to the list", () => {
    const cb = () => {}
    const events = EventEmitter()
    events.on("something", cb)
    expect(events.list).toHaveProperty("something", [cb])
  })

  it("returns true when adding events to the list", () => {
    const cb = () => {}
    const events = EventEmitter()
    const success = events.on("something", cb)
    expect(success).toBe(true)
    expect(events.list).toHaveProperty("something", [cb])
  })

  it("returns false when event name is an empty string", () => {
    const cb = () => {}
    const events = EventEmitter()
    const success = events.on("", cb)
    const success2 = events.on("    ", cb)
    expect(success).toBe(false)
    expect(success2).toBe(false)
  })

  it("returns false when event name is not a string", () => {
    const cb = () => {}
    const events = EventEmitter()
    const success = events.on(1, cb)
    expect(success).toBe(false)
  })

  it("returns false when callback is not a function", () => {
    const cb = "not a function"
    const events = EventEmitter()
    const success = events.on("someEvent", cb)
    expect(success).toBe(false)
  })
})

describe("off method", () => {
  it("removes callbacks from the list", () => {
    const cb = () => {}
    const cb2 = () => {}
    const events = EventEmitter()
    events.on("something", cb)
    events.on("something", cb2)

    const success = events.off("something", cb)
    expect(success).toBe(true)
    expect(events.list).toHaveProperty("something", [cb2])
  })

  it("removes eventNames from the list when it's empty", () => {
    const cb = () => {}
    const events = EventEmitter()
    events.on("something", cb)

    const success = events.off("something", cb)
    expect(success).toBe(true)
    expect(events.list).not.toHaveProperty("something")
  })

  it("returns true when removing callbacks from list", () => {
    const cb = () => {}
    const cb2 = () => {}
    const events = EventEmitter()
    events.on("something", cb)
    events.on("something", cb2)

    const success = events.off("something", cb)
    const success2 = events.off("something", cb2)
    expect(success).toBe(true)
    expect(success2).toBe(true)
  })

  it("returns false when callback is not found", () => {
    const cb = () => {}
    const events = EventEmitter()
    events.on("success", cb)
    const success = events.off("something", () => {})
    expect(success).toBe(false)
  })

  it("returns false when eventName isn't found", () => {
    const events = EventEmitter()
    events.off("something", () => {})
  })
})

describe("emit method", () => {
  it("fires functions registered to an eventName", () => {
    const cb = jest.fn()
    const cb2 = jest.fn()
    const cb3 = jest.fn()
    const events = EventEmitter()
    events.on("something", cb)
    events.on("something", cb2)
    events.on("somethingElse", cb3)
    events.emit("something")

    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb2).toHaveBeenCalledTimes(1)
    expect(cb3).not.toHaveBeenCalled()
  })

  it("passes data to the functions", () => {
    const cb = jest.fn()
    const cb2 = jest.fn()
    const events = EventEmitter()
    events.on("something", cb)
    events.on("something", cb2)
    events.emit("something", "data")
    expect(cb).toHaveBeenCalledWith("data")
    expect(cb2).toHaveBeenCalledWith("data")
  })

  it("returns true when it fires functions", () => {
    const cb = jest.fn()
    const events = EventEmitter()
    events.on("something", cb)
    expect(events.emit("something")).toBe(true)
  })

  it("returns false when it does not fire functions", () => {
    const events = EventEmitter()
    const success = events.emit("something")
    expect(success).toBe(false)
  })
})

test("list returns copy of internal list", () => {
  const events = EventEmitter()
  events.on("something", () => {})
  expect(events.list).toHaveProperty("something")
  const copy = events.list
  delete copy.something
  expect(events.list).toHaveProperty("something")
})
