import { CapturedState, CellState, Game, Position, Turn } from '@/domain'
import { initGame } from '@/usecase/init'
import { selectCapturedPiece } from '@/usecase/selectCapturedPiece'
import { selectCell } from '@/usecase/selectCell'
import { useCallback, useEffect, useState } from 'react'

export const useShogiGame = () => {
  // 各変数の説明と役割については domain/index.tsを参照。
  const [board, setBoard] = useState<Position>([])
  const [turn, setTurn] = useState<Turn>(1)
  const [firstPlayerCapturedPieces, setfirstPlayerCapturedPieces] = useState<
    Game['firstPlayerCapturedPieces']
  >([])
  const [secondPlayerCapturedPieces, setSecondPlayerCapturedPieces] = useState<
    Game['secondPlayerCapturedPieces']
  >([])
  const [selectedPiece, setSelectedPiece] = useState<Game['selectedPiece']>(null)
  const [selectedCapturedPiece, setSelectedCapturedPiece] =
    useState<Game['selectedCapturedPiece']>(null)

  // 将棋ゲームの初期化
  useEffect(() => {
    const game = initGame()
    setBoard(game.board)
    setTurn(game.turn)
    setfirstPlayerCapturedPieces(game.firstPlayerCapturedPieces)
    setSecondPlayerCapturedPieces(game.secondPlayerCapturedPieces)
    setSelectedPiece(game.selectedPiece)
  }, [])

  // セルを選択した際の処理
  const onSelectCell = useCallback(
    (cell: CellState) => {
      selectCell({
        cell,
        game: {
          board,
          turn,
          selectedPiece,
          selectedCapturedPiece,
          firstPlayerCapturedPieces,
          secondPlayerCapturedPieces,
        },
        updateBoard: setBoard,
        updateTurn: setTurn,
        updateSelectedPiece: setSelectedPiece,
        updateSelectedCapturedPiece: setSelectedCapturedPiece,
        updateFirstPlayerCapturedPiece: setfirstPlayerCapturedPieces,
        updateSecondPlayerCapturedPiece: setSecondPlayerCapturedPieces,
      })
    },
    [
      board,
      turn,
      selectedPiece,
      selectedCapturedPiece,
      firstPlayerCapturedPieces,
      secondPlayerCapturedPieces,
    ],
  )

  const onSelectCapturedPiece = useCallback(
    (capturedPiece: CapturedState) => {
      selectCapturedPiece({
        turn,
        capturedPiece,
        selectedPiece,
        updateSelectedPiece: setSelectedPiece,
        updateSelectedCapturedPiece: setSelectedCapturedPiece,
      })
    },
    [turn, selectedPiece],
  )

  return {
    board,
    turn,
    firstPlayerCapturedPieces,
    secondPlayerCapturedPieces,
    selectedPiece,
    selectedCapturedPiece,
    onSelectCell,
    onSelectCapturedPiece,
  }
}
