import { Turn } from '@/domain'
import { changeTurn } from '@/domain/turn'

type Props = {
  turn: Turn
  updateTurn: (turn: Turn) => void
}

export const endTurn = ({ turn, updateTurn }: Props) => {
  updateTurn(changeTurn(turn))
}
