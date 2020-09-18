//import whatever we need
import React from "react";

export const Success = ({ success, setSuccess, setGoAgain , goAgain}) => {
  return (
    <>
      <h1>ALL CORRECT!</h1>
      <img className="success-image" src="https://media.giphy.com/media/QMkPpxPDYY0fu/giphy.gif" alt="" />
      <p>You have correctly guessed every ingredient</p>
      <button
        onClick={() => {
          setSuccess(false);
          setGoAgain(!goAgain);
        }}>
        GO AGAIN
      </button>
    </>
  );
};
