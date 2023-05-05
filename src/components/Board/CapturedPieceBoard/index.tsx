import { PieceState } from '@/domain'
import React, { CSSProperties } from 'react'

type Props = {
  style?: CSSProperties
  pieces: PieceState[]
}

export const CapturedPieceBoard: React.FC<Props> = ({ style, pieces }) => {
  return (
    <div className="absolute shadow" style={{ width: 120, height: 120, ...style }}>
      {pieces.map((piece) => (
        <img src={piece.piece.image} alt="持ち駒の画像" />
      ))}
    </div>
  )
}
