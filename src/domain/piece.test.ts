import { getPiece } from './piece';
import { describe, expect, it } from 'vitest';

describe('getPiece', () => {
  it('歩のコマが取得できること', () => {
    const piece = getPiece('fu')
    expect(piece.kind).toBe('fu')
    expect(piece.image).toBe('fu.png')
    expect(piece.promotedImage).toBe('to.png')
  })

  it('香のコマが取得できること', () => {
    const piece = getPiece('kyo')
    expect(piece.kind).toBe('kyo')
    expect(piece.image).toBe('kyo.png')
    expect(piece.promotedImage).toBe('nkyo.png')
  })
})
