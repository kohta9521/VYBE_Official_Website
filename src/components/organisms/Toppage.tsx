import React from 'react'

// css import
import './styles/Toppage.css'

const Toppage = () => {
  return (
    <div className="toppage">
      <div className="container">
        <div className="titleBox">
          <h1 className="title">VYBE .</h1>
        </div>
        <div className="subBox">
          <p className="subtitle">Sustainable</p>
          <p className="subtitle">Community</p>
          <p className="subtitle">for youth</p>
        </div>
        <div className="underBox">
          <p className="boxtext">BE CLEAN,</p>
          <p className="boxtext">BE COOL,</p>
          <p className="boxtext">BE CASUAL</p>
        </div>
      </div>
      <div className="scrolldown4">
        <span>Scroll</span>
      </div>
    </div>
  )
}

export default Toppage
