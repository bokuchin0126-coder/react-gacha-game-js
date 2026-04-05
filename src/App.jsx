import { useState } from 'react'
import useGachaSystem from './useGachaSystem'
import './App.css'

function App() {
  const { distribution, saveResults, gameSet, reset, gameset, character, isSaved, isLoading, effectRank } = useGachaSystem()

  return (
    <>
    {gameset ? (
      <div className="game-set">
          <h2>あなたは強力な仲間を手に入れました！</h2>
          <h2>これから仲間たちと共に冒険を楽しんで下さい。</h2>
        </div>
    ) : isSaved ? (
      <div className="saved-data">
        <h2>本当にこの結果でよろしいですか？</h2>
        <button onClick={gameSet}>はい</button>
        <button onClick={reset}>やり直す</button>
      </div>
    ) : (
      <div className="gacha">
        <h1>チュートリアルガチャ</h1>
        <button onClick={() => distribution(1)}>1連引く</button>
        <button onClick={() => distribution(10)}>{10 - character.length}連引く</button>
        {character.length >= 10 && (
          <button onClick={reset}>リセットする</button>
        )}
      </div>
    )}
      
      {isLoading && (
        <div className={`gacha-animation ${effectRank? effectRank.toLowerCase() : ""}`} />
      )}
      
      <div className="result-list">
        {character.map((char, index) => (
          <div style={{ color: char.rank === "SSR" ? "gold" : char.rank === "SR" ? "blue" : "green" }} key={index}>
            <h3>{char.rank}: {char.name}</h3>
          </div>
        ))}
        {character.length >= 10 && (
          <button onClick={saveResults}>結果を保存</button>
        )}
      </div>

    </>
  )
}

export default App
