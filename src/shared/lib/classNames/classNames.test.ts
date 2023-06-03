import { classNames } from "shared/lib/classNames/classNames"

describe('classNames', function () {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass")
  })

  test("with additional class", () => {
    const expected = "someClass class class2"
    expect(classNames("someClass", {}, ["class", "class2"])).toBe(expected)
  })

  test("with mods", () => {
    const expected = "someClass class class2 disabled hovered"
    expect(classNames("someClass", { disabled: true, hovered: true }, ["class", "class2"])).toBe(expected)
  })

  test("with mods false", () => {
    const expected = "someClass class class2 hovered"
    expect(classNames("someClass", { disabled: false, hovered: true }, ["class", "class2"])).toBe(expected)
  })
})
