import { describe, expect, it } from 'vitest'
import * as move from './move'
import { getEmptyBoard } from './board'

const EMPTY_BOARD = getEmptyBoard()

describe('動きに関するテスト', () => {
  it('moveFrontのテスト', () => {
    expect(move.moveFront(1, { x: 8, y: 8 })).toEqual([{ x: 8, y: 7 }])
    expect(move.moveFront(1, { x: 0, y: 0 })).toEqual([])
    expect(move.moveFront(2, { x: 0, y: 0 })).toEqual([{ x: 0, y: 1 }])
    expect(move.moveFront(2, { x: 8, y: 8 })).toEqual([])
  })
  it('moveBackのテスト', () => {
    expect(move.moveBack(1, { x: 3, y: 3 })).toEqual([{ x: 3, y: 4 }])
    expect(move.moveBack(1, { x: 8, y: 8 })).toEqual([])
    expect(move.moveBack(2, { x: 8, y: 8 })).toEqual([{ x: 8, y: 7 }])
    expect(move.moveBack(2, { x: 0, y: 0 })).toEqual([])
  })
  it('moveRightのテスト', () => {
    expect(move.moveRight(1, { x: 3, y: 3 })).toEqual([{ x: 4, y: 3 }])
    expect(move.moveRight(1, { x: 8, y: 8 })).toEqual([])
    expect(move.moveRight(2, { x: 8, y: 8 })).toEqual([{ x: 7, y: 8 }])
    expect(move.moveRight(2, { x: 0, y: 0 })).toEqual([])
  })
  it('moveLeftのテスト', () => {
    expect(move.moveLeft(1, { x: 3, y: 3 })).toEqual([{ x: 2, y: 3 }])
    expect(move.moveLeft(1, { x: 0, y: 0 })).toEqual([])
    expect(move.moveLeft(2, { x: 0, y: 0 })).toEqual([{ x: 1, y: 0 }])
    expect(move.moveLeft(2, { x: 8, y: 8 })).toEqual([])
  })
  it('moveRightFrontのテスト', () => {
    expect(move.moveRightFront(1, { x: 3, y: 3 })).toEqual([{ x: 4, y: 2 }])
    expect(move.moveRightFront(1, { x: 8, y: 8 })).toEqual([])
    expect(move.moveRightFront(2, { x: 8, y: 8 })).toEqual([])
    expect(move.moveRightFront(2, { x: 0, y: 0 })).toEqual([])
  })
  it('moveRightBackのテスト', () => {
    expect(move.moveRightBack(1, { x: 3, y: 3 })).toEqual([{ x: 4, y: 4 }])
    expect(move.moveRightBack(1, { x: 8, y: 8 })).toEqual([])
    expect(move.moveRightBack(2, { x: 8, y: 8 })).toEqual([{ x: 7, y: 7 }])
    expect(move.moveRightBack(2, { x: 0, y: 0 })).toEqual([])
  })
  it('moveLeftFrontのテスト', () => {
    expect(move.moveLeftFront(1, { x: 3, y: 3 })).toEqual([{ x: 2, y: 2 }])
    expect(move.moveLeftFront(1, { x: 0, y: 0 })).toEqual([])
    expect(move.moveLeftFront(2, { x: 0, y: 0 })).toEqual([{ x: 1, y: 1 }])
    expect(move.moveLeftFront(2, { x: 8, y: 8 })).toEqual([])
  })
  it('moveLeftBackのテスト', () => {
    expect(move.moveLeftBack(1, { x: 3, y: 3 })).toEqual([{ x: 2, y: 4 }])
    expect(move.moveLeftBack(1, { x: 0, y: 0 })).toEqual([])
    expect(move.moveLeftBack(2, { x: 0, y: 0 })).toEqual([])
    expect(move.moveLeftBack(2, { x: 8, y: 8 })).toEqual([{ x: 7, y: 7 }])
  })
  it('moveKeimaのテスト', () => {
    expect(move.moveKeima(1, { x: 3, y: 3 }).sort()).toEqual(
      [
        { x: 2, y: 1 },
        { x: 4, y: 1 },
      ].sort(),
    )
    expect(move.moveKeima(1, { x: 1, y: 0 })).toEqual([])
    expect(move.moveKeima(2, { x: 0, y: 0 })).toEqual([{ x: 1, y: 2 }])
    expect(move.moveKeima(2, { x: 8, y: 8 })).toEqual([])
  })
  it('moveFrontStraightのテスト', () => {
    expect(move.moveFrontStraight(1, { x: 3, y: 3 }, EMPTY_BOARD)).toEqual([
      { x: 3, y: 2 },
      { x: 3, y: 1 },
      { x: 3, y: 0 },
    ])
    expect(move.moveFrontStraight(1, { x: 1, y: 0 }, EMPTY_BOARD)).toEqual([])
    expect(move.moveFrontStraight(2, { x: 0, y: 0 }, EMPTY_BOARD)).toEqual([
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
      { x: 0, y: 4 },
      { x: 0, y: 5 },
      { x: 0, y: 6 },
      { x: 0, y: 7 },
      { x: 0, y: 8 },
    ])
    expect(move.moveFrontStraight(2, { x: 8, y: 8 }, EMPTY_BOARD)).toEqual([])
  })
  it('moveBackStraightのテスト', () => {
    expect(move.moveBackStraight(1, { x: 3, y: 3 }, EMPTY_BOARD)).toEqual([
      { x: 3, y: 4 },
      { x: 3, y: 5 },
      { x: 3, y: 6 },
      { x: 3, y: 7 },
      { x: 3, y: 8 },
    ])
    expect(move.moveBackStraight(1, { x: 1, y: 0 }, EMPTY_BOARD)).toEqual([
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
      { x: 1, y: 4 },
      { x: 1, y: 5 },
      { x: 1, y: 6 },
      { x: 1, y: 7 },
      { x: 1, y: 8 },
    ])
    expect(move.moveBackStraight(2, { x: 0, y: 0 }, EMPTY_BOARD)).toEqual([])
    expect(move.moveBackStraight(2, { x: 5, y: 5 }, EMPTY_BOARD)).toEqual([
      { x: 5, y: 4 },
      { x: 5, y: 3 },
      { x: 5, y: 2 },
      { x: 5, y: 1 },
      { x: 5, y: 0 },
    ])
  })
  it('moveLeftStraightのテスト', () => {
    expect(move.moveLeftStraight(1, { x: 3, y: 3 }, EMPTY_BOARD)).toEqual([
      { x: 2, y: 3 },
      { x: 1, y: 3 },
      { x: 0, y: 3 },
    ])
    expect(move.moveLeftStraight(1, { x: 1, y: 0 }, EMPTY_BOARD)).toEqual([{ x: 0, y: 0 }])
    expect(move.moveLeftStraight(2, { x: 5, y: 0 }, EMPTY_BOARD)).toEqual([
      { x: 6, y: 0 },
      { x: 7, y: 0 },
      { x: 8, y: 0 },
    ])
  })
  it('moveRightStraightのテスト', () => {
    expect(move.moveRightStraight(1, { x: 3, y: 3 }, EMPTY_BOARD)).toEqual([
      { x: 4, y: 3 },
      { x: 5, y: 3 },
      { x: 6, y: 3 },
      { x: 7, y: 3 },
      { x: 8, y: 3 },
    ])
    expect(move.moveRightStraight(1, { x: 8, y: 8 }, EMPTY_BOARD)).toEqual([])
    expect(move.moveRightStraight(2, { x: 0, y: 0 }, EMPTY_BOARD)).toEqual([])
    expect(move.moveRightStraight(2, { x: 5, y: 5 }, EMPTY_BOARD)).toEqual([
      { x: 4, y: 5 },
      { x: 3, y: 5 },
      { x: 2, y: 5 },
      { x: 1, y: 5 },
      { x: 0, y: 5 },
    ])
  })
  it('moveDiagonalのテスト', () => {
    expect(move.moveDiagonal(1, { x: 3, y: 3 }, EMPTY_BOARD)).toEqual([
      { x: 4, y: 4 },
      { x: 5, y: 5 },
      { x: 6, y: 6 },
      { x: 7, y: 7 },
      { x: 8, y: 8 },
      { x: 2, y: 4 },
      { x: 1, y: 5 },
      { x: 0, y: 6 },
      { x: 4, y: 2 },
      { x: 5, y: 1 },
      { x: 6, y: 0 },
      { x: 2, y: 2 },
      { x: 1, y: 1 },
      { x: 0, y: 0 },
    ])
    expect(move.moveDiagonal(2, { x: 0, y: 0 }, EMPTY_BOARD)).toEqual([
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 4 },
      { x: 5, y: 5 },
      { x: 6, y: 6 },
      { x: 7, y: 7 },
      { x: 8, y: 8 },
    ])
  })
})
