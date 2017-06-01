import React from 'react'
import './Filter.scss' 

class Filter extends React.Component {
  constructor() {
    super()
    this.state = {
      testArray : []  
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    return (
      <div>
        <h4>Filtering</h4>
      </div>
    )
  }
}

export default Filter