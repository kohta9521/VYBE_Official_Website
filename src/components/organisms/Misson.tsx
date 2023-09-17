import React from 'react'

// css import
import './styles/Mission.css'

const Mission = () => {
  return (
    <div className="mittion">
      <div className="mission__container">
        <img className="mission__imgitem" src="/images/mission.png" alt="" />
        <div className="mission__textBox">
          <h2 className="mission__text">
            若者よ
            <br />
            ゴミ拾いで
            <br />
            革命を起こさないか？
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Mission
