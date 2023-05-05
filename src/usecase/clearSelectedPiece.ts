import { Game } from '@/domain'

type ClearSelectedProps = {
  updateSelectedPiece: (piece: Game['selectedPiece']) => void
  updateSelectedCapturedPiece: (piece: Game['selectedCapturedPiece']) => void
}

// 持ち駒の状態、選択状態をクリアする
export const clearSelectedPiece = ({
  updateSelectedPiece,
  updateSelectedCapturedPiece,
}: ClearSelectedProps) => {
  updateSelectedPiece(null)
  updateSelectedCapturedPiece(null)
}
