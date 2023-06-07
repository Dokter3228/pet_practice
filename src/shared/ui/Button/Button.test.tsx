import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { render, screen } from "@testing-library/react";

describe('Button component', function () {
  test("with clear theme", () => {
    render(<Button theme={ButtonTheme.CLEAR}>my excellent button</Button>);
    expect(screen.getByText("my excellent button")).toHaveClass("clear");
  });

  test("without any themes and classes", () => {
    render(<Button >my excellent button</Button>);
    expect(screen.getByText("my excellent button")).toHaveClass("Button");
  });

  test("without themes but with a custom class", () => {
    render(<Button className="customClassRightHere">my excellent button</Button>);
    expect(screen.getByText("my excellent button")).toHaveClass("customClassRightHere");
  });
});
