import { CellState, Game, PieceState } from "@/domain";
import { moveCell } from "@/domain/board";

type SelectPieceProps = {
  cell: CellState
  turn: Game['turn']
  board: Game['board']
  selectedPiece: Game['selectedPiece']
  updateBoard: (board: Game['board']) => void
  changeTurn: (turn: Game['turn']) => void
  updateSelectedPiece: (piece: Game['selectedPiece']) => void
  pushFirstPlayerCapturedPiece: (pieceState: PieceState) => void
  pushSecondPlayerCapturedPiece: (pieceState: PieceState) => void
}

export const selectCell = ({ cell, turn, board, changeTurn, selectedPiece, updateBoard, updateSelectedPiece, pushFirstPlayerCapturedPiece, pushSecondPlayerCapturedPiece }: SelectPieceProps) => {
  // 選択された駒がなく、何もない場所を選択した場合はなにもしない
  if (!cell.pieceState && !selectedPiece) {
    return
  }

  // 選択された駒がなく、自分の駒がある場所を選択した場合は選択する。
  if (cell.pieceState && !selectedPiece) {
    console.log('update')
    if (turn === cell.pieceState.owner) {
      updateSelectedPiece({ ...cell })
    }
    return
  }

  // 選択された駒があり、何もない場所を選択した場合
  if (selectedPiece && !cell.pieceState) {
    // 行ける場所であれば置く
    // TODO: 行けるかどうかの判定
    updateBoard(moveCell({ board, destinationX: cell.x, destinationY: cell.y, sourceCell: selectedPiece }))
    // 行けない場所であれば解除する
    updateSelectedPiece(null)
    changeTurn(turn)
    return
  }

  // 選択された駒があり、駒がある場所を選択した場合
  if (selectedPiece && cell.pieceState) {

    // 同じ場所を選んだ場合は解除する
    if (selectedPiece.x === cell.x && selectedPiece.y === cell.y) {
      updateSelectedPiece(null)
      return
    }

    // 敵の駒がある場合は取る
    if (cell.pieceState.owner !== selectedPiece.pieceState?.owner) {
      if (turn === 1) {
        pushFirstPlayerCapturedPiece(cell.pieceState)
      } else {
        pushSecondPlayerCapturedPiece(cell.pieceState)
      }
      updateBoard(moveCell({ board, destinationX: cell.x, destinationY: cell.y, sourceCell: selectedPiece }))
      updateSelectedPiece(null)
      changeTurn(turn)
      return
    }
  }
}