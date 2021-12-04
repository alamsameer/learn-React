import { useState, useEffect } from "react";
import Results from "./Result"
import useBreedList from "./useBreedList";
const ANIMALS = ["dog", "bird", "dinosaur", "who started"];
const SearchPet = () => {
  const [location, setlocation] = useState(""); // [0] a string and [1] a dispatch function
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const[breeds]=useBreedList(animal)
  // const breeds = [];
  useEffect(() => {
    requestPets();
  }, []);
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json);
    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form
       onSubmit={(e)=>{
         e.preventDefault();
         requestPets();
       }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            onCut={()=>{console.log("hlo brother");}}
            onChange={(e) => setlocation(e.target.value)}
            value={location}
            placeholder="location"
          />
          <button>Submit</button>
        </label>
        <label htmlFor="animal">
          Animals
          <select
            id="animals"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)} //for the accessibility
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breeds">
          Breeds
          <select
            id="breeds"
            value={breeds}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)} //for the accessibility
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
      </form>
      {console.log(pets)}
      <Results pets={pets}/>
    </div>
  );
};
export default SearchPet;
