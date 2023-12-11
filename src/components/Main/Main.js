import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Board from '../Board/Board'
import './Main.css'
import TaskDetail from '../TaskDetail/TaskDetail'
import uniqid from 'uniqid'

function Main(props) {
  return (
    <main className="main">
      <Routes>
        <Route key={uniqid()} exact path={`/`} element={<Board {...props} />} />
        <Route path="/tasks">
          <Route path={':id'} element={<TaskDetail {...props} />} />
        </Route>
      </Routes>
    </main>
  )
}

export default Main
