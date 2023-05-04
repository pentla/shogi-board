import { validateBoard } from "./board"
import { describe, expect, it } from 'vitest';

describe('validateBoard', () => {
  // validateBoardのテストを書く
  it('盤面の縦の長さが不正な場合、エラーが返ること', () => {
    // 1*9の盤面
    const board = [
      [], [], [], [], [], [], [], [], [], []
    ]
    const result = validateBoard(board)
    expect(result.ok).toBe(false)
    expect(result.message).toBe('盤面の縦の長さが不正です。')
  })
  it('盤面の横の長さが不正な場合、エラーが返ること', () => {
    // 9*1の盤面
    const board = [
      [{ x: 0, y: 0, piece: null }],
      [{ x: 1, y: 0, piece: null }],
      [{ x: 2, y: 0, piece: null }],
      [{ x: 3, y: 0, piece: null }],
      [{ x: 4, y: 0, piece: null }],
      [{ x: 5, y: 0, piece: null }],
      [{ x: 6, y: 0, piece: null }],
      [{ x: 7, y: 0, piece: null }],
      [{ x: 8, y: 0, piece: null }],
    ]
    const result = validateBoard(board)
    expect(result.ok).toBe(false)
    expect(result.message).toBe('盤面の横の長さが不正です。')
  });
})
