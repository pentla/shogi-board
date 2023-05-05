import { describe, expect, it } from 'vitest';
import { initGame, initBoardPosition } from './init';
import { getPiece } from '@/domain/getPiece';

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
    const initPosition = initBoardPosition()
    initPosition[0][0].pieceState = { piece: getPiece('fu'), owner: 1, isPromoted: false }
    const game = initGame(initPosition)
    expect(game.board[0][0].x).toBe(0)
    expect(game.board[0][0].y).toBe(0)
    expect(game.board[0][0].pieceState?.piece.kind).toBe('fu')
  })
})

describe('initBoardPositionのテスト', () => {
  // initPositionのテスト
  it('初期盤面が正しく生成されること', () => {
    const initPosition = initBoardPosition()
    expect(initPosition.length).toBe(9)
    expect(initPosition[0].length).toBe(9)
    expect(initPosition[0][0].x).toBe(0)
    expect(initPosition[0][0].y).toBe(0)
    expect(initPosition[0][0].pieceState).toBe(null)
  })
})