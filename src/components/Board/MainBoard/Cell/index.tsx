import { CellState } from '@/domain'
import React, { useCallback } from 'react'

type Props = {
  state: CellState
  isTurn: boolean
  isSelected: boolean
  isMovablePosition: boolean
  onClick: (event: CellState) => void
  style?: React.CSSProperties
}

export const Cell: React.FC<Props> = ({
  state,
  isTurn,
  isSelected,
  isMovablePosition,
  style,
  onClick,
}) => {
  const pieceState = state.pieceState
  const isSecondPlayerOwner = pieceState?.owner === 2
  const clickEvent = useCallback(() => {
    onClick(state)
  }, [state, onClick])
  return (
    <div
      style={{ ...style }}
      className={`box-border absolute border-0 ${isMovablePosition && 'bg-orange-300 opacity-50'}`}
      onClick={clickEvent}
    >
      {pieceState && (
        <img
          className={`
            ${isTurn && !isSelected && 'hover:bg-orange-300'}
            ${isSelected && 'bg-red-500'}
          `}
          src={pieceState.isPromoted ? pieceState.piece.promotedImage : pieceState.piece.image}
          style={{ transform: isSecondPlayerOwner ? 'rotate(180deg)' : '' }}
          alt='駒の画像'
        />
      )}
    </div>
  )
}
