import { useState } from "react"


const useWordle = (solution) => {
    // States
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess in an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    // Format a guess into an array of letter objects
    const formatGuess = () => {
        let solutionArr = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        // find any green letters
         formattedGuess.forEach((l, i) => {
             if (solutionArr[i] === l.key) {
                 formattedGuess[i].color = 'green'
                 solutionArr[i] = null
             }
         })

         // find any yellow letters
         formattedGuess.forEach((l, i) => {
             if (solutionArr.includes(l.key) && l.color !== 'green') {
                 formattedGuess[i].color = 'yellow'
                 solutionArr[solutionArr.indexOf(l.key)] = null
             }
         })

         return formattedGuess
    }

    // Add a new guess to the guesses state
    // Update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {

    }

    // Handle key event and track current guess
    // If user presses enter add the new guess
    const handleKeyPress = ({key}) => {
        if (key === 'Enter') {
            // Only add guess if turn is less than 5
            if(turn > 5) {
                console.log('you used all your guesses')
                return
            }
            // Do not allow duplicate words
            if(history.includes(currentGuess)){
                console.log('you already tried that word')
                return
            }
            // Check if chars is 5 chars long
            if (currentGuess.length !== 5){
                console.log('Word must be 5 chars long')
                return
            }
            const formatted = formatGuess()
            console.log(formatted)
        }
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return 
        }
        if(/^[A-Za-z$]/.test(key)){
            if(currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyPress}

}

export default useWordle