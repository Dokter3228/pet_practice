import { screen } from "@testing-library/react";
import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";
import { Counter } from "../../Counter";
import { userEvent } from "@storybook/testing-library";
describe('Counter', function () {
  test("it mounts!", async () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    expect(await screen.findByTestId("value-title")).toBeInTheDocument();
    expect(await screen.findByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", async () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    const button = await screen.findByTestId("increment-btn");
    userEvent.click(button);
    expect(await screen.findByTestId("value-title")).toBeInTheDocument();
    expect(await screen.findByTestId("value-title")).toHaveTextContent("11");
  });

  test("decrement", async () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    const button = await screen.findByTestId("decrement-btn");
    userEvent.click(button);
    expect(await screen.findByTestId("value-title")).toBeInTheDocument();
    expect(await screen.findByTestId("value-title")).toHaveTextContent("9");
  });
});
