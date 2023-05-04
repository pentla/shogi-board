import { Position, CellState } from "."

type ValidateError = {
  ok: boolean
  message: string
}

export const validateBoard = (board: Position): ValidateError => {
  if (board.length !== 9) {
    return {
      ok: false,
      message: '盤面の縦の長さが不正です。'
    }
  }
  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    if (row.length !== 9) {
      return {
        ok: false,
        message: '盤面の横の長さが不正です。'
      }
    }
    for (let j = 0; j < row.length; j++) {
      const cell = row[j]
      if (cell.x !== i || cell.y !== j) {
        return {
          ok: false,
          message: '盤面の座標が不正です。'
        }
      }
    }
  }
  return {
    ok: true,
    message: ''
  }
}

export const getEmptyBoard = (): Position => {
  const board: CellState[][] = []
  for (let i = 0; i < 9; i++) {
    const row: CellState[] = []
    for (let j = 0; j < 9; j++) {
      const cell: CellState = {
        x: i,
        y: j,
        pieceState: null,
      }
      row.push(cell)
    }
    board.push(row)
  }
  return board
}