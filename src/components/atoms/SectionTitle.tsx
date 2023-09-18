import React from 'react'

// css import
import './styles/SectionTitle.css'

// props type
type Props = {
  // key用id
  id: number
  // 文字内容
  text: string
  // 文字色
  color?: 'black' | 'green' | 'white'
  // 文字サイズ
  size?: 'small' | 'medium' | 'large'
  // 文字の太さ
  weight?: 'tiny' | 'bold'
  // 文字位置
  align?: 'left' | 'center' | 'right'
}

const SectionTitle: React.FC<Props> = ({
  id,
  text,
  color = 'black',
  size = 'medium',
  weight = 'tiny',
  align = 'center',
}) => {
  return (
    <div className={`sectionTitle ${[align]} `} key={id}>
      <h1 className={`sectionTitleText ${[color]} ${[size]} ${[weight]}`}>
        {text}
      </h1>
    </div>
  )
}

export default SectionTitle
