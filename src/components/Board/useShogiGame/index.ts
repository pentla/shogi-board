import { CellState, Game, Position, Turn } from "@/domain"
import { initGame } from "@/usecase/init"
import { selectCell } from "@/usecase/select"
import { useCallback, useEffect, useState } from "react"

export const useShogiGame = () => {
  // 各変数の説明については domain/index.tsを参照。
  const [board, setBoard] = useState<Position>([])
  const [turn, setTurn] = useState<Turn>(1)
  const [firstPlayerPieces, setFirstPlayerPieces] = useState<Game['firstPlayerCapturedPieces']>([])
  const [secondPlayerPieces, setSecondPlayerPieces] = useState<Game['secondPlayerCapturedPieces']>([])
  const [selectedPiece, setSelectedPiece] = useState<Game['selectedPiece']>(null)

  // 将棋ゲームの初期化
  useEffect(() => {
    const game = initGame()
    setBoard(game.board)
    setTurn(game.turn)
    setFirstPlayerPieces(game.firstPlayerCapturedPieces)
    setSecondPlayerPieces(game.secondPlayerCapturedPieces)
    setSelectedPiece(game.selectedPiece)
  }, [])

  // セルを選択した際の処理
  const onSelectCell = useCallback((cell: CellState) => {
    selectCell({ cell, board, turn, updateBoard: (board) => setBoard(board), selectedPiece: selectedPiece, updateSelectedPiece: (piece) => setSelectedPiece(piece) })
  }, [board, turn, selectedPiece])

  return { board, turn, secondPlayerPieces, firstPlayerPieces, selectedPiece, onSelectCell }
}