import React from 'react'
import './Mapping.scss' 

class Mapping extends React.Component {
  constructor() {
    super()
    this.state = {
      testArray : ["This", "Is", "A", "Simple", "Array", "To", "Map", "Though", "And", "Display"]  
    }
  }
  render () {
    return (
      <div>
        <h4>Mapping</h4>
      </div>
    )
  }
}

export default Mapping