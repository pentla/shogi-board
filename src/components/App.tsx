import React from 'react'
import { Board } from './Board'
import { Modal } from './Modal'
import './style.css'

export const App: React.FC = () => {
  return (
    <div>
      <Board />
      <Modal />
    </div>
  )
}
