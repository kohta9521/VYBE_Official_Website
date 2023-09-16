import React from 'react'

// css import
import './styles/MainLayout.css'
import Toppage from '../organisms/Toppage'
import Mission from '../organisms/Misson'
import Section1 from '../organisms/Section1'

const MainLayout = () => {
  return (
    <div className="main">
      <Toppage />
      {/* <Mission /> */}
      <Section1 />
    </div>
  )
}

export default MainLayout
