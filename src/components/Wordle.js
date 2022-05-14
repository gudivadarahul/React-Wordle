import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({solution}) {
  const { currentGuess, handleKeyPress, guesses, isCorrect, turn, usedKeys} = useWordle(solution)

  useEffect(() => {
      window.addEventListener('keyup', handleKeyPress)

      if (isCorrect) {
        console.log("You Win!")
        window.removeEventListener('keyup', handleKeyPress)
      }

      if(turn > 5) {
        console.log("Out of guesses")
        window.removeEventListener('keyup', handleKeyPress)
      }

      return () => window.removeEventListener('keyup', handleKeyPress)
  }, [handleKeyPress, isCorrect, turn])


  return (
    <div>
        <div>Solution - {solution}</div>
        <div>current Guess - {currentGuess}</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        <Keypad usedKeys={usedKeys}/>
    </div>
  )
}
