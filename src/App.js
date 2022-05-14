import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import wordBank from './data/db.json'

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    const randomSol = wordBank.valid[Math.floor(Math.random()*wordBank.valid.length)]
    console.log(randomSol)
    setSolution(randomSol)
  }, [setSolution])


  return (
    <div className="App">
      <h1>Rahul's Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App
