import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

const SearchLocation = ( {setSearch} ) => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Label>
            Search Location: 
        </Form.Label>
        <Form.Control required type="text" placeholder="Search a location" onChange={(e) => setSearch(e.target.value)}>
        </Form.Control>
    </Form>
  )
}

export default SearchLocation