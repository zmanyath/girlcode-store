import { useState } from 'react'
import './App.css'
import './components/TopBar'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import HeroSection from "./components/HeroSection"
import CategorySection from "./components/CategorySection"
 

function App() {
  return (
      <>
        <TopBar/>
        <NavBar/>
        <HeroSection/>
        <CategorySection/>
      </>
  )
}

export default App
