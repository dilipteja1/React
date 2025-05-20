import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ol>
      <li>
        React is a popular language and it is important to learn it
      </li>
      <li>
        I am more likely to get a job with React in my Resume
      </li>
    </ol>
  )
}

export default App
