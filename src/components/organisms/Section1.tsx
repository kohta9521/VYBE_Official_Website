import React from 'react'

// css import
import './styles/Section1.css'

// components import
import SectionTitle from '../atoms/SectionTitle'

const Section1 = () => {
  return (
    <div className="section1">
      <div className="section1__container">
        <SectionTitle
          id={1}
          text="MISSION"
          color="white"
          size="large"
          weight="tiny"
          align="center"
        />
        <h2 className="section1__subtitle">世の環境意識を底上げる</h2>
        <p className="section1__title">
          環境問題は世の中の全員の問題。
          <br />
          一部の人のみが活動することだけに頼ってはダメ。
          <br />
          少しでも世の中の人に関心を持ってもらえるよう
          <br />
        </p>
        <h3 className="section1__undertext">
          思いある若者が活動できる場所と影響を与えるコンテンツを作る
          <br />
          日本全国に、世界に、そして未来に影響を与え続ける
        </h3>
      </div>
    </div>
  )
}

export default Section1
