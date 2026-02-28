import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { MenuLink } from '../MenuLink';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.menu}>
      <MenuLink link='#' label='Home'>
        <HouseIcon />
      </MenuLink>

      <MenuLink link='#' label='History'>
        <HistoryIcon />
      </MenuLink>

      <MenuLink link='#' label='Settings'>
        <SettingsIcon />
      </MenuLink>

      <MenuLink link='#' label='Theme' onClick={handleThemeChange}>
        <SunIcon />
      </MenuLink>
    </div>
  );
}
