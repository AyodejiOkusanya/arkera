import React from 'react'
import data from '../data'
import { Route, withRouter, Switch, Link } from 'react-router-dom'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import City from './city'
import Country from './country'
import Hundred from './100m'
import HundredFifty from './150m'
import TwoHundred from './200m'
import ThreeHundred from './300m'
import AllBuildings from './allBuildings'
import TelecomTowers from './telecomTowers';
import AllStructures from './allStructures'
import Navbar from './Navbar'
import MainTable from './mainTable';

class App extends React.Component {
  state = {
    cityData: []
  }

  componentDidMount () {
    this.setState({ cityData: data })
  }

  renderMainTable = () => {
    return this.state.cityData
  }

  

  



  render () {
    return (
      <div>
        <h2>Sort By:</h2>
      <Navbar /> 

        
          <Switch>
            <Route
              exact
              path='/'
              component={ () => (
                <MainTable cityData={this.state.cityData}/>
              )}
            />
            <Route
              path='/city'
              component={() => (
                <City  cityData={this.state.cityData} />
              )}
            />
            <Route
              path='/country'
              component={() => <Country cityData={this.state.cityData} />}
            />
            <Route
              path='/100+'
              component={() => <Hundred cityData={this.state.cityData} />}
            />
            <Route
              path='/150+'
              component={() => <HundredFifty cityData={this.state.cityData} />}
            />
             <Route
              path='/200+'
              component={() => <TwoHundred cityData={this.state.cityData} />}
            />
             <Route
              path='/300+'
              component={() => <ThreeHundred cityData={this.state.cityData} />}
            />
             <Route
              path='/300+'
              component={() => <ThreeHundred cityData={this.state.cityData} />}
            />
             <Route
              path='/300+'
              component={() => <ThreeHundred cityData={this.state.cityData} />}
            />
             <Route
              path='/allBuildings'
              component={() => <AllBuildings cityData={this.state.cityData} />}
            />
             <Route
              path='/telecomTowers'
              component={() => <TelecomTowers cityData={this.state.cityData} />}
            />
              <Route
              path='/allStructures'
              component={() => <AllStructures cityData={this.state.cityData} />}
            />
          </Switch>
        </div>
    
      
    )
  }
}

export default App
