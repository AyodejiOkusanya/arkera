import React from 'react'
import MainTable from './mainTable'

class TwoHundred extends React.Component {
  orderByTwoHundred = () => {
    return this.props.cityData.sort((a, b) => {
      return a['200m+'] - b['200m+']
    })
  }

  render () {
    return <MainTable cityData={this.orderByTwoHundred()} />
  }
}

export default TwoHundred
