import { Game, Turn } from "@/domain"
import { changeTurn } from "@/domain/turn"

type Props = {
  turn: Turn
  updateSelectedPiece: (piece: Game['selectedPiece']) => void
  updateSelectedCapturedPiece: (piece: Game['selectedCapturedPiece']) => void
  updateTurn: (turn: Turn) => void
}

export const endTurn = ({ turn, updateSelectedPiece, updateSelectedCapturedPiece, updateTurn }: Props) => {
  updateSelectedPiece(null)
  updateSelectedCapturedPiece(null)
  updateTurn(changeTurn(turn))
}