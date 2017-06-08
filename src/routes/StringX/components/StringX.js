import React from 'react'
import './StringX.scss' 

class StringX extends React.Component {
  constructor() {
    super()
    this.state = {
      string : ""  
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  simpleFlip = () => {
    let original = this.state.string
    let flipped = []
    let n = original.length - 1
    for( let i = 0 ; i < n ; i++ ){
      flipped[i] = original[n]
      flipped[n] = original[i]
      n--
    }
    this.setState ({
      string : flipped.join("") 
    })
  }

  render () {
    return (
      <div>
        <input type ='text' name = 'string' onChange={this.handleChange} value ={this.state.string} placeholder ='Enter A String' className="inputBox" ></input>
        <p>Current String : {this.state.string} </p>
        <button type="button" onClick={this.simpleFlip} >Flip String</button>
      </div>
    )
  }
}

export default StringX