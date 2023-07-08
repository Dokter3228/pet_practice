import { type RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { type FC, type SVGProps } from "react";

export interface SidebarItemType {
  path: RoutePath | string
  text: string
  Icon: FC<SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: "/",
    text: "Main Page",
    Icon: MainIcon
  },
  {
    path: "/about",
    text: "About Page",
    Icon: AboutIcon
  },
  {
    path: "/profile",
    text: "Profile Page",
    Icon: ProfileIcon
  }
];
