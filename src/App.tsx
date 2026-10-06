import React from 'react'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <AddToDo/>
      <Todos/>
      <Navbar/>
    </main>
  )
}

export default App