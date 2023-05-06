import { Coordinate } from '.'

/* その地点まで移動できるかどうか */
export const isMovable = (coordinates: Coordinate[], destination: Coordinate): boolean => {
  return coordinates.some((coord) => {
    return coord.x === destination.x && coord.y === destination.y
  })
}
