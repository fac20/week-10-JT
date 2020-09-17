import React from "react";
import "./style.css";
import { uniqueIngredientsArray } from "../../utils/ingredientsArray";

export const DrinksButtons = (props) => {
  //true drink ingredients
  const drinkIngredients = props.drinksIngredients;


  
  //array scrambling function from SO!
  const arrayScrambler = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  //scramble big list
  const scrambledIngredientsArray = arrayScrambler(uniqueIngredientsArray);

  let cleanedScrambledArray = [
    ...scrambledIngredientsArray.filter((x) => drinkIngredients.indexOf(x) == -1),
  ];

  //create list for buttons with mixed up list
  for (let i = drinkIngredients.length; i < 9; i++) {
    drinkIngredients.push(cleanedScrambledArray[i]);
  }

  //scramble list again so true ingredients are not always first
  const buttonsArray = arrayScrambler(drinkIngredients);

  console.log(buttonsArray);

  return (
    <>
      <ul>
        {buttonsArray.map((ingredient) => (
          <li key={ingredient}>
            <button onClick={e => props.setSelected([...props.selected,e.target.textContent])}>{ingredient}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

{/* <label htmlFor="max-price">
Max price
<input
  type="range"
  id="max-price"
  min="0.5"
  max="9"
  step="0.25"
  value={priceFilter[1]}
  onChange={e => setPriceFilter([priceFilter[0], e.target.value])}
/>
</label> */}

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
