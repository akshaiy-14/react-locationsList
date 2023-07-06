import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import AddLocation from './AddLocation';
import { useState, useEffect } from 'react';
import SearchLocation from './SearchLocation';

function App() {

  const API_URL = "http://localhost:3500/locations";
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [apiFetchError, setApiFetchError] = useState(null);

  // API calls for POST, UPDATE (PATCH) and DELETE methods
  const apiCalls = async (url, mode, errMsg=null) => {
    try {
      const response = await fetch(url, mode);
      if (!response) throw Error(`Error occured during ${mode.method} API call`);
    }
    catch (err) {
      errMsg = err.message;
    }
    finally {
      return errMsg;
    }
  }

  // API call for the GET method
  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {throw Error("There was an error in loading the data from the API");}
      const listLocations = await response.json();
      setLocations(listLocations);
    }
    catch (err) {
      setApiFetchError(err.message);
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(async () => {
      await fetchItems();
    }, 1000);

  }, [])


  const addNewLocation = async (newLoc) => {
    const newLocToAdd = {
      placeName: newLoc,
      id: (locations.length === 0 ? 1 : locations[locations.length - 1].id + 1),
      checked: false
    };
    const allLocations = [...locations, newLocToAdd];
    setLocations(allLocations);

    const postMode = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLocToAdd)
    };

    const result = await apiCalls(API_URL, postMode);
    if (result) {setApiFetchError(result);}
  }




  const handleChecks = async (id) => {
    const modLocations = locations.map((location) => location.id === id ? { ...location, checked: !location.checked } : location);
    setLocations(modLocations);

    const newLoc = modLocations.find((location) => location.id === id);

    const updateMode = {
      method: "PATCH",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newLoc)
    };
    const updateUrl = `${API_URL}/${id}`;
    const result = await apiCalls(updateUrl, updateMode);
    if (result) {setApiFetchError(result);}
  }




  const handleDeleteLocation = async (id) => {
    const modLocations = locations.filter((location) => location.id !== id);
    setLocations(modLocations);

    const delLoc = locations.find(location => location.id === id);

    const deleteMode = {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(delLoc)
    }

    const delUrl = `${API_URL}/${id}`;
    const result = await apiCalls(delUrl,deleteMode);
    if (result) {setApiFetchError(result);}
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
      <AddLocation newLocation={newLocation} setNewLocation={setNewLocation} handleSubmitLocation={handleSubmitLocation} />
      <SearchLocation search={search} setSearch={setSearch} />
      <main>
        {apiFetchError && <p style={{color:"red"}}> {apiFetchError}</p>}
        {isLoading && <p> The data is loading... </p>}
        {!apiFetchError && !isLoading && <Content locations={locations.filter(location => ((location.placeName).toLowerCase()).includes(search.toLowerCase()))} setLocations={setLocations} handleChecks={handleChecks} handleDeleteLocation={handleDeleteLocation} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
