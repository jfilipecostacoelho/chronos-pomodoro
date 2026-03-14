import { useTaskContext } from '../../Contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });
  console.log(cycleStep);

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(index);
          return (
            <span
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label='Focus cycle indicator'
              title='Focus cycle indicator'
            >
              {nextCycleType + ' ' + nextCycle + ' ' + index}
            </span>
          );
        })}
      </div>
    </div>
  );
}
