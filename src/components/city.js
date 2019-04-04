import React from 'react'
import MainTable from './mainTable'

class City extends React.Component {
  state = {
    cityArray: []
  }

  orderByCity = () => {
    return this.props.cityData.sort((a, b) => {
      if (a.city < b.city) {
        return -1
      } else if (b.city < a.city) {
        return 1
      }

      return 0
    })
  }

  render () {
    return <MainTable cityData={this.orderByCity()} />
  }
}

export default City
