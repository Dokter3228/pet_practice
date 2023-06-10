import { type CounterSchema } from "entities/Counter/model/types/counterSchema";
import { Counter } from "./ui/Counter";
import { counterActions, counterReducer } from "./model/slice/counterSlice";

export {
  Counter, counterReducer, counterActions, type CounterSchema
};
