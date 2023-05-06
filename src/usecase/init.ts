import type { Game, Board } from '@/domain'
import { validateBoard, getEmptyBoard } from '@/domain/board'
import { getPiece } from '@/domain/getPiece'
import { firstPlayerPieceState, secondPlayerPieceState } from '@/domain/pieceState'

/* ゲーム開始時、またはリセット時に呼び出す */
export const initGame = (initialBoard?: Board): Game => {
  if (initialBoard) {
    const error = validateBoard(initialBoard)
    if (!error.ok) {
      throw new Error(`board validate error: ${error.message}`)
    }
  }
  const game: Game = {
    board: initialBoard || initBoardPosition(),
    turn: 1,
    firstPlayerCapturedPieces: [],
    secondPlayerCapturedPieces: [],
    selectedPiece: null,
    selectedCapturedPiece: null,
    movablePositions: [],
  }
  return game
}

// 将棋の初期配置
export const initBoardPosition = (): Board => {
  const board = getEmptyBoard()
  // 歩の配置
  for (let i = 0; i < 9; i++) {
    board[2][i].pieceState = secondPlayerPieceState(getPiece('fu'))
    board[6][i].pieceState = firstPlayerPieceState(getPiece('fu'))
  }
  // 香の配置
  board[0][8].pieceState = secondPlayerPieceState(getPiece('kyo'))
  board[0][0].pieceState = secondPlayerPieceState(getPiece('kyo'))
  board[8][8].pieceState = firstPlayerPieceState(getPiece('kyo'))
  board[8][0].pieceState = firstPlayerPieceState(getPiece('kyo'))

  // 桂の配置
  board[0][1].pieceState = secondPlayerPieceState(getPiece('kei'))
  board[0][7].pieceState = secondPlayerPieceState(getPiece('kei'))
  board[8][1].pieceState = firstPlayerPieceState(getPiece('kei'))
  board[8][7].pieceState = firstPlayerPieceState(getPiece('kei'))

  // 銀の配置
  board[0][2].pieceState = secondPlayerPieceState(getPiece('gin'))
  board[0][6].pieceState = secondPlayerPieceState(getPiece('gin'))
  board[8][2].pieceState = firstPlayerPieceState(getPiece('gin'))
  board[8][6].pieceState = firstPlayerPieceState(getPiece('gin'))

  // 金の配置
  board[0][3].pieceState = secondPlayerPieceState(getPiece('kin'))
  board[0][5].pieceState = secondPlayerPieceState(getPiece('kin'))
  board[8][3].pieceState = firstPlayerPieceState(getPiece('kin'))
  board[8][5].pieceState = firstPlayerPieceState(getPiece('kin'))

  // 角の配置
  board[1][1].pieceState = secondPlayerPieceState(getPiece('kaku'))
  board[7][7].pieceState = firstPlayerPieceState(getPiece('kaku'))

  // 飛の配置
  board[1][7].pieceState = secondPlayerPieceState(getPiece('hisha'))
  board[7][1].pieceState = firstPlayerPieceState(getPiece('hisha'))

  // 玉の配置
  board[0][4].pieceState = secondPlayerPieceState(getPiece('gyoku'))
  board[8][4].pieceState = firstPlayerPieceState(getPiece('gyoku'))

  return board
}
