import React from 'react'
import './footer.css'
import { useState, useEffect } from 'react'

function Footer({ tasks }) {
  const [activeTasksValue, setActiveTasksValue] = useState(0)
  const [finishedTasksValue, setFinishedTasksValue] = useState(0)

  const activeTasks = tasks.filter((task) => task.status === 'backlog')

  const finishedTasks = tasks.filter((task) => task.status === 'finished')

  const changeState = (tasks) => {
    setActiveTasksValue(activeTasks.length)
    setFinishedTasksValue(finishedTasks.length)
  }

  useEffect(() => {
    changeState()
  }, [tasks])
  
  return (
      <div className="footer">
        <div className="tasks_statistics">
          <p>Active tasks: {activeTasksValue} </p>
          <p>Finished tasks: {finishedTasksValue}</p>
        </div>
        <p>Kanban board project, December 2023</p>
      </div>
  )
}

export default Footer