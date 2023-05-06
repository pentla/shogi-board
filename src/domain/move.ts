import { Coordinate, Turn } from '.'

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
    if (x > 0 && y > 0) return [{ x: x - 1, y: y - 1 }]
  }
  if (turn === 2) {
    if (x < 8 && y < 8) return [{ x: x + 1, y: y + 1 }]
  }
  return []
}

// 桂馬の動き
export const moveKeima = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  const coordinates: Coordinate[] = []
  if (turn === 1) {
    if (x > 0 && y < 7) coordinates.push({ x: x - 1, y: y + 2 })
    if (x < 8 && y < 7) coordinates.push({ x: x + 1, y: y + 2 })
  }
  if (turn === 2) {
    if (x > 0 && y > 1) coordinates.push({ x: x - 1, y: y - 2 })
    if (x < 8 && y > 1) coordinates.push({ x: x + 1, y: y - 2 })
  }
  return coordinates
}

// まっすぐ前に進む動き
export const moveFrontStraight = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  const coordinates: Coordinate[] = []
  if (turn === 1) {
    for (let i = y + 1; i < 9; i++) {
      coordinates.push({ x, y: i })
    }
  }
  if (turn === 2) {
    for (let i = y - 1; i >= 0; i--) {
      coordinates.push({ x, y: i })
    }
  }
  return coordinates
}

// まっすぐ後ろに進む動き(飛車、龍)
export const moveBackStraight = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  const coordinates: Coordinate[] = []
  if (turn === 1) {
    for (let i = y - 1; i >= 0; i--) {
      coordinates.push({ x, y: i })
    }
  }
  if (turn === 2) {
    for (let i = y + 1; i < 9; i++) {
      coordinates.push({ x, y: i })
    }
  }
  return coordinates
}

// まっすぐ右に進む動き(飛車、龍)
export const moveRightStraight = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  const coordinates: Coordinate[] = []
  if (turn === 1) {
    for (let i = x + 1; i < 9; i++) {
      coordinates.push({ x: i, y })
    }
  }
  if (turn === 2) {
    for (let i = x - 1; i >= 0; i--) {
      coordinates.push({ x: i, y })
    }
  }
  return coordinates
}

// まっすぐ左に進む動き(飛車、龍)
export const moveLeftStraight = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  const coordinates: Coordinate[] = []
  if (turn === 1) {
    for (let i = x - 1; i >= 0; i--) {
      coordinates.push({ x: i, y })
    }
  }
  if (turn === 2) {
    for (let i = x + 1; i < 9; i++) {
      coordinates.push({ x: i, y })
    }
  }
  return coordinates
}

// 斜めに進む動き(角、馬)
export const moveDiagonal = (turn: Turn, { x, y }: Coordinate): Coordinate[] => {
  const coordinates: Coordinate[] = []
  if (turn === 1) {
    for (let i = 1; i < 9; i++) {
      if (x + i < 9 && y + i < 9) coordinates.push({ x: x + i, y: y + i })
      if (x - i >= 0 && y + i < 9) coordinates.push({ x: x - i, y: y + i })
      if (x + i < 9 && y - i >= 0) coordinates.push({ x: x + i, y: y - i })
      if (x - i >= 0 && y - i >= 0) coordinates.push({ x: x - i, y: y - i })
    }
  }
  if (turn === 2) {
    for (let i = 1; i < 9; i++) {
      if (x + i < 9 && y + i < 9) coordinates.push({ x: x + i, y: y + i })
      if (x - i >= 0 && y + i < 9) coordinates.push({ x: x - i, y: y + i })
      if (x + i < 9 && y - i >= 0) coordinates.push({ x: x + i, y: y - i })
      if (x - i >= 0 && y - i >= 0) coordinates.push({ x: x - i, y: y - i })
    }
  }
  return coordinates
}
