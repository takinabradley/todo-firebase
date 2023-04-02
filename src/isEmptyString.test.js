import isEmptyString from "./isEmptyString"

it("returns true for empty string", () => {
  expect(isEmptyString("")).toBe(true)
})

it("returns true for a string with only spaces", () => {
  expect(isEmptyString("   ")).toBe(true)
})

it("returns false for non-string values", () => {
  expect(isEmptyString(1)).toBe(false)
})
