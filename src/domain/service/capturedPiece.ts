import { CapturedState, PieceKind } from '../entity'

type RemoveCapturedPieceProps = {
  state: CapturedState
  pieces: CapturedState[]
}

// 持ち駒を削除する
export const removeCapturedPiece = ({
  state,
  pieces,
}: RemoveCapturedPieceProps): CapturedState[] => {
  if (
    pieces[state.index].pieceState.piece.kind !== state.pieceState.piece.kind ||
    pieces[state.index].index !== state.index
  ) {
    throw new Error(
      `invalid captured piece state: ${state} stateで指定された持ち駒は存在しません。`,
    )
  }
  return pieces
    .filter((_, index) => index !== state.index)
    .map((piece, i) => ({ ...piece, index: i }))
}

type PushCapturedPieceProps = {
  state: CapturedState
  pieces: CapturedState[]
}

// 持ち駒を追加する
export const pushCapturedPiece = ({ state, pieces }: PushCapturedPieceProps): CapturedState[] => {
  return sortCapturedPieces([...pieces, { ...state }])
}

const PIECE_KIND_ORDER: PieceKind[] = ['fu', 'kyo', 'kei', 'gin', 'kin', 'kaku', 'hisha', 'gyoku']

// pieceKindの順番に並べる
export const sortCapturedPieces = (capturedPieces: CapturedState[]): CapturedState[] => {
  const sortedPieces = capturedPieces.sort((a, b) => {
    const aIndex = PIECE_KIND_ORDER.indexOf(a.pieceState.piece.kind)
    const bIndex = PIECE_KIND_ORDER.indexOf(b.pieceState.piece.kind)
    return aIndex - bIndex
  })

  // indexを付け替える
  return sortedPieces.map((piece, index) => ({ ...piece, index }))
}
