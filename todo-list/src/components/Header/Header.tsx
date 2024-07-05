
import { useContext } from 'react';
import { StatsCard } from '../StatsCard/StatsCard';
import styles from './styles.module.scss';
import { TasksContext } from '../../context/TasksContext';

export const Header: React.FC = () => {

  const { tasks } = useContext(TasksContext)
  console.log('-->', tasks)

  const totalTasks = tasks.length
  const totalPending = tasks.reduce((total, task) => task.done ? 
  total : total + 1, 0)
  const totalDoneTasks = totalTasks - totalPending
  
  const totalPendingTasks = tasks.filter(task => !task.done).length

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>
          
          <span>Bem vinda, Taís!</span>
        </div>
        
        <div>
          <StatsCard title='Total de Tarefas' value={totalTasks}/>
          <StatsCard title='Tarefas Pendentes' value={totalPending} />
          <StatsCard title='Tarefas Concluídas' value={totalDoneTasks} />
        </div>
      </div>
    </header>
  )
}