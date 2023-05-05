import { CellState, Game, PieceState, Position, Turn } from "@/domain"
import { changeTurn } from "@/domain/turn"
import { initGame } from "@/usecase/init"
import { selectCell } from "@/usecase/select"
import { useCallback, useEffect, useState } from "react"

export const useShogiGame = () => {
  // 各変数の説明と役割については domain/index.tsを参照。
  const [board, setBoard] = useState<Position>([])
  const [turn, setTurn] = useState<Turn>(1)
  const [firstPlayerCapturedPieces, setfirstPlayerCapturedPieces] = useState<Game['firstPlayerCapturedPieces']>([])
  const [secondPlayerCapturedPieces, setSecondPlayerCapturedPieces] = useState<Game['secondPlayerCapturedPieces']>([])
  const [selectedPiece, setSelectedPiece] = useState<Game['selectedPiece']>(null)

  // 将棋ゲームの初期化
  useEffect(() => {
    const game = initGame()
    setBoard(game.board)
    setTurn(game.turn)
    setfirstPlayerCapturedPieces(game.firstPlayerCapturedPieces)
    setSecondPlayerCapturedPieces(game.secondPlayerCapturedPieces)
    setSelectedPiece(game.selectedPiece)
  }, [])

  // 駒台に置く処理
  const pushFirstPlayerCapturedPiece = useCallback((pieceState: PieceState) => {
    setfirstPlayerCapturedPieces(prev => [...prev, pieceState])
  }, [])
  const pushSecondPlayerCapturedPiece = useCallback((pieceState: PieceState) => {
    setSecondPlayerCapturedPieces(prev => [...prev, pieceState])
  }, [])

  const setChangeTurn = useCallback((turn: Turn) => {
    console.log('changeturn')
    setTurn(changeTurn(turn))
  }, [])

  // セルを選択した際の処理
  const onSelectCell = useCallback((cell: CellState) => {
    selectCell({
      cell, board, turn,
      pushFirstPlayerCapturedPiece,
      pushSecondPlayerCapturedPiece,
      updateBoard: (board) => setBoard(board),
      selectedPiece: selectedPiece,
      changeTurn: setChangeTurn,
      updateSelectedPiece: (piece) => setSelectedPiece(piece)
    })
  }, [board, turn, selectedPiece, setChangeTurn, pushFirstPlayerCapturedPiece, pushSecondPlayerCapturedPiece])

  return { board, turn, secondPlayerCapturedPieces, firstPlayerCapturedPieces, selectedPiece, onSelectCell }
}