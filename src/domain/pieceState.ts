import { Piece, PieceState } from '.'

export const firstPlayerPieceState = (piece: Piece): PieceState => ({
  piece,
  isPromoted: false,
  owner: 1,
})

export const secondPlayerPieceState = (piece: Piece): PieceState => ({
  piece,
  isPromoted: false,
  owner: 2,
})
