import React from 'react'
import MainTable from './mainTable'

class ThreeHundred extends React.Component {
  orderByThreeHundred = () => {
    return this.props.cityData.sort((a, b) => {
      return a['300m+'] - b['300m+']
    })
  }

  render () {
    return <MainTable cityData={this.orderByThreeHundred()} />
  }
}

export default ThreeHundred
