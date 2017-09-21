import React from 'react'
import HogList from './HogList'
import Hogs from '../porkers_data.js'
import HogForm from './HogForm'

const Hogggs = Hogs.map(hog => Object.assign({}, hog, {showDetails: false, visible: true}))
const wtf = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'


class HogContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      list: Hogggs
    }
  }

toggleDetails = (piggyName) => {
  const piggies = this.state.list
  var pork = piggies.find(pig => pig.name === piggyName.target.name)
  pork.showDetails = pork.showDetails === false ? true : false
  this.setState({
    list: piggies
  })
}

filterHogs = (event) => {
  event.preventDefault()
  const piggies = Hogggs.filter(pig => pig.name.includes(event.target.value))
  this.setState({
    list: piggies
  })
}

filterGrease = () => {
  const piggies = Hogggs.filter(pig => pig.greased === true)
  this.setState({
    list: piggies
  })
}

sortByWeight = () => {
  const piggies = Hogggs.sort(function(a,b) {
    return a[wtf] - b[wtf]
  })
  console.log(piggies)
  this.setState({
    list: piggies
  })
}

prevent = (event) => {
  event.preventDefault()
}

toggleVisible = (piggyName) => {
  const piggies = this.state.list
  var pork = piggies.find(pig => pig.name === piggyName.target.name)
  pork.visible = pork.visible === false ? true : false
  this.setState({
    list: piggies
  })
}

  render () {

    return (
      <div>
        <button onClick={this.sortByWeight}>Sort By Weight</button>
        <button onClick={this.filterGrease}>Find Greased Pigs</button>
        <HogForm prevent={this.prevent} filterHogs={this.filterHogs} />
        <HogList
          toggleVisible={this.toggleVisible}
          onToggleDetails={this.toggleDetails}
          showDetails={this.state.showDetails}
          hiList={this.state.list} />
      </div>

    )
  }
}

export default HogContainer
