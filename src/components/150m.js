import React from 'react'
import MainTable from './mainTable'

class HundredFifty extends React.Component {
  orderByHundredFifty = () => {
    return this.props.cityData.sort((a, b) => {
      return a['150m+'] - b['150m+']
    })
  }

  render () {
    return <MainTable cityData={this.orderByHundredFifty()} />
  }
}

export default HundredFifty
