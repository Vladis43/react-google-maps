import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import './index.css'

class View extends Component {
  render(){
    return(
      <Home />
    )
  }
}

ReactDOM.render(<View />, document.getElementById('root'))
