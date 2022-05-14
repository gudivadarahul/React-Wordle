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

    }

    // Add a new guess to the guesses state
    // Update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {

    }

    // Handle key event and track current guess
    // If user presses enter add the new guess
    const handleKeyPress = ({key}) => {
        console.log(key)

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyPress}

}

export default useWordle