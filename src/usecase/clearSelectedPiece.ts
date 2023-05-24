import { Game } from '@/domain/entity'

type ClearSelectedProps = {
  updateSelectedPiece: (piece: Game['selectedPiece']) => void
  updateSelectedCapturedPiece: (piece: Game['selectedCapturedPiece']) => void
  updateMovablePositions: (movablePositions: Game['movablePositions']) => void
}

// 持ち駒の状態、選択状態をクリアする
export const clearSelectedPiece = ({
  updateSelectedPiece,
  updateSelectedCapturedPiece,
  updateMovablePositions,
}: ClearSelectedProps) => {
  updateSelectedPiece(null)
  updateSelectedCapturedPiece(null)
  updateMovablePositions([])
}
