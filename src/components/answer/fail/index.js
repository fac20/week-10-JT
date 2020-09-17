//import whatever we need
import React from "react";

export const Fail = ({ fail, setFailed, selected, realIngredients, setGoAgain,goAgain }) => {
  return (
    <>
      <h1> NOT QUITE!</h1>
      <img className="fail-image" src="https://media.giphy.com/media/KHJw9NRFDMom487qyo/giphy.gif" alt="" />
      <p>You chose: {Object.keys(selected).map(item=> item+", ")}</p>
      <p>The real ingredients were: {realIngredients.map(item=> item+", ")}</p>
      <button
        onClick={() => {
            setGoAgain(!goAgain); 
          setFailed(false);
        }}>
        GO AGAIN
      </button>
    </>
  );
};
