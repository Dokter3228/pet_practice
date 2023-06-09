import { type FunctionComponent } from "react";
import { Button } from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../../Counter/model/selectors/getCounterValue/getCounterValue";
import { useTranslation } from "react-i18next";

interface CounterProps {
  className?: string
}

export const Counter: FunctionComponent<CounterProps> = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = (): void => {
    dispatch(counterActions.increment());
  };

  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };
  return (
      <div>
          <h1 data-testid="value-title">{counterValue}</h1>
          <Button onClick={increment} data-testid="increment-btn">{t("increment")}</Button>
          <Button onClick={decrement} data-testid="decrement-btn">{t("decrement")}</Button>
      </div>
  );
};
