//import whatever we need
import React from "react";

export const Fail = ({ fail, setFailed, selected, realIngredients, setGoAgain,goAgain }) => {
  //
  return (
    <>
      <h1> NOT QUITE!</h1>
      <img className="fail-image" src="https://placekitten.com/200/300" alt="" />
      <p>{selected}</p>
      <p>{realIngredients}</p>
      <button
        onClick={() => {
          setFailed(false);
          setGoAgain(!goAgain);
        }}>
        GO AGAIN
      </button>
    </>
  );
};
