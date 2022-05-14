import React from 'react'

export default function Modal({isCorrect, turn, solution}) {
    console.log(solution)
  return (
    <div className="modal">
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <p className="solution">{solution}</p>
                <p>You found the solution in {turn} guesses!</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>You Lose!</h1>
                <p className="solution">The word was: {solution}</p>
            </div>
        )}
    </div>
  )
}
