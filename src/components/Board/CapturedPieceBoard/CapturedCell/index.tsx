import { CapturedState } from '@/domain'
import React, { useCallback } from 'react'

type Props = {
  state: CapturedState
  isTurn: boolean
  isSelected: boolean
  onClick: (event: CapturedState) => void
  style?: React.CSSProperties
}

export const CapturedCell: React.FC<Props> = ({ state, isTurn, isSelected, style, onClick }) => {
  const pieceState = state.pieceState
  const isSecondPlayerOwner = pieceState?.owner === 2
  const clickEvent = useCallback(() => {
    onClick(state)
  }, [state, onClick])
  return (
    <div style={{ ...style }} className="box-border absolute border-0" onClick={clickEvent}>
      {pieceState && (
        <img
          className={`
            ${isTurn && !isSelected && 'hover:bg-orange-300'}
            ${isSelected && 'bg-red-500'}
          `}
          src={pieceState.piece.image}
          style={{ transform: isSecondPlayerOwner ? 'rotate(180deg)' : '' }}
          alt="持ち駒の画像"
        />
      )}
    </div>
  )
}
