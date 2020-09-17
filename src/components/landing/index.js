//import whatever we need
import React from "react";
import "./style.css";

export const LandingPage = ({landing, setLanding}) => {
  
  return (
    <>
      <h1>WELCOME TO THE COOL COCKTAIL-GUESSING COOL APP!</h1>
      <img className="landing-image" src="https://placekitten.com/200/300" alt="" />
      <p>You will be presented with a list of options for a given cocktail.</p>
      <p>After clicking, the buttons will be mixed by our bartender, React.</p>
      <p>Correctly guess all of them to win a point!</p>
      <button onClick={() => setLanding(!landing)}>START</button>
    </>
  );
};



//one big landing component
//put following three components in:
//welcome- heading
//logo- svg
//instructions- p tag
//button to start

//export the big landing component

// export const CardImage = ({ url }) => (
//     <figure className="card-image--container">
//       <img className="card-image--img" src={url} alt="" />
//     </figure>
//   );
