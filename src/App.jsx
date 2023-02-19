import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [userChoice, setUserChoice] = useState('rock')
  const[computerChoice,setComputerChoice]=useState('rock')
  const[userPoint,setUserPoint]=useState(0)
  const[computerPoint,setComputerPoint]=useState(0)
  const[turnResult,setTurnResult]=useState(null)
  const[result,setResult]=useState('Let\'s see who wins')
  const[gameOver,setGameOver]=useState(false)

  const choices=['rock','paper','scissors']

  const handleClick=(choice)=>{
    setUserChoice(choice)
    generateComputerChoice()
  }
  const generateComputerChoice=()=>{
    const randomchoice=choices[Math.floor(Math.random()*choices.length)]
    setComputerChoice(randomchoice)
  }
  const reset=()=>{
    window.location.reload()
  }
  useEffect(()=>{
    const comboMoves=userChoice+computerChoice
    if(userPoint<=4&&computerPoint<=4){
      if(comboMoves==='rockscissors'||comboMoves==='paperrock'||comboMoves==='scissorspaper'){
        const updatesUserPoints=userPoint+1
        setUserPoint(updatesUserPoints)
        setTurnResult('User got the Point')
        if(updatesUserPoints===5){
          setGameOver(true)
          setResult('User wins')
        }
      }
      if(comboMoves==='scissorsrock'||comboMoves==='rockpaper'||comboMoves==='paperscissors'){
        const updatesComputerPoints=computerPoint+1
        setComputerPoint(updatesComputerPoints)
        setTurnResult('Computer got the Point')
        if(updatesComputerPoints===5){
          setGameOver(true)
          setResult('Computer wins')
        }
      }
      if(comboMoves==='rockrock'||comboMoves==='paperpaper'||comboMoves==='scissorsscissors'){
        setTurnResult('No one won the Point')
      }
    }
  },[userChoice,computerChoice])


  return (
    <div className='App'>
      <h1 className="heading">Rock Paper Scissors</h1>
      <div className="score">
        <h1>User Points:{userPoint}</h1>
        <h1>Computer Points:{computerPoint}</h1>
      </div>
      <div className="choice">
        <div className="choice-user">
          <img  src={`../images/${userChoice}.png`}  className="user-hand" />
        </div>
        <div className="computer-user">
          <img src={`../images/${computerChoice}.png`}  className="computer-hand" />
        </div>
      </div>
      <div children='button-div'>
        {choices.map((choice,index)=>
        <button className='buttom' key={index} onClick={()=>handleClick(choice)} disabled={gameOver}>
          {choice}
        </button>)}
      </div>
      <div className="result">
        <h1>Turn Result:{turnResult}</h1>
        <h1>Final Result:{result}</h1>
      </div>
      <div className="button-div">
        {gameOver &&
        <button className='buttom' onClick={()=>reset()}>Restart Game</button>}
      </div>


    </div>
    
  )
}

export default App
