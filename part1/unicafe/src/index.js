import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}
const Statistic = (props) => {
  return (
      <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) => {
  const all = props.bad + props.neutral + props.good
  const average = (props.good + (props.bad*-1)) / all
  const percentage = (props.good / all) * 100;

  if(all === 0){
    return (
      <div>No feedbacks given</div>
    )
  }
  return(
    <table>
      <tbody>
        
        <tr>
          <td><Statistic text="good"/></td>
          <td><Statistic value={props.good}/></td>
        </tr>

        <tr>
          <td><Statistic text="neutral"/></td>
          <td><Statistic value={props.neutral}/></td>
        </tr>

        <tr>
          <td><Statistic text="bad"/></td>
          <td><Statistic value={props.bad}/></td>
        </tr>

        <tr>
          <td><Statistic text="all"/></td>
          <td><Statistic value={all}/></td>
        </tr>

        <tr>
          <td><Statistic text="average"/></td>
          <td><Statistic value={average}/></td>
        </tr>
        
        <tr>
          <td><Statistic text="percentage"/></td>
          <td><Statistic value={percentage}/></td>
        </tr>
        
      </tbody>
    </table>
  )
}
  

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  return (
    <div>
      <Display text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Display text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)