import React from 'react'
import './RecursiveSorting.scss' 

class RecursiveSorting extends React.Component {
  constructor() {
    super()
    this.state = {
      testArray : [], entry : '', bubbleSort : [], mergeSort : [], quickSort : []  
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

  handleSort = (e) => { // Moves test array into place for use by the sorting algorithm
    this.setState({
      [e.target.name] : this[e.target.name]([...this.state.testArray]) //similar to handleChange e.targe.name is referencing both the desired state position and the necessary function call
    })
  }

  bubbleSort(items) {   // if current value > next value , current moves up, i++ New Check if current > next current moves up again till end or not >
                                  // NO recursion here, the fucntion is not calling itself
    do {
      var swapped = false  //If no values get moved then sorting is obviously done, here we prep a false which gets flipped to true on movement
      for (var i = 0; i < items.length; i++) {
        if (Number(items[i]) > Number(items[i+1])) {
          var temp = items[i]
          items[i] = items[i+1]
          items[i+1] = temp
          swapped = true
        }
      }
    } while(swapped)  // Did anything move if no quit out and return new array
    return items
  }

  mergeSort(items) {  // This IS a recursive function it calls itself up creating a tower of smaller and smaller arrays that until they are arrays of 1, then this tower collapses down into sorted order
    if (items.length < 2) {  // array is length 1, no further division possible, and returns the array
      return items
    }
    const length = items.length    
    const middle = Math.floor(length / 2)  // establishing where to break array apart
    const left = items.slice(0, middle)
    const right = items.slice(middle, length)
  
    return this.merge(this.mergeSort(left), this.mergeSort(right)) //here is the recursive call, sending the two halves back into this same function, then sending those two halves to be glued together
  }

  merge = (left, right) => {
  
    const results = []
  
    while (left.length && right.length) {
    
      if (Number(left[0]) <= Number(right[0])) {  // Here both left and right are guaranteed to have been sorted because they must both have already hit the minimum size check and are now falling down the stack being stiched together here with one check
        results.push(left.shift())
      }
      else {
        results.push(right.shift())
      }
    }
  
    while(left.length) {
      results.push(left.shift())
    }
    while(right.length) {
      results.push(right.shift())
    }
  
    return results
  }

  quickSort(items) { // A recursive function as well, grabs a "pivot" essentially a random entry from the array but the last entry for readability of code , then seperates array into two pieces , all entries less than, all entries greater than, plus the pivot remaining outside these arrays
    if (items.length <= 1) return items // array cant get any smaller it is sorted, begin to collapse this branch, also the base case important to be first to prevent stack overflow in recursive functions
  
    const pivot = items[items.length-1] // grabbing a pivot from each array
    const left = []
    const right = []
  
    for (let i = 0; i < items.length-1; i++) {
      if (Number(items[i]) < Number(pivot)) {    //if its less then the pivot toss it on the lesser array
        left.push(items[i])
      }
      else {   // everything else goes on the greater array
        right.push(items[i])
      }
    }
    return [...this.quickSort(left), pivot, ...this.quickSort(right)] // here is the recursive call
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
        <button type="button" name = "bubbleSort" onClick={this.handleSort} className = "sortButton" >BubbleSort</button>
        <button type="button" name = "mergeSort" onClick={this.handleSort} className = "sortButton" >MergeSort</button>
        <button type="button" name = "quickSort" onClick={this.handleSort} className = "sortButton" >QuickSort</button>
        <p> Result from BubbleSort : { this.displayFunction(this.state.bubbleSort) }</p>
        <p> Result from MergeSort : { this.displayFunction(this.state.mergeSort) }</p>
        <p> Result from QuickSort : { this.displayFunction(this.state.quickSort) }</p>
      </div>
    )
  }
}

export default RecursiveSorting