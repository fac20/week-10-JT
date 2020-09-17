import React from "react";
// import DrinksButtons from "./drinks-buttons";
import { fetchHelper as getDrink, API_BASE } from "../../utils/fetch-helper";
import "./style.css";

export const QuizPage = () => {

  const [drinkData, setDrinkData] = React.useState(null);

  React.useEffect(() => {
    const url = `${API_BASE}`;
    getDrink(url).then((drink) => setDrinkData(drink.drinks[0]));
  }, []);
  if (!drinkData) {
    return <h3>...Bartender is mixing ya bevvy...</h3>;
  }

  console.log(drinkData)
  
  let ingredientsArray = [
    drinkData.strIngredient1,
    drinkData.strIngredient2,
    drinkData.strIngredient3,
    drinkData.strIngredient4,
    drinkData.strIngredient5,
    drinkData.strIngredient6,
    drinkData.strIngredient7,
    drinkData.strIngredient8,
    drinkData.strIngredient9,
    drinkData.strIngredient10,
    drinkData.strIngredient11,
    drinkData.strIngredient12,
    drinkData.strIngredient13,
    drinkData.strIngredient14,
    drinkData.strIngredient15,
  ].filter((ing) => ing != null);


  const {strDrink, strDrinkThumb } = drinkData;

  return (
    <>
      <img className="drink-img" src={strDrinkThumb} alt="" />
      <h2>{strDrink}</h2>
      <p>{ingredientsArray.length}</p>
    </>
  );
};

//image tag for fetched url
//heading for fetched drink name
//p tag or whatever for number of ingredients
//space for buttons, always more than no of ingredients
//submit button to match choices against fetched list of ingredients