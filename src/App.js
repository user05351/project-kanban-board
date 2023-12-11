import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header/header'
import Main from './components/Main/Main'
import Footer from './components/Footer/footer'
import { useState, useEffect } from 'react'

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </div>
    </BrowserRouter>
  )
}

export default App
