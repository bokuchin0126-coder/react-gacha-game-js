import { useState } from 'react'
import { getGachaData } from './gachaData'

function useGachaSystem() {

  const [character, setCharacter] = useState([])

  function discharge() {
    const probability = Math.floor(Math.random() * 100)
    let result = null
    let name = null

    if (probability < 5) {
        name = getGachaData("SSR")
        result = {rank: "SSR", name: name}
    }
    else if (probability < 30) {
        name = getGachaData("SR")
        result = {rank: "SR", name: name}
    }
    else {
        name = getGachaData("R")
        result = {rank: "R", name: name}
    }
    return result
  }

  function distribution(id) {
    if (id === 1) {
        const res = discharge()
        setCharacter(prev => [...prev, res])
    }
    else if (id === 10) {
      const newResults = [];
      for (let i = 0; i < 10; i++) {
        const res = discharge();
        newResults.push(res);
      }
      setCharacter(prev => [...prev, ...newResults]);
    }
  }

  function reset() {
    setCharacter([])
  }

  return {
    distribution,
    character,
    reset
  }
}

export default useGachaSystem