import React from "react";

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h1", {}, props.animal),
//       React.createElement("h1", {}, props.breed),
//     ]);
//   };

//  starting jsx 
 const searchPet =(props)=>{
     return (
         <div>
          <h2>{props.name}</h2>
          <h3>{props.animal}</h3>
          <h3>{props.breed}</h3>
         </div>
     )

 }
  export default searchPet