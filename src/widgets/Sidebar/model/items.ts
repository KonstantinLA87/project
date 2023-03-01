import { t } from 'i18next';
import HomeIcon from 'shared/assets/icons/nav-home.svg'
import InfoIcon from 'shared/assets/icons/nav-info.svg'
import ProfileIcon from 'shared/assets/icons/nav-profile.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'NaviLinks.main',
    Icon: HomeIcon
  },
  {
    path: RoutePath.about,
    text: 'NaviLinks.about',
    Icon: InfoIcon
  },
  {
    path: RoutePath.profile,
    text: 'NaviLinks.profile',
    Icon: ProfileIcon
  },
]