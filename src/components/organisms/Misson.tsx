import React from 'react'

// css import
import './styles/Mission.css'

const Mission = () => {
  return (
    <div className="mission">
      <div className="mission__container">
        <img
          className="mission__img"
          src="/images/mission.png"
          alt="mission1革命画像"
        />
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
