import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import AddLocation from './AddLocation';
import { useState } from 'react';
import SearchLocation from './SearchLocation';

function App() {

  const [locations, setLocations] = useState(JSON.parse(localStorage.getItem("LocationsList")));
  const [newLocation, setNewLocation] = useState("");
  const [search, setSearch] = useState("");

  const addNewLocation = (newLoc) => {
    const newLocToAdd = { placeName : newLoc,
                          id : (locations.length === 0 ? 1 : locations[locations.length -1].id + 1),
                          checked : false };
    const allLocations = [...locations, newLocToAdd];
    setLocations(allLocations);
    localStorage.setItem("LocationsList", JSON.stringify(allLocations));
  }

  const handleChecks = (id) => {
    const modLocations = locations.map((location) => location.id === id ? {...location, checked: !location.checked} : location);
    setLocations(modLocations);
    localStorage.setItem("LocationsList", JSON.stringify(modLocations));
  }

  const handleDeleteLocation = (id) => {
    const modLocations = locations.filter((location) => location.id !== id);
    setLocations(modLocations);
    localStorage.setItem("LocationsList", JSON.stringify(modLocations));
  }

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    if (!newLocation) return;
    addNewLocation(newLocation);
    setNewLocation("");
  }

  return (
    <div className="App">
      <Header />
      <AddLocation newLocation = {newLocation} setNewLocation = {setNewLocation} handleSubmitLocation = {handleSubmitLocation}/>
      <SearchLocation search={search} setSearch={setSearch}/>
      <Content locations={locations.filter(location => ((location.placeName).toLowerCase()).includes(search.toLowerCase()))} setLocations={setLocations} handleChecks = {handleChecks} handleDeleteLocation = {handleDeleteLocation}/>
      <Footer />
    </div>
  );
}

export default App;
