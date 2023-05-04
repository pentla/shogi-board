import { Piece, PieceKind } from "./index";

export const getPiece = (kind: PieceKind): Piece => {
  switch (kind) {
    case 'fu':
      return {
        kind: 'fu',
        image: 'fu.png',
        promotedImage: 'to.png'
      }
    case 'kyo':
      return {
        kind: 'kyo',
        image: 'kyo.png',
        promotedImage: 'nkyo.png'
      }
    case 'kei':
      return {
        kind: 'kei',
        image: 'kei.png',
        promotedImage: 'nkei.png'
      }
    case 'gin':
      return {
        kind: 'gin',
        image: 'gin.png',
        promotedImage: 'ngin.png'
      }
    case 'kin':
      return {
        kind: 'kin',
        image: 'kin.png',
        promotedImage: 'kin.png'
      }
    case 'kaku':
      return {
        kind: 'kaku',
        image: 'kaku.png',
        promotedImage: 'uma.png'
      }
    case 'hisha':
      return {
        kind: 'hisha',
        image: 'hisha.png',
        promotedImage: 'ryu.png'
      }
    case 'gyoku':
      return {
        kind: 'gyoku',
        image: 'gyoku.png',
        promotedImage: 'gyoku.png'
      }
    default:
      throw new Error('invalid piece kind')
  }
}