import { useState } from 'react'
import useGachaSystem from './useGachaSystem'
import './App.css'

function App() {
  const { distribution, reset, character } = useGachaSystem()

  return (
    <>
      <h1>チュートリアルガチャ</h1>
      <div className="gacha">
        <button onClick={() => distribution(1)}>1回まわす</button>
        <button onClick={() => distribution(10)}>10回まわす</button>
        <button onClick={reset}>リセット</button>
      </div>
      
      <div className="result-list">
        {character.map((char, index) => (
          <div key={index}>
            <h3>{char.rank}: {char.name}</h3>
          </div>
        ))}
      </div>

    </>
  )
}

export default App
