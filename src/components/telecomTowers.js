import React from 'react'
import MainTable from './mainTable'

class TelecomTowers extends React.Component {
  orderByTelecomTower = () => {
    return this.props.cityData.sort((a, b) => {
      return a.telecomTowers - b.telecomTowers
    })
  }

  render () {
    return <MainTable cityData={this.orderByTelecomTower()} />
  }
}

export default TelecomTowers
