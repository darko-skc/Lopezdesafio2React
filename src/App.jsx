import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SideBar from './components/Side-bar/Side-bar'

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className='Nav-bar'></div>
      <div className='Games-section'></div>
      <div className='Games-recomendation-section'></div>
    </div>
  )
}

export default App
