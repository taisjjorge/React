
import { StatsCard } from '../StatsCard/StatsCard';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>
          
          <span>Bem vinda, Taís!</span>
        </div>
        
        <div>
          <StatsCard title='Total de Tarefas' value={5}/>
          <StatsCard title='Tarefas Pendentes' value={4} />
          <StatsCard title='Tarefas Concluídas' value={1} />
        </div>
      </div>
    </header>
  )
}