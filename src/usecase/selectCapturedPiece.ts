import { CapturedState, Game } from "@/domain"

type Props = {
  turn: Game['turn'],
  capturedPiece: CapturedState,
  selectedPiece: Game['selectedPiece'],
  updateSelectedPiece: (piece: Game['selectedPiece']) => void,
  updateSelectedCapturedPiece: (piece: Game['selectedCapturedPiece']) => void
}

export const selectCapturedPiece = ({ turn, capturedPiece, selectedPiece, updateSelectedPiece, updateSelectedCapturedPiece }: Props) => {
  // 自分の持っている駒でない場合はなにもしない
  if (turn !== capturedPiece?.owner) return

  // 選択中の駒を持っている駒台の駒を選択した場合は、選択中の駒をnullにする
  if (selectedPiece) {
    updateSelectedPiece(null)
    return
  }

  updateSelectedCapturedPiece(capturedPiece)
}