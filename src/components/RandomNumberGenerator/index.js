// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onRandomNumberGenerator = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onRandomNumberGenerator}
          >
            Generate
          </button>
          <p className="count">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
