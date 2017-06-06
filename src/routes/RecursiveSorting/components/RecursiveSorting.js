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
  
  clearArray = () => {
    this.setState({
      testArray : []
    })
  }

  handleBubbleSort = () => { // Moves test array into place for use by the bubble sorting algorithm
    this.setState({
      bubbleSort : this.bubbleSort([...this.state.testArray])
    })
  }

  bubbleSort(items) {   // if current value > next value , current moves up, i++ New Check if current > next current moves up again till end or not >
                                  // NO recursion here, the fucntion is not calling itself
    do {
      var swapped = false  //If no values get moved then sorting is obviously done, here we prep a false which gets flipped to true on movement
      for (var i = 0; i < items.length; i++) {
        if (Number(items[i]) > Number(items[i+1])) {
          console.log('this.state.testArray inside if',this.state.testArray)
          var temp = items[i]
          items[i] = items[i+1]
          items[i+1] = temp
          swapped = true
        }
      }
    } while(swapped)  // Did anything move if no quit out and return new array
    console.log('this.state.testArray on return',this.state.testArray)
    return items
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
        <button type="button" onClick={this.clearArray} className = "sortButton" >Clear Array</button>
        <button type="button" onClick={this.handleBubbleSort} className = "sortButton" >BubbleSort</button>
        <p> Result from BubbleSort : { this.displayFunction(this.state.bubbleSort) }</p>
      </div>
    )
  }
}

export default RecursiveSorting