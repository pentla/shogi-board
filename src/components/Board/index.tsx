import React from 'react'
import BoardImage from '@/assets/img/sg_ban.jpg'
import { CapturedPieceBoard } from './CapturedPieceBoard'
import { MainBoard } from './MainBoard'
import { TurnText } from './TurnText'
import { initBoardPosition } from '@/usecase/init'

export const Board: React.FC = () => {
  const boardPosition = initBoardPosition()
  return (
    <div className="relative" style={{ width: 810, height: 540, backgroundImage: `url(${BoardImage})` }}>
      <TurnText isTurn={true} label="▲先手" style={{ bottom: 55, left: 53 }} />
      <CapturedPieceBoard style={{ top: 334, right: 104 }} />
      <MainBoard position={boardPosition} />
      <CapturedPieceBoard style={{ top: 70, left: 104 }} />
      <TurnText isTurn={false} label="△後手" style={{ top: 60, right: 54 }} />
    </div>
  )
}
