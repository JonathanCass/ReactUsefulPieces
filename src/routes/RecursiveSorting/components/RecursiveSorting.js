import React from 'react'
import './RecursiveSorting.scss' 

class RecursiveSorting extends React.Component {
  constructor() {
    super()
    this.state = {
      testArray : [], entry : '', bubbleSort : []  
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
  
  handleBubbleSort = () => { // Moves test array into place for use by the bubble sorting algorithm
    let returnArray = [...this.state.testArray, 100 ]
    this.setState({
      bubbleSort : returnArray
    })
  }

  bubbleSort(item) {   // if next value > moves up, if next > moves up again till end or not >, then IF values were moved starts again till none moved
                                  // NO recursion here, the fucntion is not calling itself
    if(item){
    let returnArray = [...item, 100 ]
    console.log('bubble sort run')
    return returnArray
    }
  }

  displayFunction(item) { // A Nice mapping function, accepts an array and outputs it with spaces, css white-space pre-wrap required
    return(  
        item.map( (entry, i) =>( <span key = {i} className = "arrayEntry" >{ entry } </span> ))    
    )
  }

  render () {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input type="text" name ="entry" placeholder = "Array Entry" onChange={this.handleChange} value={this.state.entry} className="inputBox" autoComplete="off" ></input>
        </form>
        <p> Current Entry : { this.state.entry }</p>
        <p> Array : { this.displayFunction(this.state.testArray) }</p>
        <button type="button" onClick={this.handleBubbleSort} className = "sortButton" >BubbleSort</button>
        <p> Result from BubbleSort : { this.displayFunction(this.state.bubbleSort) }</p>
      </div>
    )
  }
}

export default RecursiveSorting