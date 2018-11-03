class App extends Component {
    render() {
      return (
        <Zillow unit='apartment1'>
          {(data) => data === null
            ? <Loading />
            : <Badge info={data} />}
        </Zillow>
      )
    }
  }
  
  
  import React, { Component, PropTypes } from 'react'
  import fetchUnits from 'zillow'
  // fetchUnits take in a unit’s name returns a promise
  // which will resolve with that unit’s data.
  
  class Zillow extends Component {
    //finish this...
    constructor(props) {
      super(props);
  
      this.state = { unit: null}; 
    }
    
  
    componentDidMount() {
      fetchUnits(this.props.unit).then(function(unit) {
        return this.setState( { unit } ) 
      }).catch()
    }
    // fetchUnits(this.props) {
      
    // }
  
    render() {
      return (
  
        this.props.children(this.state.unit)
      )
    }
  }