import React from 'react'
import MainTable from './mainTable'

class Country extends React.Component {


    orderByCountry = () => {
        return this.props.cityData.sort((a,b) => {
            if (a.country < b.country) {
              return -1 
            } else if (b.country < a.country) {
              return 1
            } 
    
            return 0 
        })
      }


    render() {
        return (
            <MainTable cityData={this.orderByCountry()} />

        )
    }
}


export default Country 