import React from "react";
import "./style.css";
import { uniqueIngredientsArray } from "../../utils/ingredientsArray";
import { arrayScrambler } from "../../utils/array-scrambler";

export const DrinksButtons = ({drinksIngredients, selected,setSelected,goAgain}) => {
  //true drink ingredients
  const [buttonsArray, setButtonsArray] = React.useState([]);

  //array scrambling function from SO!

  React.useEffect(() => {
    const scrambledIngredientsArray = arrayScrambler(uniqueIngredientsArray);

    let cleanedScrambledArray = [
      ...scrambledIngredientsArray.filter((x) => drinksIngredients.indexOf(x) == -1),
    ];

    //create list for buttons with mixed up list
    for (let i = drinksIngredients.length; i < 9; i++) {
      drinksIngredients.push(cleanedScrambledArray[i]);
    }

    //scramble list again so true ingredients are not always first
    setButtonsArray(arrayScrambler(drinksIngredients));
  },[]);

  console.log(buttonsArray);

  return (
    <>
      <ul>
        {buttonsArray.map((ingredient) => (
          <li key={`${ingredient} key`}>
            <label htmlFor={ingredient}>{ingredient}</label>
            <input id={ingredient} name={ingredient} type="checkbox" onChange={(e) => setSelected({...selected, [e.target.name]: e.target.checked })}></input>
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
// selected["orange”] 
//make api call
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
