import React from 'react'
import './Filter.scss' 

class Filter extends React.Component {
  constructor() {
    super()
    this.state = {
      testArray : [], entry : ''  
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      testArray : [...this.state.testArray , this.state.entry ],
      entry : ''
    })
  }

  displayFunction(item) { // A Nice mapping function, accepts an array and outputs it with spaces, css white-space pre-wrap required
    return(  
        item.map( (entry, i) =>( <span key = {i} className = "arrayEntry" >{ entry } </span> ))    
    )
  }

  filterEvens(item) {
    var even = function (num) {
      return num % 2 === 0
    }
    var evenArray = item.filter(even)
    return evenArray
  }

  render () {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input type="text" name ="entry" placeholder = "Array Entry" onChange={this.handleChange} value={this.state.entry} className="inputBox" ></input>
        </form>
        <p> Current Entry : { this.state.entry }</p>
        <p> Array : { this.displayFunction(this.state.testArray) }</p>
        <div> Evens : { this.displayFunction(this.filterEvens(this.state.testArray)) }</div>
      </div>
    )
  }
}

export default Filter