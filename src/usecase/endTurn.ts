import { Turn } from '@/domain/entity'
import { changeTurn } from '@/domain/service/turn'

type Props = {
  turn: Turn
  updateTurn: (turn: Turn) => void
}

export const endTurn = ({ turn, updateTurn }: Props) => {
  updateTurn(changeTurn(turn))
}
