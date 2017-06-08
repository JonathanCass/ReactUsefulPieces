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
    let l = 0
    let r = original.length - 1
    for( l ; l <= r ; l++ ){
      flipped[l] = original[r]
      flipped[r] = original[l]
      r--
    }
    this.setState ({
      string : flipped.join("") 
    })
  }

  specialIgnore = () => {
    const notSpecial = /^[0-9a-zA-Z]+$/ //Regex Expression defined into variable, if a match against this returns true the character is not special
    let tempL = ""
    let flipped = this.state.string.split("")
    let l = 0
    let r = flipped.length - 1
    while( l <= r){
      if( !flipped[l].match(notSpecial) ){
        l++
      }
      else if( !flipped[r].match(notSpecial) ){
        r--
      }
      else{
        tempL = flipped[l]
        flipped[l] = flipped[r]
        flipped[r] = tempL
        l++
        r--
      }
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
        <button type="button" onClick={this.specialIgnore} >Flip Ignoring Special Characters</button>
      </div>
    )
  }
}

export default StringX