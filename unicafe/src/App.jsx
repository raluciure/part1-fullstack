import { useState } from 'react'

const Header = ({ text }) => {
  console.log(text)
  return (
    <h1>
      {text}
    </h1>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = (props) => {
  console.log(props)
  if (props.statistics[3].value === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine feedback={props.statistics[0].text} number={props.statistics[0].value} />
      <StatisticLine feedback={props.statistics[1].text} number={props.statistics[1].value} />
      <StatisticLine feedback={props.statistics[2].text} number={props.statistics[2].value} />
      <StatisticLine feedback={props.statistics[3].text} number={props.statistics[3].value} />
      <StatisticLine feedback={props.statistics[4].text} number={props.statistics[4].value} />
      <StatisticLine feedback={props.statistics[5].text} number={props.statistics[5].value} />
    </div>
  )
}

// exercise 1.11
const StatisticsTable = (props) => {
  console.log(props)
  if (props.statistics[3].value === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.statistics[0].text}</td>
          <td>{props.statistics[0].value}</td>
        </tr>
        <tr>
          <td>{props.statistics[1].text}</td>
          <td>{props.statistics[1].value}</td>
        </tr>
        <tr>
          <td>{props.statistics[2].text}</td>
          <td>{props.statistics[2].value}</td>
        </tr>
        <tr>
          <td>{props.statistics[3].text}</td>
          <td>{props.statistics[3].value}</td>
        </tr>
        <tr>
          <td>{props.statistics[4].text}</td>
          <td>{props.statistics[4].value}</td>
        </tr>
        <tr>
          <td>{props.statistics[5].text}</td>
          <td>{props.statistics[5].value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {

  const header1 = "give feedback"
  const header2 = "statistics"
  const buttons = ["good", "neutral", "bad"]
  const advancedStatistics = ["all", "average", "positive"]

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const statistics = [
    {
      text: buttons[0],
      value: good
    },
    {
      text: buttons[1],
      value: neutral
    },
    {
      text: buttons[2],
      value: bad
    },
    {
      text: advancedStatistics[0],
      value: total
    },
    {
      text: advancedStatistics[1],
      value: average
    },
    {
      text: advancedStatistics[2],
      value: positive
    },
  ]

  const increaseGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    const updatedTotal = updatedGood + neutral + bad
    const average = (updatedGood - bad) / updatedTotal
    setAverage(average)
    const positive = updatedGood * 100 / updatedTotal
    setPositive(positive)
  }

  const increaseNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
    const updatedTotal = good + updatedNeutral + bad
    const average = (good - bad) / updatedTotal
    setAverage(average)
    const positive = good * 100 / updatedTotal
    setPositive(positive)
  }

  const increaseBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
    const updatedTotal = good + neutral + updatedBad
    const average = (good - updatedBad) / updatedTotal
    setAverage(average)
    const positive = good * 100 / updatedTotal
    setPositive(positive)
  }

  return (
    <div>
      <Header text={header1} />
      <Button
        onClick={increaseGood}
        text={buttons[0]}
      />
      <Button
        onClick={increaseNeutral}
        text={buttons[1]}
      />
      <Button
        onClick={increaseBad}
        text={buttons[2]}
      />
      <Header text={header2} />
      {/* if you want to check the version of this exercise without the table for statistics, uncomment the next line  */}
      {/* <Statistics statistics={statistics} /> */}
      <StatisticsTable statistics={statistics} />
    </div>
  )
}

export default App