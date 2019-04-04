import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

class MainTable extends React.Component {
  renderCityTable = () => {
    return this.props.cityData.map((cityObj, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>
            <Label ribbon>{cityObj.city}</Label>
          </Table.Cell>
          <Table.Cell>{cityObj.country}</Table.Cell>
          <Table.Cell>{cityObj.allBuildings}</Table.Cell>
          <Table.Cell>{cityObj['100m+']}</Table.Cell>
          <Table.Cell>{cityObj['150m+']}</Table.Cell>
          <Table.Cell>{cityObj['200m+']}</Table.Cell>
          <Table.Cell>{cityObj['300m+']}</Table.Cell>
          <Table.Cell>{cityObj.telecomTowers}</Table.Cell>
          <Table.Cell>{cityObj.allStructures}</Table.Cell>
        </Table.Row>
      )
    })
  }

  render () {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Country</Table.HeaderCell>
            <Table.HeaderCell>All Buildings</Table.HeaderCell>
            <Table.HeaderCell>100m+</Table.HeaderCell>
            <Table.HeaderCell>150m+</Table.HeaderCell>
            <Table.HeaderCell>200m+</Table.HeaderCell>
            <Table.HeaderCell>300m+</Table.HeaderCell>
            <Table.HeaderCell>Telecom Towers</Table.HeaderCell>
            <Table.HeaderCell>All Structures</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{this.renderCityTable()}</Table.Body>
      </Table>
    )
  }
}

export default MainTable
