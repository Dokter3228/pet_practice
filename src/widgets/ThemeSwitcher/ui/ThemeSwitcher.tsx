import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/themeProvider";
import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { type FunctionComponent } from "react";

interface ThemeSwitcherProps {
  className?: string
}
export const ThemeSwitcher: FunctionComponent = ({ className = "" }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
      <Button theme={ButtonTheme.CLEAR} className={classNames("", {}, [className])} onClick={toggleTheme} >
          {theme === Theme.LIGHT ? <LightThemeIcon/> : <DarkThemeIcon/> }
      </Button>
  );
};
