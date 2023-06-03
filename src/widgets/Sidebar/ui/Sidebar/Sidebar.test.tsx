import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "widgets/Sidebar"
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation"

describe('Sidebar', function () {
  test("it mounts!", async () => {
    renderWithTranslation(<Sidebar />)
    expect(await screen.findByTestId("sidebar")).toBeInTheDocument()
  })

  test("toggle sidebar", async () => {
    renderWithTranslation(<Sidebar />)
    const toggleButton = await screen.findByTestId("sidebar-toggle")
    const sidebar = await screen.findByTestId("sidebar")
    expect(sidebar).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(sidebar).toHaveClass("collapsed")
  })
})
