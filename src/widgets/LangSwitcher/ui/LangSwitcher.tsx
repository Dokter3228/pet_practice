import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { type FunctionComponent } from "react";

interface LangSwitcherProps {
  className?: string
  short?: boolean
}
export const LangSwitcher: FunctionComponent<LangSwitcherProps> = ({ className, short = false }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async (): Promise<void> => {
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return <Button className={className} theme={ButtonTheme.CLEAR} onClick={() => {
    void toggle();
  }} >{short ? t("Short translation") : t("Translation")}</Button>;
};
