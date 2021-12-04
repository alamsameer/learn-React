import Pet from "./Pet";

const Results = ({ pets }) => {
  console.log(pets);
  return (
    console.log(pets),
    <div className="search">
       {console.log(pets.length)},
      {pets.length?(
        <h2>No pets found lol</h2>
      ) : (
        pets.map(({ pet }) => (
            console.log(pet),
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.imaages}
            location={`${pet.city},${pet.city}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
