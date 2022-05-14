import React, { useEffect, useState } from 'react'
import letterBank from '../data/letters.json'

export default function Keypad({usedKeys}) {
    const [letters, setLetters] = useState(null)

    useEffect(() => {
        const letters = letterBank.letters
        setLetters(letters)
    }, [])


  return (
    <div className='keypad'>
        {letters && letters.map((l) => {
            const color = usedKeys[l.key]
            return (
                <div key={l.key} className={color}>{l.key}</div>
            )
        })}
    </div>
  )
}
