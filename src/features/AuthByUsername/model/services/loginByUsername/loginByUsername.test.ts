import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { userActions } from "../../../../../entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("loginByUsername.test", () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;
  //
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test("correct", async () => {
  //   const userValue = { username: "fadsf", id: "228" };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //   const action = loginByUsername({ username: "fadsf", id: "228" });
  //   const res = await action(dispatch, getState, undefined);
  //
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(res.meta.requestStatus).toBe("fulfilled");
  //   expect(res.payload).toBe(userValue);
  // });
  //
  // test("handles errors", async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUsername({ username: "fadsf", id: "228" });
  //   const res = await action(dispatch, getState, undefined);
  //
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(res.meta.requestStatus).toBe("rejected");
  //   expect(res.payload).toBe("error");
  // });

  test("correct", async () => {
    const userValue = { username: "fadsf", id: "228" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const res = await thunk.callThunk({ username: "fasdfa", password: "228" });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe("fulfilled");
    expect(res.payload).toBe(userValue);
  });

  test("handles errors", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const res = await thunk.callThunk({ username: "fasdfa", password: "228" });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe("rejected");
    expect(res.payload).toBe("error");
  });
});
