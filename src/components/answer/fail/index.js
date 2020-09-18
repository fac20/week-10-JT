//import whatever we need
import React from "react";
import {outputFormatter} from "../../../utils/output-formatter"

export const Fail = ({ fail, setFailed, selected, realIngredients, setGoAgain, goAgain }) => {
  
  return (
    <>
      <h1> NOT QUITE!</h1>
      <img
        className="fail-image"
        src="https://media.giphy.com/media/KHJw9NRFDMom487qyo/giphy-downsized.gif"
        alt=""
      />
      <p>You chose: {outputFormatter(Object.keys(selected))}</p>
      <p>The real ingredients were: {outputFormatter(realIngredients)}</p>
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

//if (i !== realIngredients.length-1){item+", "}
