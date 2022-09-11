import { useState } from 'react'
import Header from './components/Header'
import Home from './components/home/Home'
import About from './components/About/About'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
     <main className="main">
      <Home/>
      <About/>
     </main>
    </div>
  )
}

export default App
