import React from 'react'

const AddLocation = ({newLocation, setNewLocation, handleSubmitLocation}) => {

  return (
    <form>
        <label>
            Add Location: 
        </label>
        <input required type="text" placeholder="Add a location" value = {newLocation} onChange = {(e) => setNewLocation(e.target.value)}>
        </input>
        <button onClick={handleSubmitLocation}> Add </button>
    </form>
  )
}

export default AddLocation