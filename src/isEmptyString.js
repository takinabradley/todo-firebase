const isAllSpaces = (string) => [...string].every((char) => char === " ")
const isEmptyString = (string) => {
  if (typeof string !== "string") return false
  if (string.length === 0 || isAllSpaces(string)) return true
  return false
}

export default isEmptyString
