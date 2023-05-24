import { Board, CellState, CapturedState, Turn } from '../entity'

type ValidateError = {
  ok: boolean
  message: string
}

export const validateBoard = (board: Board): ValidateError => {
  if (board.length !== 9) {
    return {
      ok: false,
      message: '盤面の縦の長さが不正です。',
    }
  }
  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    if (row.length !== 9) {
      return {
        ok: false,
        message: '盤面の横の長さが不正です。',
      }
    }
    for (let j = 0; j < row.length; j++) {
      const cell = row[j]
      if (cell.x !== j || cell.y !== i) {
        return {
          ok: false,
          message: '盤面の座標が不正です。',
        }
      }
    }
  }
  return {
    ok: true,
    message: '',
  }
}

export const getEmptyBoard = (): Board => {
  const board: CellState[][] = []
  for (let i = 0; i < 9; i++) {
    const row: CellState[] = []
    for (let j = 0; j < 9; j++) {
      const cell: CellState = {
        x: j,
        y: i,
        pieceState: null,
      }
      row.push(cell)
    }
    board.push(row)
  }
  return board
}

/*
 76歩、のような形x,y形式の座標から、実際にboardに指定する際の座標を取得する。
 結果を利用する際はboard[x][y]のように扱う。
*/
export const convertBoardPoint = (x: number, y: number): [number, number] => {
  return [x - 1, y - 1]
}

type MoveCellProps = {
  turn: Turn
  board: Board
  destinationX: number
  destinationY: number
  sourceCell: CellState
}

/*
  駒を移動する。 =元あった場所の駒を削除し、移動先に駒を置く。
*/
export const moveCell = ({
  turn,
  board,
  destinationX,
  destinationY,
  sourceCell,
}: MoveCellProps): Board => {
  if (!sourceCell.pieceState) {
    throw new Error('sourceCell.pieceState is null. 選択されたセルに駒がありません。')
  }
  let changePromote = false
  if (!sourceCell.pieceState.isPromoted) {
    if ((turn === 1 && destinationY <= 2) || (turn === 2 && destinationY >= 6)) {
      changePromote = window.confirm('駒を成りますか？')
    }
  }

  board[sourceCell.y][sourceCell.x] = { ...board[sourceCell.y][sourceCell.x], pieceState: null }
  board[destinationY][destinationX] = {
    x: destinationX,
    y: destinationY,
    pieceState: {
      ...sourceCell.pieceState,
      // 成る宣言をしたら成る、何もなければそのまま
      isPromoted: changePromote ? true : sourceCell.pieceState.isPromoted,
    },
  }
  return [...board]
}

type PutCaputuredCellProps = {
  board: Board
  destinationX: number
  destinationY: number
  capturedState: CapturedState
}

export const putCapturedCell = ({
  board,
  destinationX,
  destinationY,
  capturedState,
}: PutCaputuredCellProps) => {
  board[destinationY][destinationX] = {
    x: destinationX,
    y: destinationY,
    pieceState: { ...capturedState.pieceState },
  }
  return [...board]
}
