import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = ({text}) => (
  <div>{text}</div>
)

const MaxVotes = (props) => {
  const maxVote = Math.max(...props.votes)
  const maxVoteIndex = props.votes.indexOf(maxVote)
  console.log(maxVote)

  return (
    <div>
      <div>{props.anecdotes[maxVoteIndex]}</div>
      <div>has {props.votes[maxVoteIndex]} votes</div>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  

  const generateAnecdote = () => {
      const randomNum = Math.floor(Math.random() * anecdotes.length)
      setSelected(randomNum);
  }

  const upVote = (selected) => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }
  
  return (
    <div>
      <h1>anecdote of the day</h1>
      <Display text={anecdotes[selected]} />
      <Display text={"has " + votes[selected] + " votes"} />
      <Button text="vote" handleClick={() => upVote(selected)} />
      <Button text="next anecdote" handleClick={() => generateAnecdote()} />
      <h1>anecdote with most votes</h1>
      <MaxVotes anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)