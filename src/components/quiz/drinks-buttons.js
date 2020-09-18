import React from "react";
import "./style.css";
import { uniqueIngredientsArray } from "../../utils/ingredientsArray";
import { arrayScrambler } from "../../utils/array-scrambler";

export const DrinksButtons = ({drinksIngredients, selected,setSelected,goAgain}) => {
  //make empty array to hold final selection of mixed buttons
  const [buttonsArray, setButtonsArray] = React.useState([]);

  //array scrambling function from SO!
  React.useEffect(() => {
    //scrambles our massive array of ingredients that we wrote
    const scrambledIngredientsArray = arrayScrambler(uniqueIngredientsArray);

    //drop the real ingredients into an array with all the options
    //filter out all the duplicates 
    //now we have a new array with a bunch of fake ingredients that don't dupe the reeal ones
    let cleanedScrambledArray = [
      ...scrambledIngredientsArray.filter((x) => drinksIngredients.indexOf(x) == -1),
    ];

    //add these fakes to the real ingredients
    for (let i = drinksIngredients.length; i < 9; i++) {
      drinksIngredients.push(cleanedScrambledArray[i]);
    }

    //scramble list again so true ingredients are not always first in the button list
    setButtonsArray(arrayScrambler(drinksIngredients));
  },[]);

  return (
    <>
      <ul>
        {buttonsArray.map((ingredient) => (
          <li key={`${ingredient} key`}>
            <input id={ingredient} name={ingredient} type="checkbox" onChange={(e) => setSelected({...selected, [e.target.name]: e.target.checked })}></input>
            <label htmlFor={ingredient}>{ingredient}</label>
          </li>
        ))}
      </ul>
    </>
  );
};


{/* <button onClick={(e) => setSelected([...selected, e.target.textContent])}>
              {ingredient}
            </button> */}
// onChange={event => setSelect({…selected, [event.target.name]: event.target.checked })} 

// map through response and create ingredients array [rum, vodka, lemon]
//have a big array of drink options  [ gin, sour mix, pineapple juice, rum, vodka, lemon]
//have an empty array of 9 buttons
//get ingredients, count them and place into array
//count empty elements in array
// 10 - Array.length = 7
//take options already in button array out of options array
// array.filter
//randomise/jump options array
//pull that number from the options array
//randomise again!
//map over array and place each drink on a button
//send this component to quiz
//quiz will have to wait for this comp to be generated!
