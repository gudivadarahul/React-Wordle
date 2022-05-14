import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({solution}) {
  const { currentGuess, handleKeyPress, guesses, isCorrect, turn, usedKeys, isValid} = useWordle(solution)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
      window.addEventListener('keyup', handleKeyPress)

      if (isCorrect) {
        setTimeout(() => setShowModal(true), 2000)
        window.removeEventListener('keyup', handleKeyPress)
      }

      if(turn > 5) {
        setTimeout(() => setShowModal(true), 2000)
        window.removeEventListener('keyup', handleKeyPress)
      }

      if(isValid) {
        setTimeout(() => setShowModal(true), 1000)
      }

      return () => window.removeEventListener('keyup', handleKeyPress)
  }, [handleKeyPress, isCorrect, turn, isValid])


  return (
    <div>
        {/* <div>Solution - {solution}</div>
        <div>current Guess - {currentGuess}</div> */}
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        <Keypad usedKeys={usedKeys}/>
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  )
}
