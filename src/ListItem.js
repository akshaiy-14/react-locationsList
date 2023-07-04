import React from 'react'

const ListItem = ({location, handleChecks, handleDeleteLocation}) => {


  return (
    <li>
        <input type="checkbox" onChange={() => handleChecks(location.id)} checked={location.checked}>
        </input>
        <label style={location.checked ? {textDecoration:"line-through"} : null}> {location.placeName} </label>
        <button onClick={() => handleDeleteLocation(location.id)}> Delete </button>
    </li>
  )
}

export default ListItem