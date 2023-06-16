import { type DeepPartial } from "redux";
import { loginActions, loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { type LoginSchema } from "features/AuthByUsername";

describe("loginSlice.test", () => {
  test("set username", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "username!!"
    };
    expect(loginReducer(state as LoginSchema, loginActions.setUserName("username!!"))).toEqual({ username: "username!!" });
  });

  test("set password", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "password!!"
    };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword("password!!"))).toEqual({ password: "password!!" });
  });
});
