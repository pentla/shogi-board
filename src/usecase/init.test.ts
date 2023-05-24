import { describe, expect, it } from 'vitest'
import { initGame, initBoardPosition } from './init'
import { getPiece } from '@/domain/service/getPiece'

describe('initGameのテスト', () => {
  it('初期盤面が正しく生成されること', () => {
    const game = initGame()
    expect(game.board.length).toBe(9)
    expect(game.board[0].length).toBe(9)
    expect(game.board[0][0].x).toBe(0)
    expect(game.board[0][0].y).toBe(0)
    expect(game.board[0][0].pieceState?.piece.kind).toBe('kyo')
  })
  it('引数に盤面を渡すと、その盤面が正しく生成されること', () => {
    const initBoard = initBoardPosition()
    initBoard[0][0].pieceState = { piece: getPiece('fu'), owner: 1, isPromoted: false }
    const game = initGame(initBoard)
    expect(game.board[0][0].x).toBe(0)
    expect(game.board[0][0].y).toBe(0)
    expect(game.board[0][0].pieceState?.piece.kind).toBe('fu')
  })
})

describe('initBoardPositionのテスト', () => {
  it('初期盤面が正しく生成されること', () => {
    const initBoard = initBoardPosition()
    expect(initBoard.length).toBe(9)
    expect(initBoard[0].length).toBe(9)
    expect(initBoard[0][0].x).toBe(0)
    expect(initBoard[0][0].y).toBe(0)
    expect(initBoard[0][0].pieceState).toBe(null)
  })
})
