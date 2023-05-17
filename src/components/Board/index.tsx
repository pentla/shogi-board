import React from 'react'
import BoardImage from '@/assets/img/sg_ban.jpg'
import { CapturedPieceBoard } from './CapturedPieceBoard'
import { MainBoard } from './MainBoard'
import { TurnText } from './TurnText'
import { useShogiGame } from './useShogiGame'

export const Board: React.FC = () => {
  const {
    board,
    turn,
    firstPlayerCapturedPieces,
    secondPlayerCapturedPieces,
    selectedCapturedPiece,
    onSelectCell,
    onSelectCapturedPiece,
    selectedPiece,
    movablePositions,
  } = useShogiGame()
  const isFirstPlayerTurn = turn === 1
  return (
    <div
      className='relative'
      style={{ width: 810, height: 540, backgroundImage: `url(${BoardImage})` }}
    >
      <TurnText isTurn={!isFirstPlayerTurn} label='△後手' style={{ top: 60, right: 54 }} />
      <CapturedPieceBoard
        pieces={firstPlayerCapturedPieces}
        isTurn={turn === 1}
        selectedCapturedPiece={selectedCapturedPiece}
        style={{ top: 334, right: 104 }}
        onClick={onSelectCapturedPiece}
      />
      <MainBoard
        position={board}
        turn={turn}
        onSelectCell={onSelectCell}
        selectedPiece={selectedPiece}
        movablePositions={movablePositions}
      />
      <TurnText isTurn={isFirstPlayerTurn} label='▲先手' style={{ bottom: 55, left: 53 }} />
      <CapturedPieceBoard
        pieces={secondPlayerCapturedPieces}
        selectedCapturedPiece={selectedCapturedPiece}
        isTurn={turn === 2}
        style={{ top: 70, left: 104 }}
        onClick={onSelectCapturedPiece}
      />
    </div>
  )
}
