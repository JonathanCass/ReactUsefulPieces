import React from 'react'
import './TEMPLATE.scss' 

class TEMPLATE extends React.Component {
  constructor() {
    super()
    this.state = {
      placeHolder : "Place Holder"  
    }
  }
  render () {
    return (
      <div>
        <h4>TEMPLATE</h4>
      </div>
    )
  }
}

export default TEMPLATE