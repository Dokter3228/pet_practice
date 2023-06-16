import { type DeepPartial } from "redux";
import { type StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword.test", () => {
  test("should return password", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "password here!"
      }
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("password here!");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
