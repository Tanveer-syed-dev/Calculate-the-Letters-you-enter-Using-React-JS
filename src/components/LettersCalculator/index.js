// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {inputText: ''}

  onChangeLettersCount = event => {
    const newText = event.target.value
    this.setState({inputText: newText})
    // console.log(newText)
  }

  render() {
    const {inputText} = this.state
    // console.log(inputText)
    const noOfLetters = inputText.length
    // console.log(noOfLetters)
    return (
      <div className="bg-container">
        <div className="calculate-container">
          <h1 className="title">Calculate the Letters you enter</h1>

          <label className="disc" htmlFor="userInput">
            Enter the phrase
          </label>
          <input
            type="text"
            className="input-text"
            placeholder="Enter the phrase"
            onChange={this.onChangeLettersCount}
            id="userInput"
          />
          <p className="display-no-of-letters">No.of letters: {noOfLetters}</p>
        </div>
        <img
          className="cal-img"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
