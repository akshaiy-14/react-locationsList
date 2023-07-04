import React from 'react'
import ListItem from './ListItem';

const LocationsList = ({ locations, handleChecks, handleDeleteLocation }) => {

  return (
    <ul>
          {locations.map((location) => (
            <ListItem location = {location} handleChecks = {handleChecks} handleDeleteLocation = {handleDeleteLocation}/>
          ))}
        </ul>
  )
}

export default LocationsList