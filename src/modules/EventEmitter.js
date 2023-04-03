import isEmptyString from "../helpers/isEmptyString"

export default function EventEmitter() {
  const events = {}

  function on(eventName, fn) {
    if (
      typeof eventName !== "string" ||
      isEmptyString(eventName) ||
      typeof fn !== "function"
    ) {
      return false
    }

    if (!events[eventName]) events[eventName] = []
    events[eventName].push(fn)
    return true
  }

  function off(eventName, fn) {
    if (
      typeof eventName !== "string" ||
      isEmptyString(eventName) ||
      typeof fn !== "function"
    ) {
      return false
    }

    if (events[eventName]) {
      const index = events[eventName].indexOf(fn)
      // return false if fn isn't found
      if (index === -1) return false

      // return true if it was found and removed
      events[eventName].splice(index, 1)
      if (events[eventName].length === 0) delete events[eventName]
      return true
    }

    // return false if the event name isn't registered
    return false
  }

  function emit(eventName, data) {
    if (events[eventName]) {
      events[eventName].forEach(function (fn) {
        fn(data)
      })
      return true
    }
    return false
  }

  function _copyEvents() {
    const copy = { ...events }
    for (const key in copy) {
      copy[key] = [...copy[key]]
    }
    return copy
  }

  return {
    on,
    off,
    emit,
    get list() {
      return _copyEvents()
    }
  }
}
