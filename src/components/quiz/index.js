import React from "react";
import {DrinksButtons} from "./drinks-buttons";
import { fetchHelper as getDrink, API_BASE } from "../../utils/fetch-helper";
import "./style.css";
import {Success} from "../answer/success/index"
import {Fail} from "../answer/fail/index"

export const QuizPage = () => {

  const [drinkData, setDrinkData] = React.useState(null);
  const [selected, setSelected] = React.useState([]);
  const [success,setSuccess] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [goAgain, setGoAgain]= React.useState(false);
  
  React.useEffect(() => {
   
    const url = `${API_BASE}`;
    getDrink(url).then((drink) => setDrinkData(drink.drinks[0]));
  }, [goAgain]);
  if (!drinkData) {
    return <h3>...Bartender is mixing ya bevvy...</h3>;
  }

  console.log(drinkData)

  const {strDrink, strDrinkThumb } = drinkData;
  
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
  ].filter((ing) => ing != null && ing != "");
  
  let cleanedIngredientsArray = [...new Set(ingredientsArray)]
  
  console.log(cleanedIngredientsArray)

  const handleSubmit = (e) => {
  e.preventDefault()
  console.log(selected, typeof selected);

  let counter = 0;

  selected.forEach(el => {if(cleanedIngredientsArray.includes(el))counter++;})

  console.log(counter);
setFailed(true);
  }

  
  return (
    <>
      <img className="drink-img" src={strDrinkThumb} alt="" />
      <h2>{strDrink}</h2>
      <p>{ingredientsArray.length}</p>
      {!success && !failed ? <p>Number selected: {selected.length}</p>: null}
      {drinkData && !success && !failed ? <DrinksButtons drinksIngredients={cleanedIngredientsArray} selected={selected} setSelected={setSelected}></DrinksButtons> : null}
      {drinkData && !success && !failed  ? <button onClick={handleSubmit}>Submit</button> : null}
      {success ? <Success success={success} setSuccess={setSuccess} setGoAgain={setGoAgain} goAgain={goAgain}></Success> : null}
      {failed ? <Fail realIngredients={cleanedIngredientsArray} selected={selected} fail={failed} setFailed={setFailed} setGoAgain={setGoAgain} goAgain={goAgain}></Fail> : null }
    </>
  );
};

//hop over selected and hop over cleaned ingredients
//tot up matches

//if all match, show Success component
//consisting of: nice picture, contents of state, contents of selected

//if not all match, show scorecard component
//consisting of: matched numbers, contents of state, contents of selected

//onChange={event => setSelect({…selected, [event.target.name]: event.target.checked })}selected["orange”]
//const [selected, setSelected] = React.useState({})