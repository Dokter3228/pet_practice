import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { type FunctionComponent } from "react";

interface LangSwitcherProps {
  className?: string
}
export const LangSwitcher: FunctionComponent<LangSwitcherProps> = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async (): Promise<void> => {
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return <Button className={className} theme={ThemeButton.CLEAR} onClick={() => {
    void toggle();
  }} >{t("Translation")}</Button>;
};
