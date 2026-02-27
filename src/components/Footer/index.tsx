import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Learn about pomodoro technique.</a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Made for you!
      </a>
    </footer>
  );
}
