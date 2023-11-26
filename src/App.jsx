import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from '../dist/components/HeaderComp'
import ProjectComponent from '../dist/components/ProjectComp'
import Aboutcomponent from '../dist/components/AboutComp'
import Footercomponent from '../dist/components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div class="box-sub">
    <HeaderComponent/>
    <ProjectComponent/>
    <Aboutcomponent/>
    <Footercomponent/>
    </div>

    </>
  )
}

export default App
