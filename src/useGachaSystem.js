import { useState } from 'react'
import { getGachaData } from './gachaData'

function useGachaSystem() {

  const [character, setCharacter] = useState([])
  const [isSaved, setIsSaved] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [saveCharacter, setSaveCharacter] = useState([])
  const [effectRank, setEffectRank] = useState(null)
  const rankPriority = {
    SSR: 3,
    SR: 2,
    R: 1
  }
  const [gameset, setGameset] = useState(false)

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
    const remain = 10 - character.length
    if (remain <= 0) return 

    setEffectRank(null)

    setTimeout(() => {
    if (id === 1) {
        const res = discharge()
        setEffectRank(res.rank)
        setCharacter(prev => [...prev, res])
    }
    else if (id === 10) {
      const newResults = [];
      const count = Math.min(10, remain)

      for (let i = 0; i < count; i++) {
        const res = discharge();
        newResults.push(res);
        
      }
      const best = newResults.reduce((prev, current) => {
        return rankPriority[current.rank] > rankPriority[prev.rank] ? current : prev;
      })
      setEffectRank(best.rank);
      setCharacter(prev => [...prev, ...newResults]);
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 300)

  }, 1300)
  }

  function saveResults() {
    setSaveCharacter([...character]);
    setIsSaved(true)
  }
  

  function reset() {
    setCharacter([])
    setSaveCharacter([])
    setIsSaved(false)
  }

  function gameSet() {
    setGameset(true)
  }

  return {
    distribution,
    saveResults,
    gameSet,
    gameset,
    character,
    isSaved,
    isLoading,
    effectRank,
    reset
  }
}

export default useGachaSystem