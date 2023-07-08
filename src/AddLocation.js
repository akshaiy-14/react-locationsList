import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap'
import Button from '@mui/material/Button';

const AddLocation = ({newLocation, setNewLocation, handleSubmitLocation}) => {

  return (
    <Form>
        <Form.Label>
            Add Location: 
        </Form.Label>
        <Form.Control required type="text" placeholder="Add a location" value = {newLocation} onChange = {(e) => setNewLocation(e.target.value)}>
        </Form.Control>
        <br></br>
        <Button variant='contained' onClick={handleSubmitLocation}> Add </Button>
    </Form>
  )
}

export default AddLocation