import React from 'react'

// css import
import './styles/MainLayout.css'
import Toppage from '../organisms/Toppage'
import Section1 from '../organisms/Section1'
import Mission from '../organisms/Misson'
import Section2 from '../organisms/Section2'

const MainLayout = () => {
  return (
    <div className="main">
      <Toppage />
      <Mission />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default MainLayout
