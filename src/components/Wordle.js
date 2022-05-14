import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({solution}) {
  const { currentGuess, handleKeyPress, guesses, isCorrect, turn} = useWordle(solution)

  useEffect(() => {
      window.addEventListener('keyup', handleKeyPress)

      return () => window.removeEventListener('keyup', handleKeyPress)
  }, [handleKeyPress])

  useEffect(() => {
      console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])
  

  return (
    <div>
        <div>Solution - {solution}</div>
        <div>current Guess - {currentGuess}</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        <Keypad />
    </div>
  )
}
