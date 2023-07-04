import React from 'react'
import LocationsList from './LocationsList';

const Content = ({ locations, setLocations, handleChecks, handleDeleteLocation }) => {


  return (
    <main>
        {(locations.length !== 0) ? (
         < LocationsList locations = {locations} setLocations = {setLocations} handleChecks = {handleChecks} handleDeleteLocation = {handleDeleteLocation}/>
        ) : (<p>No locations to display</p>) }

        <p> Total checked locations = {locations.filter((location) => location.checked === true).length} </p>
    </main>
  )
}

export default Content
