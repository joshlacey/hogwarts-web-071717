import React from 'react'

const HogHog = (props) => {
  const details = () => {
    return (
      <div>
        <p>Specialty: {props.pig.specialty}</p>
        <p>Greased: {props.pig.greased === false ? "false" : "true"}</p>
        <p>Weight: {props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Hightest Medal: {props.pig['highest medal achieved']}</p>
      </div>
    )
  }

  const showIt = () => {
    return (
      <div>
        <h1>{props.pig.name}</h1>
        <img src={"../hog-imgs/" + props.pig.name.split(" ").join('_')+".jpg"} alt="piggy"/>
        <button name={props.pig.name} onClick={props.onToggleDetails}>ShowDetails</button>
        {props.pig.showDetails === true ? details() : null}
      </div>
    )
  }
  return (
    <div className="ui eight wide column">
      <button name={props.pig.name} onClick={props.toggleVisible}>{props.pig.visible === true ? "Hide Pig" : "Show Pig"}</button>
      {props.pig.visible === true ? showIt() : null}

    </div>
  )
}


export default HogHog
