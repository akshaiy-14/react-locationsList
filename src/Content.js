import React from 'react'
import LocationsList from './LocationsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';


const Content = ({ locations, setLocations, handleChecks, handleDeleteLocation }) => {


  return (
    <>
        {(locations.length !== 0) ? (
         < LocationsList locations = {locations} setLocations = {setLocations} handleChecks = {handleChecks} handleDeleteLocation = {handleDeleteLocation}/>
        ) : (<p>No locations to display</p>) }
        <br></br>
        <Alert variant="dark">
        Total checked locations = {locations.filter((location) => location.checked === true).length}
        </Alert>
    </>
  )
}

export default Content
