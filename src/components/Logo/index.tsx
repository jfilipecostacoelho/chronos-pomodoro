import { Timer } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a href='#'>
        <Timer />
        <span>Chronos</span>
      </a>
    </div>
  );
}
