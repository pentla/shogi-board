import { describe, expect, it } from 'vitest';
import { initGame, initBoardPosition } from './init';
import { getPiece } from '@/domain/piece';

describe('initGameのテスト', () => {
  it('初期盤面が正しく生成されること', () => {
    const game = initGame()
    expect(game.board.length).toBe(9)
    expect(game.board[0].length).toBe(9)
    expect(game.board[0][0].x).toBe(0)
    expect(game.board[0][0].y).toBe(0)
    expect(game.board[0][0].piece).toBe(null)
  })
  it('引数に盤面を渡すと、その盤面が正しく生成されること', () => {
    let initPosition = initBoardPosition()
    initPosition[0][0].piece = { piece: getPiece('fu'), owner: 1, isPromoted: false, isSelected: false }
    const game = initGame(initPosition)
    expect(game.board[0][0].x).toBe(0)
    expect(game.board[0][0].y).toBe(0)
    expect(game.board[0][0].piece!.piece.kind).toBe('fu')
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
    expect(initPosition[0][0].piece).toBe(null)
  })
})