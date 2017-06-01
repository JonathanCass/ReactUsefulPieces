import React from 'react'
import './Mapping.scss' 

class Mapping extends React.Component {
  constructor() {
    super()
    this.state = {
      testArray : ["This", "Is", "A", "Simple", "Array", "To", "Map", "Though", "And", "Display", "."]  
    }
  }
  
  mapFunction(){      //Relocated from render to allow if statements
    if(this.state.testArray) {      // this would check if the props were defined, here we just put the array from state in as a placeholder
      return (
        this.state.testArray.map( (entry, i) =>(  //The index i is here and can be used to label the key on the mapping
          <p key = {i} className = "mapEntry" >{ entry } </p>
        ))
      )
    }else {
      return (
        <span> Loading Props. </span>
      )
    }
  }

  render () {
    return (
      <div> 
        {/*Here we call the mapFunction into the Render to display it's contents*/}
        { this.mapFunction() }
      </div>
    )
  }

}

export default Mapping