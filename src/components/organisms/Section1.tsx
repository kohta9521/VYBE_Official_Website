import React from 'react'

// css import
import './styles/Section1.css'

// components import
import SectionTitle from '../atoms/SectionTitle'

const Section1 = () => {
  return (
    <div className="section1">
      <SectionTitle
        id={1}
        text="sample"
        color="green"
        size="medium"
        align="center"
      />
    </div>
  )
}

export default Section1
