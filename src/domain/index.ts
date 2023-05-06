export type Game = {
  /*
    版の状態。9*9の二次元配列で表現する。
    board[0][0]は用語上では９一、そこからひとつ右のマスはboard[0][1], 9二となる。
  */
  board: Board

  // 現在の手番。先手=1 or 後手=2
  turn: Turn

  /*
   選択中の駒。
   盤にある駒を選択した際にcellStateが入る。
   未選択状態、または駒を指したあとはnullになる
  */
  selectedPiece: CellState | null

  /*
    選択中の持ち駒。
    持ち駒を選択した際にcapturedStateが入る。
    未選択状態、または駒を指したあとはnullになる
  */
  selectedCapturedPiece: CapturedState | null

  // 先手の持ち駒
  firstPlayerCapturedPieces: CapturedState[]

  // 後手の持ち駒
  secondPlayerCapturedPieces: CapturedState[]

  // 駒を選択後、置ける場所
  movablePositions: Coordinate[]
}

export type Board = CellState[][]

/*
  ボード上の各マスの状態を表す。
*/
export type CellState = {
  // マスのx座標(0~8)
  x: number

  // マスのy座標(0~8)
  y: number

  // マスに存在する駒の状態。存在しなければnull
  pieceState: PieceState | null
}

/*
  持ち駒の状態を表す。
  index: 持ち駒が何番目に存在するか
  pieceState: 駒の状態
*/
export type CapturedState = {
  // 持ち主(先手 or 後手)
  owner: Turn

  // 持ち駒が何番目に存在するか
  index: number

  // 駒の状態
  pieceState: PieceState
}

/*
  駒の状態を表す。
*/
export type PieceState = {
  // 駒の種類
  piece: Piece

  // 成っているかどうか
  isPromoted: boolean

  // 持ち主(先手 or 後手)
  owner: Turn
}

/*
  駒の状態を表す。
*/
export type Piece = {
  kind: PieceKind

  // 駒の画像
  image: string

  // 成った時の駒の画像
  promotedImage: string
}

// 駒の種類。歩、香、桂、銀、金、角、飛、玉。
export type PieceKind = 'fu' | 'kyo' | 'kei' | 'gin' | 'kin' | 'kaku' | 'hisha' | 'gyoku'

// 先手=1 or 後手=2
export type Turn = 1 | 2

/*
 盤上の座標を指す。取ることのできる値は以下の通り。
 boardの配列を直接いじるとバグの元になるので、この型を使って座標を指定すること。
 0 1 2 3 4 5 6 7 8 (x)
 1
 2
 3
 4
 5
 6
 7
 8
 (y)
*/
export type Coordinate = {
  x: number
  y: number
}
