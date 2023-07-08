import cls from "./SidebarItem.module.scss";
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { type SidebarItemType } from "../../model/items";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

interface SidebarProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarProps) => {
  const { t } = useTranslation();

  return <div className={cls.item}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={item?.path || "/"} className={classNames(cls.item_link, { [cls.collapsed]: collapsed }, [])} >
          <item.Icon className={cls.icon} />
          <span className={cls.link}>{t(item?.text)}</span>
      </AppLink>
  </div>;
});
