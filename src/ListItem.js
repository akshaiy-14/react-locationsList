import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CloseButton, ListGroup } from 'react-bootstrap';


const ListItem = ({location, handleChecks, handleDeleteLocation}) => {


  return (
    <ListGroup.Item>
        <input type="checkbox" onChange={() => handleChecks(location.id)} checked={location.checked}>
        </input>
        <label style={location.checked ? {textDecoration:"line-through"} : null}> {location.placeName} </label>
        <CloseButton onClick={() => handleDeleteLocation(location.id)}> </CloseButton>
    </ListGroup.Item>
  )
}

export default ListItem