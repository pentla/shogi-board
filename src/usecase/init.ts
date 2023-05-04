import type { Game, Position, PieceState, Piece } from '@/domain'
import { validateBoard, getEmptyBoard } from '@/domain/board'
import { getPiece } from '@/domain/piece'
import { firstPlayerPieceState, secondPlayerPieceState } from '@/domain/pieceState'

/* ゲーム開始時、またはリセット時に呼び出す */
export const initGame = (initialPosition?: Position): Game => {
  if (initialPosition) {
    const error = validateBoard(initialPosition)
    if (!error.ok) {
      throw new Error(`board validate error: ${error.message}`)
    }
  }
  const game: Game = {
    board: initialPosition || initBoardPosition(),
    turn: 1,
    firstPlayerCapturedPieces: [],
    secondPlayerCapturedPieces: [],
  }
  return game
}

// 将棋の初期配置
export const initBoardPosition = (): Position => {
  const board = getEmptyBoard()
  // 歩の配置
  for (let i = 0; i < 9; i++) {
    board[i][2].pieceState = secondPlayerPieceState(getPiece('fu'))
    board[i][6].pieceState = firstPlayerPieceState(getPiece('fu'))
  }

  // 香の配置
  board[0][0].pieceState = secondPlayerPieceState(getPiece('kyo'))
  board[0][8].pieceState = secondPlayerPieceState(getPiece('kyo'))
  board[8][0].pieceState = firstPlayerPieceState(getPiece('kyo'))
  board[8][8].pieceState = firstPlayerPieceState(getPiece('kyo'))

  // 桂の配置
  board[1][0].pieceState = secondPlayerPieceState(getPiece('kei'))
  board[7][0].pieceState = secondPlayerPieceState(getPiece('kei'))
  board[1][8].pieceState = firstPlayerPieceState(getPiece('kei'))
  board[7][8].pieceState = firstPlayerPieceState(getPiece('kei'))

  // 銀の配置
  board[2][0].pieceState = secondPlayerPieceState(getPiece('gin'))
  board[6][0].pieceState = secondPlayerPieceState(getPiece('gin'))
  board[2][8].pieceState = firstPlayerPieceState(getPiece('gin'))
  board[6][8].pieceState = firstPlayerPieceState(getPiece('gin'))

  // 金の配置
  board[3][0].pieceState = secondPlayerPieceState(getPiece('kin'))
  board[5][0].pieceState = secondPlayerPieceState(getPiece('kin'))
  board[3][8].pieceState = firstPlayerPieceState(getPiece('kin'))
  board[5][8].pieceState = firstPlayerPieceState(getPiece('kin'))

  // 角の配置
  board[1][1].pieceState = secondPlayerPieceState(getPiece('kaku'))
  board[7][7].pieceState = firstPlayerPieceState(getPiece('kaku'))

  // 飛の配置
  board[7][1].pieceState = secondPlayerPieceState(getPiece('hisha'))
  board[1][7].pieceState = firstPlayerPieceState(getPiece('hisha'))

  // 玉の配置
  board[4][0].pieceState = secondPlayerPieceState(getPiece('gyoku'))
  board[4][8].pieceState = firstPlayerPieceState(getPiece('gyoku'))

  return board
}

