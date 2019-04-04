import React from 'react'
import MainTable from './mainTable'

class AllStructures extends React.Component {
  orderByStructures = () => {
    return this.props.cityData.sort((a, b) => {
      return a.allStructures - b.allStructures
    })
  }

  render () {
    return <MainTable cityData={this.orderByStructures()} />
  }
}

export default AllStructures
