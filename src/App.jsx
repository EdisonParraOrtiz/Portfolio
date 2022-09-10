import { useState } from 'react'
import Header from './components/Header'
import Home from './components/home/Home'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
     <main className="main">
      <Home/>
     </main>
    </div>
  )
}

export default App
