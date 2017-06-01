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

  filterFunction() {
    return(
      <span>Array : {this.state.testArray} Current Entry : {this.state.entry}</span>
    )
  }

  render () {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input type="text" name ="entry" placeholder = "Array Entry" onChange={this.handleChange} value={this.state.entry} className="inputBox" ></input>
        </form>
        <p>{ this.filterFunction() }</p>
      </div>
    )
  }
}

export default Filter