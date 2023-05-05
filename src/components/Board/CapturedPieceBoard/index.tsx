import React, { CSSProperties } from 'react'

type Props = {
  style?: CSSProperties
}

export const CapturedPieceBoard: React.FC<Props> = ({ style }) => {
  return <div className="absolute shadow" style={{ width: 120, height: 120, ...style }} />
}
