import React from 'react'

type Props = {
  label: string
  // 自分の手番かどうかを示す
  isTurn: boolean
  style?: React.CSSProperties
}

export const TurnText: React.FC<Props> = ({ label, isTurn, style }) => {
  return (
    <div className="absolute text-base text-center" style={{ width: 120, height: 125, ...style }}>
      <p style={{ opacity: isTurn ? 1 : 0.3 }}>{label}</p>
    </div>
  )
}
