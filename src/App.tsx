import React from 'react'
import './styles/App.css'
import MainLayout from './components/pages/MainLayout'
import PreLoader from './hooks/PreLoader'

function App() {
  return (
    <div className="App">
      <PreLoader />
      <MainLayout />
    </div>
  )
}

export default App
