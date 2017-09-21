import React from 'react'

const HogForm = (props) => {

 return (
   <form className="formStyling" onSubmit={props.prevent}>
    <input onChange={props.filterHogs}/>
   </form>
 )
}

export default HogForm
