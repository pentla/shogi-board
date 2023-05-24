import { Turn } from '../entity'

export const changeTurn = (turn: Turn): Turn => {
  if (turn === 1) return 2
  if (turn === 2) return 1
  throw new Error('Turn is not 1 or 2')
}
