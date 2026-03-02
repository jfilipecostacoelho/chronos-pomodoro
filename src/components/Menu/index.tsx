import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { MenuLink } from '../MenuLink';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
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
        {nextThemeIcon[theme]}
      </MenuLink>
    </div>
  );
}
