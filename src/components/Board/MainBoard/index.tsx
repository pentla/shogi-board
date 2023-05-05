import React from 'react'
import { CellState } from '@/domain'
import { Cell } from './Cell'

type Props = {
  position: CellState[][]
}

const PIECE_WIDTH = 36
const PIECE_HEIGHT = 39

export const MainBoard: React.FC<Props> = ({ position }) => {
  return (
    <div className='absolute' style={{ width: PIECE_WIDTH * 9, height: PIECE_HEIGHT * 9, top: 86, left: 243.5 }}>
      <div>
        {position.map((row, i) => {
          return (
            <React.Fragment key={i}>
              {row.map((cell, j) => {
                return (
                  <Cell
                    key={j}
                    state={cell}
                    style={{ width: PIECE_WIDTH, height: PIECE_HEIGHT, top: PIECE_HEIGHT * i, left: PIECE_WIDTH * j }}
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
