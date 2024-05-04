import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Header = ({ text }) => {
  console.log(text)
  return (
    <h1>
      {text}
    </h1>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const header1 = "Anecdote of the day"
  const header2 = "Anecdote with most votes"

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  console.log(points)

  const getRandomAnecdote = () => {
    let newSelected = Math.floor(Math.random() * anecdotes.length)
    console.log(newSelected)
    setSelected(newSelected)
  }

  const increaseVote = () => {
    const updatedPoints = [...points];
    updatedPoints[selected] += 1;
    setPoints(updatedPoints);
  }


  let maxIndex = 0;
  points.forEach((point, index) => {
    if (point > points[maxIndex]) {
      maxIndex = index;
    }
  });


  return (
    <div>
      <Header text={header1} />
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <Button text='vote' onClick={increaseVote} />
      <Button text='next anecdote' onClick={getRandomAnecdote} />
      <Header text={header2} />
      {anecdotes[maxIndex]}
    </div>
  )
}

export default App