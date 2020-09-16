import React from "react";
import DrinksButtons from "./drinks-buttons";
import "./style.css";


export const QuizPage = () => {


    // { url, drink_name, ingredient_number }
    
    return (
        <>
        <img className="drink-img" src={url} alt="" />
        <h2>{drink_name}</h2>
        <p>{ingredient_number}</p>
        <DrinksButtons></DrinksButtons>
        </>
    )
}

//image tag for fetched url 
//heading for fetched drink name
//p tag or whatever for number of ingredients
//space for buttons, always more than no of ingredients
//submit button to match choices against fetched list of ingredients 