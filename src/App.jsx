import { useState } from 'react'
import Header from './components/Header'
import Home from './components/home/Home'
import About from './components/About/About'
import './App.css'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Projects from './components/Projects/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
     <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
     </main>
    </div>
  )
}

export default App
