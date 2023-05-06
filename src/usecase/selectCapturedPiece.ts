import { CapturedState, Game } from '@/domain'
import { clearSelectedPiece } from './clearSelectedPiece'

type Props = {
  turn: Game['turn']
  capturedPiece: CapturedState
  selectedPiece: Game['selectedPiece']
  updateSelectedPiece: (piece: Game['selectedPiece']) => void
  updateSelectedCapturedPiece: (piece: Game['selectedCapturedPiece']) => void
  updateMovablePositions: (movablePositions: Game['movablePositions']) => void
}

export const selectCapturedPiece = ({
  turn,
  capturedPiece,
  selectedPiece,
  updateSelectedPiece,
  updateSelectedCapturedPiece,
  updateMovablePositions,
}: Props) => {
  // 自分の持っている駒でない場合はなにもしない
  if (turn !== capturedPiece?.owner) return

  // 選択中の駒を持っている場合は、選択中の駒をnullにする
  if (selectedPiece) {
    clearSelectedPiece({ updateSelectedPiece, updateSelectedCapturedPiece, updateMovablePositions })
    return
  }

  updateSelectedCapturedPiece(capturedPiece)
}
