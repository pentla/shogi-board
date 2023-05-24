import React from 'react'
import { CellState, Game, Turn } from '@/domain/entity'
import { Cell } from './Cell'

type Props = {
  position: CellState[][]
  turn: Turn
  selectedPiece: Game['selectedPiece']
  movablePositions: Game['movablePositions']
  onSelectCell: (cell: CellState) => void
}

const PIECE_WIDTH = 36
const PIECE_HEIGHT = 39

export const MainBoard: React.FC<Props> = ({
  position,
  turn,
  onSelectCell,
  selectedPiece,
  movablePositions,
}) => {
  return (
    <div
      className='absolute'
      style={{ width: PIECE_WIDTH * 9, height: PIECE_HEIGHT * 9, top: 86, left: 243.5 }}
    >
      <div>
        {position.map((row, i) => {
          return (
            <React.Fragment key={i}>
              {row.map((cell, j) => {
                const movablePositionIndex = movablePositions.findIndex(
                  (position) => position.x === j && position.y === i,
                )
                return (
                  <Cell
                    isTurn={cell.pieceState?.owner === turn}
                    isSelected={selectedPiece?.x === j && selectedPiece?.y === i}
                    key={j}
                    isMovablePosition={movablePositionIndex !== -1}
                    state={cell}
                    onClick={onSelectCell}
                    style={{
                      width: PIECE_WIDTH,
                      height: PIECE_HEIGHT,
                      top: PIECE_HEIGHT * i,
                      left: PIECE_WIDTH * j,
                    }}
                  />
                )
              })}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
