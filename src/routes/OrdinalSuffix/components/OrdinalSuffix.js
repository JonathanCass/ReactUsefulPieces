import React from 'react'
import './OrdinalSuffix.scss' 

class OrdinalSuffix extends React.Component {
  constructor() {
    super()
    this.state = {
      testNumber : 0  
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  suffix(i) {
    var j = i % 10,
    k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }
  
  render () {
    return (
      <div>
        <h4>Ordinal Suffix</h4>
        <p>Enter a Number and observe the proper ordinal suffix be automatically affixed!</p>
        <input type="text" name="testNumber" placeholder="Enter Your Number" onChange={this.handleChange} value={this.state.testNumber} className="inputBox"></input>
        <p>{this.suffix(this.state.testNumber)}</p>
      </div>
    )
  }
}

export default OrdinalSuffix