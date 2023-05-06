import { Board, Coordinate, Turn } from '.'

// 前に進む
export const moveFront = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  if (turn === 1) {
    if (y > 0) return [{ x, y: y - 1 }]
  }
  if (turn === 2) {
    if (y < 8) return [{ x, y: y + 1 }]
  }
  return []
}

// 後ろに進む
export const moveBack = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  if (turn === 1) {
    if (y < 8) return [{ x, y: y + 1 }]
  }
  if (turn === 2) {
    if (y > 0) return [{ x, y: y - 1 }]
  }
  return []
}

// 右に進む
export const moveRight = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  if (turn === 1) {
    if (x < 8) return [{ x: x + 1, y }]
  }
  if (turn === 2) {
    if (x > 0) return [{ x: x - 1, y }]
  }
  return []
}

// 左に進む
export const moveLeft = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  if (turn === 1) {
    if (x > 0) return [{ x: x - 1, y }]
  }
  if (turn === 2) {
    if (x < 8) return [{ x: x + 1, y }]
  }
  return []
}

// 右斜め前
export const moveRightFront = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  if (turn === 1) {
    if (x < 8 && y > 0) return [{ x: x + 1, y: y - 1 }]
  }
  if (turn === 2) {
    if (x > 0 && y < 8) return [{ x: x - 1, y: y + 1 }]
  }
  return []
}

// 右斜め後ろ
export const moveRightBack = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  if (turn === 1) {
    if (x < 8 && y < 8) return [{ x: x + 1, y: y + 1 }]
  }
  if (turn === 2) {
    if (x > 0 && y > 0) return [{ x: x - 1, y: y - 1 }]
  }
  return []
}

// 左斜め前
export const moveLeftFront = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  if (turn === 1) {
    if (x > 0 && y > 0) return [{ x: x - 1, y: y - 1 }]
  }
  if (turn === 2) {
    if (x < 8 && y < 8) return [{ x: x + 1, y: y + 1 }]
  }
  return []
}

// 左斜め後ろ
export const moveLeftBack = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  if (turn === 1) {
    if (x > 0 && y < 8) return [{ x: x - 1, y: y + 1 }]
  }
  if (turn === 2) {
    if (x > 0 && y > 0) return [{ x: x - 1, y: y - 1 }]
  }
  return []
}

// 桂馬の動き
export const moveKeima = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  const coordinates: Coordinate[] = []
  if (turn === 1) {
    if (x > 0 && y > 1) coordinates.push({ x: x - 1, y: y - 2 })
    if (x < 8 && y > 1) coordinates.push({ x: x + 1, y: y - 2 })
  }
  if (turn === 2) {
    if (x > 0 && y < 7) coordinates.push({ x: x - 1, y: y + 2 })
    if (x < 8 && y < 7) coordinates.push({ x: x + 1, y: y + 2 })
  }
  return coordinates
}

// まっすぐ後ろに進む動き
export const moveBackStraight = (turn: Turn, { x, y }: Coordinate, board: Board): Coordinate[] => {
  const coordinates: Coordinate[] = []
  if (turn === 1) {
    for (let i = y + 1; i < 9; i++) {
      coordinates.push({ x, y: i })
      if (board[i][x].pieceState) break
    }
  }
  if (turn === 2) {
    for (let i = y - 1; i >= 0; i--) {
      coordinates.push({ x, y: i })
      if (board[i][x].pieceState) break
    }
  }
  return coordinates
}

// まっすぐ前に進む動き(飛車、龍)
export const moveFrontStraight = (turn: Turn, { x, y }: Coordinate, board: Board): Coordinate[] => {
  const coordinates: Coordinate[] = []
  if (turn === 1) {
    for (let i = y - 1; i >= 0; i--) {
      coordinates.push({ x, y: i })
      if (board[i][x].pieceState) break
    }
  }
  if (turn === 2) {
    for (let i = y + 1; i < 9; i++) {
      coordinates.push({ x, y: i })
      if (board[i][x].pieceState) break
    }
  }
  return coordinates
}

// まっすぐ右に進む動き(飛車、龍)
export const moveRightStraight = (turn: Turn, { x, y }: Coordinate, board: Board): Coordinate[] => {
  const coordinates: Coordinate[] = []
  if (turn === 1) {
    for (let i = x + 1; i < 9; i++) {
      coordinates.push({ x: i, y })
      if (board[y][i].pieceState) break
    }
  }
  if (turn === 2) {
    for (let i = x - 1; i >= 0; i--) {
      coordinates.push({ x: i, y })
      if (board[y][i].pieceState) break
    }
  }
  return coordinates
}

// まっすぐ左に進む動き(飛車、龍)
export const moveLeftStraight = (turn: Turn, { x, y }: Coordinate, board: Board): Coordinate[] => {
  const coordinates: Coordinate[] = []
  if (turn === 1) {
    for (let i = x - 1; i >= 0; i--) {
      coordinates.push({ x: i, y })
      if (board[y][i].pieceState) break
    }
  }
  if (turn === 2) {
    for (let i = x + 1; i < 9; i++) {
      coordinates.push({ x: i, y })
      if (board[y][i].pieceState) break
    }
  }
  return coordinates
}

// 斜めに進む動き(角、馬)
export const moveDiagonal = (turn: Turn, { x, y }: Coordinate, board: Board): Coordinate[] => {
  const coordinates: Coordinate[] = []
  if (turn === 1) {
    for (let i = 1; i < 9; i++) {
      if (x + i > 8 || y + i > 8) break
      coordinates.push({ x: x + i, y: y + i })
      if (board[y + i][x + i].pieceState) break
    }
    for (let i = 1; i < 9; i++) {
      if (x - i < 0 || y + i > 8) break
      coordinates.push({ x: x - i, y: y + i })
      if (board[y + i][x - i].pieceState) break
    }
    for (let i = 1; i < 9; i++) {
      if (x + i > 8 || y - i < 0) break
      coordinates.push({ x: x + i, y: y - i })
      if (board[y - i][x + i].pieceState) break
    }
    for (let i = 1; i < 9; i++) {
      if (x - i < 0 || y - i < 0) break
      coordinates.push({ x: x - i, y: y - i })
      if (board[y - i][x - i].pieceState) break
    }
  }
  if (turn === 2) {
    for (let i = 1; i < 9; i++) {
      if (x + i > 8 || y + i > 8) break
      coordinates.push({ x: x + i, y: y + i })
      if (board[y + i][x + i].pieceState) break
    }
    for (let i = 1; i < 9; i++) {
      if (x - i < 0 || y + i > 8) break
      coordinates.push({ x: x - i, y: y + i })
      if (board[y + i][x - i].pieceState) break
    }
    for (let i = 1; i < 9; i++) {
      if (x + i > 9 || y - i < 0) break
      coordinates.push({ x: x + i, y: y - i })
      if (board[y - i][x + i].pieceState) break
    }
    for (let i = 1; i < 9; i++) {
      if (x - i < 0 || y - i < 0) break
      coordinates.push({ x: x - i, y: y - i })
      if (board[y - i][x - i].pieceState) break
    }
  }
  return coordinates
}
