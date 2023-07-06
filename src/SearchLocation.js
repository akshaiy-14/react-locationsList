import React from 'react'

const SearchLocation = ( {setSearch} ) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>
            Search Location: 
        </label>
        <input required type="text" placeholder="Search a location" onChange={(e) => setSearch(e.target.value)}>
        </input>
    </form>
  )
}

export default SearchLocation