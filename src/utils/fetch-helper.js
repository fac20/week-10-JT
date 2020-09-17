export const API_ADDRESS = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export const fetchHelper = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.status != 200) {
        throw new Error("No drinks for you! Go home!");
      }
      return response.json();
    })
    .catch(console.log);
};


