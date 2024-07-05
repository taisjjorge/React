import React, { FormEvent, useContext, useState } from 'react'

import styles from './styles.module.scss'
import { TasksContext } from '../../context/TasksContext';

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('')

  const { tasks, setTasks } = useContext(TasksContext)

 const handleSubmitAddTask = (e: FormEvent) => {
    e.preventDefault()
    if (taskTitle.length < 3) {
      alert('Tarefa muito curta')
      return
    }

    const newTask = [
      ...tasks, 
      {
        title: taskTitle,
        done: false,
        id: new Date().getTime()
      }
    ]
    setTasks(newTask)

    localStorage.setItem('tasks', JSON.stringify(newTask))

    setTaskTitle('')
 }

 function handleRemoveTask(taskId: number) {
  const newTasks = tasks.map(task => {
    if(taskId === task.id ) {
      return {
        ...task,
        done: !task.done
      }
    }
    return task
  })

  setTasks(newTasks)
}

function handleDeleteTask(taskId: number) {
  const newTasks = tasks.filter(task => task.id !== taskId)
  setTasks(newTasks)  
}

  return(
    <section className={styles.container}>
      <form action="" onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input 
            type="text" 
            id="task-title" 
            placeholder='Título da Tarefa' 
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>

        <button type='submit'>
          Adicionar
        </button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input 
              type="checkbox" 
              name="" 
              id={`task-${task.id}`}
              onChange={() => handleRemoveTask(task.id)}  
            />
            <label 
              className={task.done ? styles.done : ''}
              htmlFor={`task-${task.id}`}>{task.title}
            </label>

            <button onClick={() => handleDeleteTask(task.id)}>Remover</button>
          </li>
        ))  }
      </ul>
    </section>
  )
}