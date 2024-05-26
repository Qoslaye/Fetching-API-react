import { useState } from 'react'
import './App.css'
import FetchApi from './FetchApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FetchApi />
    </>
  )
}

export default App
