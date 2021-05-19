import React from 'react'
import './App.css'
import Score from './Score'


class App extends React.Component{
  state = {
    score: 0,
    category: "",
    points: 0,
    clue: "",
    answer: "",
    isShown: false
  }


getClue = () => {
  const url = "http://jservice.io/api/random"

  fetch(url)
  .then((resolution) => {
    return resolution.json();
  })

  .then((data) => {
    const clueData = data[0]
    console.log(clueData)
    this.setState({
      category: clueData.category.title,
      points: clueData.value,
      clue: clueData.question,
      answer: clueData.answer,
    });
  });
}
displayAnswer = () => {
  this.setState({isShown: !this.state.isShown});
}

render(){
  return (
    <div className="app">
      <h1 className="header">WELCOME TO JEOPARDY</h1>
      <score header="Score" value={this.state.score}
      points={this.state.points}/>

      <h2>Let's Play</h2>

      <button className="getclue_button" onClick={this.getClue}>Get Question</button>

      <div className="clueData">
        <div className="category">CATEGORY: {this.state.category}</div>
        <div className="points">POINTS: {this.state.points}</div>
        <div className="clue">CLUE: {this.state.clue}</div>
      </div>
      <button id="reveal" onClick={this.displayAnswer}>CLICK TO REVEAL QUESTION</button>
      {this.state.isShown? <p className="Answer"> Answer: What is {this.state.answer}</p>: null}
    </div>

  )
}
}

export default App;