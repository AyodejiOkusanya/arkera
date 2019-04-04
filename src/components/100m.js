import React from 'react'
import MainTable from './mainTable'

class Hundred extends React.Component {


    orderByHundred = () => {
        console.log('working')
        return this.props.cityData.sort((a,b) => {
            
            return a['100m+'] - b['100m+']
        })
      }




    render() {
        return (
            <MainTable cityData={this.orderByHundred()} />
        )
    }
}


export default Hundred 