import { CellState, Game } from "@/domain";
import { moveCell } from "@/domain/board";

type SelectPieceProps = {
  cell: CellState
  turn: Game['turn']
  board: Game['board']
  updateBoard: (board: Game['board']) => void
  selectedPiece: Game['selectedPiece']
  updateSelectedPiece: (piece: Game['selectedPiece']) => void
}

export const selectCell = ({ cell, turn, board, selectedPiece, updateBoard, updateSelectedPiece }: SelectPieceProps) => {
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
  }

  // 選択された駒があり、駒がある場所を選択した場合
  if (selectedPiece && cell.pieceState) {

    console.log(selectedPiece, cell)
    // 同じ場所を選んだ場合は解除する
    if (selectedPiece.x === cell.x && selectedPiece.y === cell.y) {
      updateSelectedPiece(null)
      return
    }

    // 敵の駒がある場合は取る
    if (cell.pieceState.owner !== selectedPiece.pieceState?.owner) {
      // TODO: 駒台に置く処理
      updateBoard(moveCell({ board, destinationX: cell.x, destinationY: cell.y, sourceCell: selectedPiece }))
      updateSelectedPiece(null)
      return
    }
  }
}