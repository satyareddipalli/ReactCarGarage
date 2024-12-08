import React from 'react'
export default function Cars(props) {
  return (
    <div>
        <label>Car Name:{props.carname}</label><br/>
        <label>Car Engine cc:{props.cc}</label><br/>
        <label>Car Color:{props.color}</label><br/>
    </div>
  )
}