import React from 'react'

// css import
import './styles/MainLayout.css'
import Toppage from '../organisms/Toppage'
import Section1 from '../organisms/Section1'

const MainLayout = () => {
  return (
    <div className="main">
      <Toppage />
      <Section1 />
    </div>
  )
}

export default MainLayout
