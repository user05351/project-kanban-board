import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './List.css'
import uniqid from 'uniqid'
import { LIST_TYPES } from '../../config'
import NewTask from '../TaskForm/NewTask'
import ChangeTask from '../TaskForm/ChangeTask'

function List(props) {
  const { localTasks, title, type, tasks, addNewTask, setTasks } = props
  const [isFormVisible, setFormVisible] = useState(false)

  const handleClick = () => {
    setFormVisible(!isFormVisible)
  }

  const changeColumn = (task) => {
    console.log(task, type);
    setFormVisible(!isFormVisible)
  }

  const backlogTasks = tasks.filter((task) => task.status === 'backlog')
  const readyTasks = tasks.filter((task) => task.status === 'ready')
  const inProgressTasks = tasks.filter((task) => task.status === 'inProgress')

  return (
    <div className="list">
      <p className="title">{title}</p>
      <div className="tasks">
        {localTasks.map((task) => {
          return (
            <Link to={`/tasks/${task.id}`} className="task_link">
              <p className="tasks_item" key={task.id}>
                {task.title}
              </p>
            </Link>
          )
        })}
        {type === LIST_TYPES.BACKLOG && isFormVisible && (
          <NewTask
            key={uniqid}
            addNewTask={addNewTask}
            setFormVisible={setFormVisible}
          />
        )}
        {type !== LIST_TYPES.BACKLOG && isFormVisible && (
          <ChangeTask
            {...props}
            key={uniqid}
            setFormVisible={setFormVisible}
            handleClick={handleClick}
          />
        )}

        {type === LIST_TYPES.BACKLOG && !isFormVisible && (
          <div className="btnBlock">
            <button className="add_card_button" onClick={handleClick}>
              <img src="./images/add_card.png" alt=""></img>
              <span>&#10011; Add Card</span>
            </button>
          </div>
        )}
        {type === LIST_TYPES.READY && !isFormVisible && (
          <div className="btnBlock">
            <button
              disabled={backlogTasks.length > 0 ? false : true}
              className={
                backlogTasks.length > 0
                  ? "add_card_button"
                  : "add_card_button_disabled"
              }
              onClick={handleClick}
            >
              <img src="./images/add_card.png" alt=""></img>
              <span>&#10011; Add Card</span>
            </button>
          </div>
        )}
        {type === LIST_TYPES.IN_PROGRESS && !isFormVisible && (
          <div className="btnBlock">
            <button
              disabled={readyTasks.length > 0 ? false : true}
              className={
                readyTasks.length > 0
                  ? "add_card_button"
                  : "add_card_button_disabled"
              }
              onClick={handleClick}
            >
              <img src="./images/add_card.png" alt=""></img>
              <span>&#10011; Add Card</span>
            </button>
          </div>
        )}
        {type === LIST_TYPES.FINISHED && !isFormVisible && (
          <div className="btnBlock">
            <button
              disabled={inProgressTasks.length > 0 ? false : true}
              className={
                inProgressTasks.length > 0
                  ? "add_card_button"
                  : "add_card_button_disabled"
              }
              onClick={handleClick}
            >
              <img src="./images/add_card.png" alt=""></img>
              <span>&#10011; Add Card</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default List
