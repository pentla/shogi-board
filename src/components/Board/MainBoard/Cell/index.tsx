import { CellState } from '@/domain'
import React, { useCallback } from 'react'

type Props = {
  state: CellState
  onClick?: (event: CellState) => void
  style?: React.CSSProperties
}

export const Cell: React.FC<Props> = ({ state, style, onClick }) => {
  const pieceState = state.pieceState
  const isSecondTurn = pieceState?.owner === 2
  const clickEvent = useCallback(() => {
    if (onClick) onClick(state)
  }, [state, onClick])
  return (
    <div style={{ ...style }} className="box-border absolute border-0">
      {pieceState && (
        <img
          className='hover:bg-orange-300'
          onClick={clickEvent}
          src={pieceState.piece.image}
          style={{ transform: isSecondTurn ? 'rotate(180deg)' : '' }}
          alt="駒の画像"
        />
      )}
    </div>
  )
}
