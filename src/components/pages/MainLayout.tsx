import React from 'react'

// css import
import './styles/MainLayout.css'
import Toppage from '../organisms/Toppage'
import Mission from '../organisms/Misson'

const MainLayout = () => {
  return (
    <div className="main">
      <Toppage />
      <Mission />
    </div>
  )
}

export default MainLayout
