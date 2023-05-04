export type Game = {

  /*
    版の状態。9*9の二次元配列で表現する。
    board[0][0]は用語上では９一、そこからひとつ右のマスはboard[0][1], 9二となる。
  */
  board: Position

  /*
    現在の手番。先手=1 or 後手=2
  */
  turn: Turn

  // 先手の持ち駒
  firstPlayerCapturedPieces: PieceState[]

  // 後手の持ち駒
  secondPlayerCapturedPieces: PieceState[]
}

export type Position = CellState[][]


/*
  ボード上の各マスの状態を表す。
  x: マスのx座標(0~8)
  y: マスのy座標(0~8)
  piece: マスに存在するコマの状態。存在しなければnull
*/
export type CellState = {
  x: number
  y: number
  pieceState: PieceState | null
}

/*
  コマの状態を表す。
*/
export type PieceState = {
  // コマの種類
  piece: Piece

  // 成っているかどうか
  isPromoted: boolean

  // 選択されているかどうか
  isSelected: boolean

  // 持ち主(先手 or 後手)
  owner: Turn
}

/*
  歩、香、桂、銀、金、角、飛、玉のコマの状態を表す。
*/
export type Piece = {
  kind: PieceKind

  // 駒の画像
  image: string

  // 成った時の駒の画像
  promotedImage: string
}

export type PieceKind = 'fu' | 'kyo' | 'kei' | 'gin' | 'kin' | 'kaku' | 'hisha' | 'gyoku'

// 先手=1 or 後手=2
export type Turn = 1 | 2