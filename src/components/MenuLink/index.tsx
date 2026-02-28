import styles from './styles.module.css';

type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function MenuLink({ children, link, label, onClick }: MenuLinkProps) {
  return (
    <a
      className={styles.menuLink}
      href={link}
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
