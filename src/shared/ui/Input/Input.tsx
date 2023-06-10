import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import {
  type ChangeEvent,
  type FunctionComponent,
  type InputHTMLAttributes,
  memo,
  useState,
  useEffect,
  useRef
} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
}

export const Input: FunctionComponent<InputProps> = memo((props: InputProps) => {
  const {
    className = "",
    value,
    onChange,
    type = "text",
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = (): void => { setIsFocused(false); };
  const onFocus = (): void => { setIsFocused(true); };

  const onSelect = (e: any): void => {
    setCaretPosition(e.target.selectionStart || 0);
  };

  return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
          {placeholder && <div className={cls.placeholder}>
              {`${placeholder}>`}
          </div>}
          <div className={cls.caretWrapper}>
              <input
                  ref={ref}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  type={type}
                  value={value}
                  onChange={onChangeHandler}
                  onSelect={onSelect}
                  className={cls.Input}
                  {...otherProps} />
              {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 6}px` }}></span>}
          </div>
      </div>
  );
});
