import React, { CSSProperties, useCallback } from 'react'
import { Game, CapturedState } from '@/domain'
import { CapturedCell } from './CapturedCell'

type Props = {
  style?: CSSProperties
  isTurn: boolean
  selectedCapturedPiece: Game['selectedCapturedPiece']
  onClick: (state: CapturedState) => void
  pieces: CapturedState[]
}

export const CapturedPieceBoard: React.FC<Props> = ({
  style,
  onClick,
  isTurn,
  pieces,
  selectedCapturedPiece,
}) => {
  const clickEvent = useCallback(
    (state: CapturedState) => {
      onClick(state)
    },
    [onClick],
  )

  return (
    <div className="absolute shadow" style={{ width: 120, height: 120, ...style }}>
      {pieces.map((piece, i) => (
        <CapturedCell
          key={i}
          state={piece}
          isTurn={isTurn}
          isSelected={selectedCapturedPiece?.index === i}
          onClick={clickEvent}
          style={{ top: 30 * Math.floor(i / 4), left: 30 * (i % 4), width: 30 }}
        />
      ))}
    </div>
  )
}
