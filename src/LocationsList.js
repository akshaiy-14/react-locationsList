import React from 'react'
import ListItem from './ListItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap'

const LocationsList = ({ locations, handleChecks, handleDeleteLocation }) => {

  return (
    <ListGroup>
          {locations.map((location) => (
            <ListItem key = {location.id} location = {location} handleChecks = {handleChecks} handleDeleteLocation = {handleDeleteLocation}/>
          ))}
    </ListGroup>
  )
}

export default LocationsList