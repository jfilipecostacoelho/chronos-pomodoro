import styles from './styles.module.css';

type GenericHtmlProps = {
  children: React.ReactNode;
};

export function GenericHtml({ children }: { children: React.ReactNode }) {
  return <div className={styles.genericHtml}>{children}</div>;
}
