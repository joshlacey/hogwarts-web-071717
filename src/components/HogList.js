import React from 'react'
import HogHog from './HogHog.js'

const HogList = (props) => {

    const PigItems = props.hiList.map((h,index) => { return(
      <HogHog
      key={index + 1}
      pig={h}
      toggleVisible={props.toggleVisible}
      onToggleDetails={props.onToggleDetails}
      showDetails={props.showDetails}
      />
    ) })

  return (
    <div className="ui grid container">
      {PigItems}
    </div>
  )
}

export default HogList
