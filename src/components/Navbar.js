import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <Menu>
        <Link to='/city'>
          <Menu.Item
            name='city'
            active={activeItem === 'city'}
            onClick={this.handleItemClick}
          >
            City
          </Menu.Item>
        </Link>

        <Link to='/country'>
          <Menu.Item
            name='country'
            active={activeItem === 'country'}
            onClick={this.handleItemClick}
          >
            Country
          </Menu.Item>
        </Link>

        <Link to='/allBuildings'>
          <Menu.Item
            name='All Buildings'
            active={activeItem === 'All Buildings'}
            onClick={this.handleItemClick}
          >
            All Buildings
          </Menu.Item>
        </Link>

        <Link to='/100+'>
          <Menu.Item
            name='100m+'
            active={activeItem === '100m+'}
            onClick={this.handleItemClick}
          >
            100m+
          </Menu.Item>
        </Link>

        <Link to='/150+'>
          <Menu.Item
            name='150m+'
            active={activeItem === '150m+'}
            onClick={this.handleItemClick}
          >
            150m+
          </Menu.Item>
        </Link>

        <Link to='/200+'>
          <Menu.Item
            name='200m+'
            active={activeItem === '200m+'}
            onClick={this.handleItemClick}
          >
            200m+
          </Menu.Item>
        </Link>

        <Link to='/300+'>
          <Menu.Item
            name='300m+'
            active={activeItem === '300m+'}
            onClick={this.handleItemClick}
          >
            300m+
          </Menu.Item>
        </Link>

        <Link to='/telecomTowers'>
          <Menu.Item
            name='telecom towers'
            active={activeItem === 'telecom towers'}
            onClick={this.handleItemClick}
          >
            Telecom Towers
          </Menu.Item>
        </Link>

        <Link to='/allStructures'>
          <Menu.Item
            name='all structures'
            active={activeItem === 'all structures'}
            onClick={this.handleItemClick}
          >
            All Structures
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}

export default Navbar
