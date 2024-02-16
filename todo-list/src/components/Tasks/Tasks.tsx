import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import styles from './styles.module.scss'

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [tasks, setTasks] = useState([] as Task[])

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

 useEffect(() => {
  const tasksOnLocalStorage = localStorage.getItem('tasks')

  if (tasksOnLocalStorage) {
    setTasks(JSON.parse(tasksOnLocalStorage))
  }
 }, [])

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
            <input type="checkbox" name="" id={`task-${task.id}`} />
            <label htmlFor={`task-${task.id}`}>{task.title}</label>
          </li>
        ))  }
      </ul>
    </section>
  )
}