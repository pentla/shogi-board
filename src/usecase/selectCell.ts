import { secondPlayerPieceState, firstPlayerPieceState } from '@/domain/pieceState'
import { CellState, Game } from '@/domain'
import { moveCell, putCapturedCell } from '@/domain/board'
import { endTurn } from './endTurn'
import { pushCapturedPiece, removeCapturedPiece } from '@/domain/capturedPiece'
import { clearSelectedPiece } from './clearSelectedPiece'
import { getMovableCoordinates } from '@/domain/movableRule'
import { isMovable } from '@/domain/coordinates'

type SelectPieceProps = {
  cell: CellState
  game: Game
  updateBoard: (board: Game['board']) => void
  updateTurn: (turn: Game['turn']) => void
  updateSelectedPiece: (piece: Game['selectedPiece']) => void
  updateSelectedCapturedPiece: (piece: Game['selectedCapturedPiece']) => void
  updateFirstPlayerCapturedPiece: (pieces: Game['firstPlayerCapturedPieces']) => void
  updateSecondPlayerCapturedPiece: (pieces: Game['secondPlayerCapturedPieces']) => void
  updateMovablePositions: (movablePositions: Game['movablePositions']) => void
}

/*
 * セルを選択した際の処理。駒の選択・取る処理などが含まれる。
 */
export const selectCell = ({
  cell,
  game: {
    turn,
    board,
    selectedPiece,
    selectedCapturedPiece,
    firstPlayerCapturedPieces,
    secondPlayerCapturedPieces,
    movablePositions,
  },
  updateTurn,
  updateBoard,
  updateSelectedPiece,
  updateSelectedCapturedPiece,
  updateFirstPlayerCapturedPiece,
  updateSecondPlayerCapturedPiece,
  updateMovablePositions,
}: SelectPieceProps) => {
  // 選択された駒がなく、何もない場所を選択した場合はなにもしない
  if (!cell.pieceState && !selectedPiece && !selectedCapturedPiece) {
    return
  }

  // 選択された駒がなく、自分の駒がある場所を選択した場合は選択する。
  if (cell.pieceState && !selectedPiece && !selectedCapturedPiece) {
    if (turn === cell.pieceState.owner) {
      updateSelectedPiece({ ...cell })
      updateMovablePositions(getMovableCoordinates({ board, selectedPiece: cell }))
    }
    return
  }

  // 選択された駒がある
  if (selectedPiece?.pieceState) {
    // 何もない場所を選択した場合
    if (!cell.pieceState) {
      // 行けない場所であれば選択を解除する
      if (!isMovable(movablePositions, { x: cell.x, y: cell.y })) {
        clearSelectedPiece({
          updateSelectedPiece,
          updateSelectedCapturedPiece,
          updateMovablePositions,
        })
        return
      }
      // 行ける場所であれば置く
      updateBoard(
        moveCell({ board, destinationX: cell.x, destinationY: cell.y, sourceCell: selectedPiece }),
      )
      clearSelectedPiece({
        updateSelectedPiece,
        updateSelectedCapturedPiece,
        updateMovablePositions,
      })
      endTurn({ turn, updateTurn })

      // 行けない場所であれば解除する
      return
    }

    // 駒がある場所を選択した場合
    if (cell.pieceState) {
      // 同じ場所を選んだ場合は解除する
      if (selectedPiece.x === cell.x && selectedPiece.y === cell.y) {
        updateSelectedPiece(null)
        return
      }

      // 敵の駒がある場合は取る
      if (cell.pieceState.owner !== selectedPiece.pieceState?.owner) {
        if (turn === 1) {
          updateFirstPlayerCapturedPiece(
            pushCapturedPiece({
              state: {
                owner: 1,
                pieceState: firstPlayerPieceState(cell.pieceState.piece),
                index: firstPlayerCapturedPieces.length,
              },
              pieces: firstPlayerCapturedPieces,
            }),
          )
        } else {
          updateSecondPlayerCapturedPiece(
            pushCapturedPiece({
              state: {
                owner: 2,
                pieceState: secondPlayerPieceState(cell.pieceState.piece),
                index: secondPlayerCapturedPieces.length,
              },
              pieces: secondPlayerCapturedPieces,
            }),
          )
        }
        updateBoard(
          moveCell({
            board,
            destinationX: cell.x,
            destinationY: cell.y,
            sourceCell: selectedPiece,
          }),
        )
        clearSelectedPiece({
          updateSelectedPiece,
          updateSelectedCapturedPiece,
          updateMovablePositions,
        })
        endTurn({ turn, updateTurn })
        return
      }
    }
    return
  }

  if (selectedCapturedPiece) {
    // 何もない場所を選択した場合
    if (!cell.pieceState) {
      // 行けない場所であれば選択を解除する
      if (!isMovable(movablePositions, { x: cell.x, y: cell.y })) {
        clearSelectedPiece({
          updateSelectedPiece,
          updateSelectedCapturedPiece,
          updateMovablePositions,
        })
        return
      }
      // 行ける場所であれば置く
      updateBoard(
        putCapturedCell({
          board,
          destinationX: cell.x,
          destinationY: cell.y,
          capturedState: selectedCapturedPiece,
        }),
      )
      if (turn === 1) {
        updateFirstPlayerCapturedPiece(
          removeCapturedPiece({
            state: selectedCapturedPiece,
            pieces: firstPlayerCapturedPieces,
          }),
        )
      } else {
        updateSecondPlayerCapturedPiece(
          removeCapturedPiece({
            state: selectedCapturedPiece,
            pieces: secondPlayerCapturedPieces,
          }),
        )
      }
      clearSelectedPiece({
        updateSelectedPiece,
        updateSelectedCapturedPiece,
        updateMovablePositions,
      })
      endTurn({ turn, updateTurn })
      return
    }
  }
}
