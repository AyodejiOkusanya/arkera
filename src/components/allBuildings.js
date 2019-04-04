import React from 'react'
import MainTable from './mainTable'

class AllBuildings extends React.Component {
  orderByBuilding = () => {
    return this.props.cityData.sort((a, b) => {
      return a.allBuildings - b.allBuildings
    })
  }

  render () {
    return <MainTable cityData={this.orderByBuilding()} />
  }
}

export default AllBuildings
