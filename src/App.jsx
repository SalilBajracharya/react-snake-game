import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Snake Game</h1>

      <GameBoard/>   
    </div>
  )
}

export default App
