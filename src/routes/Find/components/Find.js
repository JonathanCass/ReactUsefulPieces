import React from 'react'
import './Find.scss' 

class Find extends React.Component {
  constructor() {
    super()
    this.state = {
      query : '',
      testArray : [ 'Dog', 'Cat', 'Turtle', 'Owl', 'Pony', 'Dragon', 'Griffon', 'Minotaur', 'Phoenix'],
      testString : 'AlphaBravoCharlieDeltaEchoFoxtrotGulfHotelIndiaJulietKiloMikeNovember'  
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  displayFunction(item) { // A Nice mapping function, accepts an array and outputs it with spaces, css white-space pre-wrap required
    return(  
        item.map( (entry, i) =>( <span key = {i} className = "arrayEntry" >{ entry } </span> ))    
    )
  }
  
  find (item , search) { 
    if( item.indexOf(search) === -1){
      return(
        <span>Query not found</span>
      )
    }else{
      return(
        <span>Position : {item.indexOf(search)}</span>
      )
    }
  }

  findNonCase (item , search) { 
    if( item.findIndex(item => search.toLowerCase() === item.toLowerCase()) === -1){ // This is essentially a case insensitive version of indexOf for an array
      return(
        <span>Query not found</span>
      )
    }else{
      return(
        <span>Postion : {item.findIndex(item => search.toLowerCase() === item.toLowerCase())}</span>
      )
    }
  }
  
  render () {
    return (
      <div>
        <div>Test Array : { this.displayFunction(this.state.testArray) }</div>
        <div>Test String : { this.state.testString }</div>
        <input type ='text' name = 'query' onChange={this.handleChange} value ={this.state.query} placeholder ='Search for ?' className="inputBox" ></input>
        <div className="divLabel" > Searching for : {this.state.query} </div>
        <div> Array : { this.find( this.state.testArray , this.state.query) } </div>
        <div> String : { this.find( this.state.testString , this.state.query) } </div>
        <div className="divLabel"> Case Insensitive </div>
        <div> Array : { this.findNonCase( this.state.testArray , this.state.query) } </div>
        <div> String : { this.find( this.state.testString.toLowerCase() , this.state.query.toLowerCase()) } </div>
      </div>
    )
  }
}

export default Find