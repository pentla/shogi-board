import { Board, Coordinate, Game, Turn } from '.'
import * as move from './move'

type GetMovablePositionsProps = {
  board: Board
  selectedPiece: Game['selectedPiece']
}

/*
 駒を指定した際、移動できる位置を返す。
 移動できる位置は駒によって異なる。
*/
export const getMovableCoordinates = ({
  board,
  selectedPiece,
}: GetMovablePositionsProps): Coordinate[] => {
  if (!selectedPiece?.pieceState) {
    throw new Error('selectedPiece is null')
  }
  const { pieceState, x, y } = selectedPiece
  let coordinates: Coordinate[] = []
  switch (pieceState.piece.kind) {
    case 'fu':
      if (pieceState.isPromoted) {
        coordinates = movablePositionKin(pieceState.owner, { x, y })
      } else {
        coordinates = movablePositionFu(pieceState.owner, { x, y })
      }
      break
    case 'kyo':
      if (pieceState.isPromoted) {
        coordinates = movablePositionKin(pieceState.owner, { x, y })
      } else {
        coordinates = movablePositionKyo(pieceState.owner, { x, y })
      }
      break
    case 'kei':
      if (pieceState.isPromoted) {
        coordinates = movablePositionKin(pieceState.owner, { x, y })
      } else {
        coordinates = movablePositionKei(pieceState.owner, { x, y })
      }
      break
    case 'gin':
      if (pieceState.isPromoted) {
        coordinates = movablePositionKin(pieceState.owner, { x, y })
      } else {
        coordinates = movablePositionGin(pieceState.owner, { x, y })
      }
      break
    case 'kin':
      coordinates = movablePositionKin(pieceState.owner, { x, y })
      break
    case 'hisha':
      if (pieceState.isPromoted) {
        coordinates = movablePositionRyu(pieceState.owner, { x, y })
      } else {
        coordinates = movablePositionHisha(pieceState.owner, { x, y })
      }
      break
    case 'kaku':
      if (pieceState.isPromoted) {
        coordinates = movablePositionUma(pieceState.owner, { x, y })
      } else {
        coordinates = movablePositionKaku(pieceState.owner, { x, y })
      }
      break
    case 'gyoku':
      coordinates = movablePositionGyoku(pieceState.owner, { x, y })
      break
    default:
      throw new Error('invalid piece kind or not implement')
  }
  return coordinates.filter((coord) => {
    const cell = board[coord.y][coord.x]
    if (!cell.pieceState) return true
    if (cell.pieceState.owner !== pieceState.owner) return true
    return false
  })
}

/*
  ここからは各駒の動きを定義する。
*/
const movablePositionFu = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  return move.moveFront(turn, { x, y })
}

// 金の動き
const movablePositionKin = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  return [
    ...move.moveFront(turn, { x, y }),
    ...move.moveRight(turn, { x, y }),
    ...move.moveLeft(turn, { x, y }),
    ...move.moveBack(turn, { x, y }),
    ...move.moveRightFront(turn, { x, y }),
    ...move.moveLeftFront(turn, { x, y }),
  ]
}

// 銀の動き
const movablePositionGin = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  return [
    ...move.moveFront(turn, { x, y }),
    ...move.moveRightFront(turn, { x, y }),
    ...move.moveLeftFront(turn, { x, y }),
    ...move.moveRightBack(turn, { x, y }),
    ...move.moveLeftBack(turn, { x, y }),
  ]
}

// 桂馬の動き
const movablePositionKei = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  return move.moveKeima(turn, { x, y })
}

// 香車の動き
const movablePositionKyo = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  return move.moveRightStraight(turn, { x, y })
}

// 角の動き
const movablePositionKaku = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  return [...move.moveDiagonal(turn, { x, y })]
}

// 馬の動き
const movablePositionUma = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  return [
    ...move.moveFront(turn, { x, y }),
    ...move.moveRight(turn, { x, y }),
    ...move.moveLeft(turn, { x, y }),
    ...move.moveBack(turn, { x, y }),
    ...move.moveDiagonal(turn, { x, y }),
  ]
}

// 飛車の動き
const movablePositionHisha = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  return [
    ...move.moveFrontStraight(turn, { x, y }),
    ...move.moveRightStraight(turn, { x, y }),
    ...move.moveLeftStraight(turn, { x, y }),
    ...move.moveBackStraight(turn, { x, y }),
  ]
}

// 龍の動き
const movablePositionRyu = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  return [
    ...move.moveFrontStraight(turn, { x, y }),
    ...move.moveRightStraight(turn, { x, y }),
    ...move.moveLeftStraight(turn, { x, y }),
    ...move.moveBackStraight(turn, { x, y }),
    ...move.moveRightFront(turn, { x, y }),
    ...move.moveLeftFront(turn, { x, y }),
    ...move.moveRightBack(turn, { x, y }),
    ...move.moveLeftBack(turn, { x, y }),
  ]
}

// 玉の動き
const movablePositionGyoku = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  return [
    ...move.moveFront(turn, { x, y }),
    ...move.moveRight(turn, { x, y }),
    ...move.moveLeft(turn, { x, y }),
    ...move.moveBack(turn, { x, y }),
    ...move.moveRightFront(turn, { x, y }),
    ...move.moveLeftFront(turn, { x, y }),
    ...move.moveRightBack(turn, { x, y }),
    ...move.moveLeftBack(turn, { x, y }),
  ]
}
