import styles from './styles.module.css';

type HeaderProps = {
  children: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href='/' data-discover='true'>
        {children}
      </a>
    </header>
  );
}
