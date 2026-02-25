import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { MenuLink } from '../MenuLink';
import styles from './styles.module.css';

export function Menu() {
  return (
    <div className={styles.menu}>
      <MenuLink>
        <HouseIcon />
      </MenuLink>

      <MenuLink>
        <HistoryIcon />
      </MenuLink>

      <MenuLink>
        <SettingsIcon />
      </MenuLink>

      <MenuLink>
        <SunIcon />
      </MenuLink>
    </div>
  );
}
