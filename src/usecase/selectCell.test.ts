import { describe, expect, it, vi } from 'vitest'
import { selectCell } from './selectCell'
import { initGame } from './init'
import { CellState } from '@/domain/entity'
import { getPiece } from '@/domain/service/getPiece'

const generateMockGame = () => {
  return {
    game: { ...initGame() },
    updateBoard: vi.fn(),
    updateTurn: vi.fn(),
    updateSelectedPiece: vi.fn(),
    updateSelectedCapturedPiece: vi.fn(),
    updateFirstPlayerCapturedPiece: vi.fn(),
    updateSecondPlayerCapturedPiece: vi.fn(),
    updateMovablePositions: vi.fn(),
  }
}

// 以下、テストケース
// 1. 選択された駒がなく、何もない場所を選択した場合はなにもしない
// 2. 選択された駒がなく、自分の駒がある場所を選択した場合は選択する。
// 3. 選択された駒があり、何もない場所を選択した場合
//   3-1. 行ける場所であれば置く
//   3-2. 行けない場所であれば解除する
// 4. 選択された駒があり、駒がある場所を選択した場合
//   4-1. 同じ場所を選んだ場合は解除する
//   4-2. 敵の駒がある場合は取る
//     4-2-1. TODO: 駒台に置く処理
describe('selectCellのテスト', () => {
  it('1. 選択された駒がなく、何もない場所を選択した場合はなにもしない', () => {
    const mockGame = generateMockGame()
    const cell: CellState = {
      x: 0,
      y: 0,
      pieceState: null,
    }
    selectCell({ ...mockGame, cell })
    expect(mockGame.updateBoard).toHaveBeenCalledTimes(0)
    expect(mockGame.updateSelectedPiece).toHaveBeenCalledTimes(0)
  })
  it('2. 選択された駒がなく、自分の駒がある場所を選択した場合は選択する。', () => {
    const mockGame = generateMockGame()
    const cell: CellState = {
      x: 0,
      y: 0,
      pieceState: {
        piece: getPiece('fu'),
        owner: mockGame.game.turn,
        isPromoted: false,
      },
    }
    selectCell({ ...mockGame, cell })
    expect(mockGame.updateBoard).toHaveBeenCalledTimes(0)
    expect(mockGame.updateSelectedPiece).toHaveBeenCalledTimes(1)
    expect(mockGame.updateSelectedPiece).toHaveBeenCalledWith(cell)
  })
  it('3-1. 行ける場所であれば置く', () => {
    const mockGame = generateMockGame()
    const cell: CellState = {
      x: 2,
      y: 1,
      pieceState: null,
    }
    const selectedPiece: CellState = {
      x: 0,
      y: 0,
      pieceState: {
        piece: getPiece('fu'),
        owner: mockGame.game.turn,
        isPromoted: false,
      },
    }
    selectCell({ ...mockGame, cell, game: { ...mockGame.game, selectedPiece } })
    expect(mockGame.game.board[selectedPiece.y][selectedPiece.x].pieceState?.piece.kind).toBe('fu')
    expect(mockGame.updateBoard).toHaveBeenCalledTimes(1)
    expect(mockGame.updateSelectedPiece).toBeCalledWith(null)
  })
})
