import Pet from "./Pet.js";
  function Results({pets}){
      return (
          <div className="search">
              {!pets.length?(<h1>no pet found</h1>):(
                     pets.map((pet) => (
            <Pet
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              key={pet.id}
              images={pet.images}
              location={`${pet.city}.${pet.state}`}
              id={pet.id}
            />
          ))
              )}
          </div>

      )
  }
  export default Results 