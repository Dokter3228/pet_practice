import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";

describe('Sidebar', function () {
  test("it mounts!", async () => {
    ComponentRender(<Sidebar />);
    expect(await screen.findByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle sidebar", async () => {
    ComponentRender(<Sidebar />);
    const toggleButton = await screen.findByTestId("sidebar-toggle");
    const sidebar = await screen.findByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass("collapsed");
  });
});
